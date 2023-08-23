module.exports = {
  env: {
    node: true,
    es2021: true
  },
  extends: [
    'plugin:vue/essential',
    'standard',
    '@nuxtjs/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    'vue/no-v-html': 'warn'
  },
  ignorePatterns: ['node_modules', '.nuxt', 'dist']
}
