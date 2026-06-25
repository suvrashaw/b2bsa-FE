import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import eslintConfigPrettier from "eslint-config-prettier";
import boundaries from "eslint-plugin-boundaries";
import checkFile from "eslint-plugin-check-file";
import compat from "eslint-plugin-compat";
import depend from "eslint-plugin-depend";
import importX from "eslint-plugin-import-x";
import jsonc from "eslint-plugin-jsonc";
import jsxA11y from "eslint-plugin-jsx-a11y";
import node from "eslint-plugin-n";
import noConstructorBind from "eslint-plugin-no-constructor-bind";
import noRelativeImportPaths from "eslint-plugin-no-relative-import-paths";
import noSecrets from "eslint-plugin-no-secrets";
import noUseExtendNative from "eslint-plugin-no-use-extend-native";
import perfectionist from "eslint-plugin-perfectionist";
import playwright from "eslint-plugin-playwright";
import preferArrow from "eslint-plugin-prefer-arrow";
import promise from "eslint-plugin-promise";
import reactPerf from "eslint-plugin-react-perf";
import reactRefresh from "eslint-plugin-react-refresh";
import regexp from "eslint-plugin-regexp";
import security from "eslint-plugin-security";
import sonarjs from "eslint-plugin-sonarjs";
import tailwind from "eslint-plugin-tailwindcss";
import unicorn from "eslint-plugin-unicorn";
import unusedImports from "eslint-plugin-unused-imports";
import validateJsxNesting from "eslint-plugin-validate-jsx-nesting";
import { defineConfig, globalIgnores } from "eslint/config";
import { fileURLToPath } from "node:url";

const tailwindConfigPath = fileURLToPath(new URL("../src/app/globals.css", import.meta.url));

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx,mts,cts}"],
    plugins: {
      boundaries: boundaries,
      "check-file": checkFile,
      compat: compat,
      depend: depend,
      "import-x": importX,
      n: node,
      "no-constructor-bind": noConstructorBind,
      "no-relative-import-paths": noRelativeImportPaths,
      "no-secrets": noSecrets,
      "no-use-extend-native": noUseExtendNative,
      perfectionist: perfectionist,
      "prefer-arrow": preferArrow,
      promise: promise,
      "react-perf": reactPerf,
      "react-refresh": reactRefresh,
      regexp: regexp,
      security: security,
      sonarjs: sonarjs,
      tailwindcss: tailwind,
      unicorn: unicorn,
      "unused-imports": unusedImports,
      "validate-jsx-nesting": validateJsxNesting,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "off",

      // Architectural Boundaries
      "boundaries/dependencies": [
        "warn",
        {
          default: "disallow",
          rules: [
            { disallow: { to: { type: "*" } }, from: { type: "types" } },
            { allow: { to: { type: ["types"] } }, from: { type: "lib" } },
            { allow: { to: { type: ["types", "lib", "content"] } }, from: { type: "content" } },
            { allow: { to: { type: ["types", "lib", "content"] } }, from: { type: "ui" } },
            { allow: { to: { type: ["types", "lib", "ui"] } }, from: { type: "cards" } },
            { allow: { to: { type: ["types", "lib", "content", "ui"] } }, from: { type: "forms" } },
            {
              allow: { to: { type: ["types", "lib", "content", "ui"] } },
              from: { type: "layout" },
            },
            {
              allow: { to: { type: ["types", "lib", "content", "ui", "cards", "forms"] } },
              from: { type: "sections" },
            },
            {
              allow: {
                to: {
                  type: ["types", "lib", "content", "ui", "cards", "forms", "sections", "layout"],
                },
              },
              from: { type: "templates" },
            },
            {
              allow: {
                to: {
                  type: [
                    "types",
                    "lib",
                    "content",
                    "ui",
                    "cards",
                    "forms",
                    "layout",
                    "sections",
                    "templates",
                  ],
                },
              },
              from: { type: "app" },
            },
          ],
        },
      ],
      "boundaries/entry-point": "off",
      "boundaries/external": "off",
      "boundaries/no-ignored": "off",
      "boundaries/no-private": "off",
      "boundaries/no-unknown": "off",
      "boundaries/no-unknown-files": "off",

      // Check File Naming
      "check-file/filename-naming-convention": [
        "error",
        {
          "src/components/**/*.{tsx,ts}": "PASCAL_CASE",
          "src/hooks/**/*.ts": "CAMEL_CASE",
          // Exclude .d.ts declaration files — they follow their own convention
          "src/types/**/*.ts": "KEBAB_CASE",
          "src/utils/**/*.ts": "KEBAB_CASE",
        },
        { ignoreMiddleExtensions: true },
      ],
      "check-file/folder-naming-convention": [
        "error",
        {
          "src/components/**": "KEBAB_CASE",
          "src/hooks/**": "KEBAB_CASE",
          "src/types/**": "KEBAB_CASE",
          "src/utils/**": "KEBAB_CASE",
        },
      ],

      // Browser Compatibility
      "compat/compat": "warn",

      // Node.js rules
      ...node.configs["flat/recommended"].rules,
      // Disable — false positive for TypeScript path aliases (@/)
      "n/no-missing-import": "off",

      // Hygiene (No extend native)
      ...noUseExtendNative.configs.recommended.rules,

      "no-constructor-bind/no-constructor-bind": "error",

      // Import Standardization
      "no-relative-import-paths/no-relative-import-paths": [
        "warn",
        { allowSameFolder: true, prefix: "@", rootDir: "src" },
      ],

      // Secrets (Increased tolerance for high-entropy URLs)
      "no-secrets/no-secrets": ["error", { tolerance: 4.5 }],

      "no-unused-vars": "off",

      // Perfectionist (Sorting & Beauty)
      ...perfectionist.configs["recommended-alphabetical"].rules,

      // Aesthetics & Hygiene
      "prefer-arrow/prefer-arrow-functions": [
        "warn",
        {
          classPropertiesAllowed: false,
          disallowPrototype: true,
          singleReturnOnly: false,
        },
      ],

      // Promise
      ...promise.configs["flat/recommended"].rules,

      // React Performance
      ...reactPerf.configs.recommended.rules,

      // Regexp
      ...regexp.configs["flat/recommended"].rules,

      // Security
      ...security.configs.recommended.rules,
      // false positive: bracket-notation object access is idiomatic in React/Next.js
      "security/detect-object-injection": "off",

      // SonarJS (Modern flat config access)
      ...sonarjs.configs.recommended.rules,

      // Supply Chain Security
      ...depend.configs["flat/recommended"].rules,

      // Tailwind
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/enforces-negative-arbitrary-values": "error",
      "tailwindcss/enforces-shorthand": "error",
      "tailwindcss/no-custom-classname": "off",

      // Unicorn
      ...unicorn.configs.recommended.rules,
      "unicorn/filename-case": "off",
      "unicorn/no-null": "off",
      "unicorn/prefer-query-selector": "warn",
      "unicorn/prevent-abbreviations": "off",

      // Unused imports
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          args: "after-used",
          argsIgnorePattern: "^_",
          vars: "all",
          varsIgnorePattern: "^_",
        },
      ],

      // JSX Nesting (SEO & Hydration)
      "validate-jsx-nesting/no-invalid-jsx-nesting": "error",

    },
    settings: {
      "boundaries/elements": [
        { pattern: "src/types/**/*", type: "types" },
        { pattern: "src/lib/**/*", type: "lib" },
        { pattern: "src/content/**/*", type: "content" },
        { pattern: "src/components/ui/**/*", type: "ui" },
        { pattern: "src/components/cards/**/*", type: "cards" },
        { pattern: "src/components/forms/**/*", type: "forms" },
        { pattern: "src/components/layout/**/*", type: "layout" },
        { pattern: "src/components/sections/**/*", type: "sections" },
        { pattern: "src/components/templates/**/*", type: "templates" },
        { pattern: "src/app/**/*", type: "app" },
      ],
      "import-x/resolver": {
        node: true,
        typescript: true,
      },
      tailwindcss: {
        cssConfigPath: tailwindConfigPath,
      },
    },
  },
  // JSX Accessibility — full rule set; plugin already registered by eslint-config-next
  {
    files: ["**/*.{jsx,tsx}"],
    rules: jsxA11y.flatConfigs.recommended.rules,
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "node_modules/**",
    "public/**",
    "package-lock.json",
    "*.lock",
  ]),
  // JSON Linting (CMS Data Integrity)
  ...jsonc.configs["flat/recommended-with-json"],
  eslintConfigPrettier,
  // Scripts — intentionally use dynamic fs paths; disable the rule project-wide would be too broad
  {
    files: ["scripts/**"],
    rules: {
      "security/detect-non-literal-fs-filename": "off",
    },
  },
  // Playwright (E2E Testing)
  {
    ...playwright.configs["flat/recommended"],
    files: ["tests/**"],
  },
]);

export default eslintConfig;
