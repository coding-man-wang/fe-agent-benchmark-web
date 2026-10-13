import js from '@eslint/js'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import tseslint from 'typescript-eslint'

export default [
  // =========================================================
  // Ignore
  // =========================================================
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'coverage/**',
      'playwright-report/**',
      'test-results/**',

      // 防止历史 vue-tsc emit 文件再次污染 ESLint
      'src/**/*.vue.js',
      'src/**/*.vue.d.ts',
    ],
  },

  // =========================================================
  // JavaScript base
  // =========================================================
  js.configs.recommended,

  // =========================================================
  // TypeScript
  // =========================================================
  ...tseslint.configs.recommended,

  // =========================================================
  // Vue rules
  // =========================================================
  ...pluginVue.configs['flat/essential'],

  // =========================================================
  // Application JS / TS
  // =========================================================
  {
    files: [
      'src/**/*.{js,ts}',
    ],

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2022,
      },

      parser: tseslint.parser,

      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },

  // =========================================================
  // Vue SFC
  // =========================================================
  {
    files: [
      'src/**/*.vue',
    ],

    languageOptions: {
      // 第一层：
      // 负责解析 .vue 文件结构
      parser: vueParser,

      globals: {
        ...globals.browser,
        ...globals.es2022,
      },

      parserOptions: {
        // 第二层：
        // <script lang="ts"> 使用 TS parser
        parser: tseslint.parser,

        ecmaVersion: 'latest',
        sourceType: 'module',

        extraFileExtensions: [
          '.vue',
        ],
      },
    },

    rules: {
      'vue/multi-word-component-names': 'off',

      // Benchmark 项目暂时不让纯排版规则影响工程验证。
      'vue/singleline-html-element-content-newline': 'off',
    },
  },

  // =========================================================
  // Unit tests
  // =========================================================
  {
    files: [
      'tests/**/*.{js,ts}',
    ],

    languageOptions: {
      parser: tseslint.parser,

      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
      },

      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },

  // =========================================================
  // Config files / Node scripts
  // =========================================================
  {
    files: [
      '*.config.{js,ts}',
      'scripts/**/*.{js,ts}',
    ],

    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2022,
      },
    },
  },
]