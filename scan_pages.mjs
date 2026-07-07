import fs from 'fs';
import path from 'path';
import ts from 'typescript';

const APP_DIR = path.join(process.cwd(), 'src/app');

const SERVICE_ROUTES = [
  'sales-qualified-lead-generation',
  'market-research',
  'human-powered-market-intelligence',
  'media-production',
  'global-event-solutions',
  'digital-marketing',
  'tradeshow-booth-solutions',
  'services'
];

function findPages(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findPages(filePath, fileList);
    } else if (file === 'page.tsx') {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const allPages = SERVICE_ROUTES.map(route => path.join(APP_DIR, route))
  .filter(p => fs.existsSync(p))
  .flatMap(dir => findPages(dir));

console.log(`Found ${allPages.length} pages.`);
const results = {};

function analyzePage(filePath) {
  const code = fs.readFileSync(filePath, 'utf-8');
  const sourceFile = ts.createSourceFile(filePath, code, ts.ScriptTarget.Latest, true);

  const pageData = {
    props: [],
    slots: {
      customSections: [],
      preProcessSections: [],
      preStudiesSections: [],
      preContactSections: []
    },
    hardcodedLiterals: []
  };

  function visit(node) {
    if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
      if (node.tagName.getText(sourceFile) === 'ServicePage') {
        node.attributes.properties.forEach(attr => {
          if (ts.isJsxAttribute(attr)) {
            const propName = attr.name.getText(sourceFile);
            pageData.props.push(propName);
            
            if (['customSections', 'preProcessSections', 'preStudiesSections', 'preContactSections'].includes(propName)) {
              if (attr.initializer && ts.isJsxExpression(attr.initializer) && attr.initializer.expression) {
                const elements = [];
                function findElements(n) {
                  if (ts.isJsxElement(n)) {
                    elements.push(n.openingElement.tagName.getText(sourceFile));
                    ts.forEachChild(n, findElements);
                  } else if (ts.isJsxSelfClosingElement(n)) {
                    elements.push(n.tagName.getText(sourceFile));
                  } else {
                    ts.forEachChild(n, findElements);
                  }
                }
                findElements(attr.initializer.expression);
                pageData.slots[propName] = elements.filter(e => e !== '' && e !== 'div' && e !== 'section' && e !== 'Fragment' && e[0] === e[0].toUpperCase());
              }
            }
          }
        });
      }
    }

    if (ts.isVariableDeclaration(node) && node.name.getText(sourceFile) !== 'metadata' && node.name.getText(sourceFile) !== 'Page' && node.initializer) {
      if (ts.isArrayLiteralExpression(node.initializer)) {
         pageData.hardcodedLiterals.push(`Array: ${node.name.getText(sourceFile)}`);
      } else if (ts.isStringLiteral(node.initializer) && node.name.getText(sourceFile).includes('Heading')) {
         pageData.hardcodedLiterals.push(`String: ${node.name.getText(sourceFile)}`);
      }
    }

    if (ts.isJsxAttribute(node) && node.initializer && ts.isStringLiteral(node.initializer)) {
        const name = node.name.getText(sourceFile);
        if (['heading', 'title', 'label', 'description', 'relatedServicesHeading'].includes(name)) {
            pageData.hardcodedLiterals.push(`JSX String Prop: ${name}="${node.initializer.text}"`);
        }
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  results[path.relative(APP_DIR, filePath)] = pageData;
}

allPages.forEach(analyzePage);

fs.writeFileSync('scan_results.json', JSON.stringify(results, null, 2));
console.log('Results written to scan_results.json');
