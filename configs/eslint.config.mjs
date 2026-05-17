import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import eslintConfigPrettier from "eslint-config-prettier";
import checkFile from "eslint-plugin-check-file";
import compat from "eslint-plugin-compat";
import depend from "eslint-plugin-depend";
import importX from "eslint-plugin-import-x";
import jsonc from "eslint-plugin-jsonc";
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
    plugins: {
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
      sonarjs: sonarjs,
      tailwindcss: tailwind,
      unicorn: unicorn,
      "unused-imports": unusedImports,
      "validate-jsx-nesting": validateJsxNesting,
    },
    rules: {
      // Secrets (Increased tolerance for high-entropy URLs)
      "no-secrets/no-secrets": ["error", { tolerance: 4.5 }],

      // Tailwind
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/enforces-negative-arbitrary-values": "error",
      "tailwindcss/enforces-shorthand": "error",
      "tailwindcss/no-custom-classname": "off",

      // JSX-A11y handled by eslint-config-next/core-web-vitals

      // Perfectionist (Sorting & Beauty)
      ...perfectionist.configs["recommended-alphabetical"].rules,

      // React Performance
      ...reactPerf.configs.recommended.rules,

      // Node.js rules
      ...node.configs["flat/recommended"].rules,
      // Disable — false positive for TypeScript path aliases (@/)
      "n/no-missing-import": "off",

      // Hygiene (No extend native)
      ...noUseExtendNative.configs.recommended.rules,

      // JSX Nesting (SEO & Hydration)
      "validate-jsx-nesting/no-invalid-jsx-nesting": "error",

      // Supply Chain Security
      ...depend.configs["flat/recommended"].rules,

      // Browser Compatibility
      "compat/compat": "warn",

      "no-constructor-bind/no-constructor-bind": "error",

      // Import Standardization
      "no-relative-import-paths/no-relative-import-paths": [
        "warn",
        { allowSameFolder: true, prefix: "@", rootDir: "src" },
      ],
      // Aesthetics & Hygiene
      "prefer-arrow/prefer-arrow-functions": [
        "warn",
        {
          classPropertiesAllowed: false,
          disallowPrototype: true,
          singleReturnOnly: false,
        },
      ],

      // Regexp
      ...regexp.configs["flat/recommended"].rules,

      // Promise
      ...promise.configs["flat/recommended"].rules,

      "@typescript-eslint/no-unused-vars": "off",
      // Unused imports
      "no-unused-vars": "off",
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

      // SonarJS (Modern flat config access)
      ...sonarjs.configs.recommended.rules,

      // Unicorn
      ...unicorn.configs.recommended.rules,
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
      "unicorn/filename-case": "off",
      "unicorn/no-null": "off",

      "unicorn/prefer-query-selector": "warn",
      "unicorn/prevent-abbreviations": "off",
    },
    settings: {
      "import-x/resolver": {
        node: true,
        typescript: true,
      },
      tailwindcss: {
        config: tailwindConfigPath,
      },
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "node_modules/**",
    "public/**",
    "videos/**",
    "package-lock.json",
    "*.lock",
  ]),
  // JSON Linting (CMS Data Integrity)
  ...jsonc.configs["flat/recommended-with-json"],
  eslintConfigPrettier,
  // Playwright (E2E Testing)
  {
    ...playwright.configs["flat/recommended"],
    files: ["tests/**"],
  },
]);

export default eslintConfig;
