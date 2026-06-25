import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const RESULTS_DIR = '/Users/suvra/Documents/B2BSA2/.lighthouse/results';
const OUTPUT_FILE = '/Users/suvra/Documents/B2BSA2/.lighthouse/parsed-results.json';

async function parseResults() {
  const files = (await readdir(RESULTS_DIR)).filter(f => f.endsWith('.json')).sort();
  const results = [];

  for (const file of files) {
    try {
      const raw = await readFile(join(RESULTS_DIR, file), 'utf-8');
      const report = JSON.parse(raw);

      // Determine page and mode from filename
      const baseName = file.replace('.json', '');
      const isDesktop = baseName.endsWith('_desktop');
      const isMobile = baseName.endsWith('_mobile');
      const mode = isDesktop ? 'desktop' : isMobile ? 'mobile' : 'unknown';
      const pageName = baseName.replace(/_desktop$|_mobile$/, '').replace(/__/g, '/');

      const cats = report.categories || {};
      const audits = report.audits || {};

      // Extract category scores (0-100)
      const scores = {};
      for (const [key, cat] of Object.entries(cats)) {
        scores[key] = cat.score !== null ? Math.round(cat.score * 100) : null;
      }

      // Extract key metrics
      const metrics = {};
      const metricKeys = [
        'first-contentful-paint',
        'largest-contentful-paint',
        'total-blocking-time',
        'cumulative-layout-shift',
        'speed-index',
        'interactive',
        'server-response-time',
      ];
      for (const key of metricKeys) {
        if (audits[key]) {
          metrics[key] = {
            displayValue: audits[key].displayValue || '',
            numericValue: audits[key].numericValue || null,
            score: audits[key].score !== null && audits[key].score !== undefined
              ? Math.round(audits[key].score * 100)
              : null,
          };
        }
      }

      // Extract failed audits (score < 1 and not informational)
      const failedAudits = [];
      for (const [key, audit] of Object.entries(audits)) {
        if (
          audit.score !== null &&
          audit.score < 0.9 &&
          audit.scoreDisplayMode !== 'informative' &&
          audit.scoreDisplayMode !== 'notApplicable' &&
          audit.scoreDisplayMode !== 'manual'
        ) {
          failedAudits.push({
            id: key,
            title: audit.title,
            description: (audit.description || '').slice(0, 200),
            score: Math.round(audit.score * 100),
            displayValue: audit.displayValue || '',
          });
        }
      }
      failedAudits.sort((a, b) => a.score - b.score);

      results.push({
        file,
        page: pageName === 'homepage' ? '/' : `/${pageName}`,
        mode,
        scores,
        metrics,
        failedAudits: failedAudits.slice(0, 15), // top 15 worst
      });
    } catch (e) {
      console.error(`Failed to parse ${file}: ${e.message}`);
    }
  }

  await writeFile(OUTPUT_FILE, JSON.stringify(results, null, 2));
  console.log(`Parsed ${results.length} results → ${OUTPUT_FILE}`);

  // Print summary table
  console.log('\n=== SCORE SUMMARY ===\n');

  // Group by page
  const pages = {};
  for (const r of results) {
    if (!pages[r.page]) pages[r.page] = {};
    pages[r.page][r.mode] = r.scores;
  }

  // Header
  console.log(
    'Page'.padEnd(65) +
    '| Perf(M) | A11y(M) | BP(M)  | SEO(M) | Perf(D) | A11y(D) | BP(D)  | SEO(D)'
  );
  console.log('-'.repeat(145));

  for (const [page, modes] of Object.entries(pages)) {
    const m = modes.mobile || {};
    const d = modes.desktop || {};
    const row =
      page.padEnd(65) +
      `| ${String(m.performance ?? '-').padStart(4)}    ` +
      `| ${String(m.accessibility ?? '-').padStart(4)}    ` +
      `| ${String(m['best-practices'] ?? '-').padStart(4)}   ` +
      `| ${String(m.seo ?? '-').padStart(4)}   ` +
      `| ${String(d.performance ?? '-').padStart(4)}    ` +
      `| ${String(d.accessibility ?? '-').padStart(4)}    ` +
      `| ${String(d['best-practices'] ?? '-').padStart(4)}   ` +
      `| ${String(d.seo ?? '-').padStart(4)}`;
    console.log(row);
  }
}

parseResults().catch(console.error);
