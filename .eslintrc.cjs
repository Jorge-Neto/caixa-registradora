module.exports = {
    root: true,
    parser: "vue-eslint-parser",
    parserOptions: {
        sourceType: "module",
        parser: {
            js: "espree",
            ts: "@typescript-eslint/parser",
            "<template>": "espree",
        },
        vueFeatures: {
            filter: true,
            interpolationAsNonHTML: false,
        },
    },
    plugins: ["@typescript-eslint", "prettier"],
    extends: ["plugin:vue/strongly-recommended", "eslint:recommended", "@vue/typescript/recommended", "prettier"],
    rules: {
        "@typescript-eslint/no-namespace": "off",
        "prettier/prettier": "error",
    },
    env: {
        node: true,
    },
}
