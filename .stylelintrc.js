module.exports = {
  // 更多具体规则见 'http://stylelint.docschina.org/user-guide/rules/'
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-config-idiomatic-order"
  ],
  plugins: ["stylelint-order", "stylelint-scss"],
  rules: {
    // css2空格缩进
    indentation: 2,
    // 指定单位的大小写
    "unit-case": null,
    "no-empty-source": null,
    "property-no-unknown": null,
    "declaration-block-trailing-semicolon": null,
    "property-no-vendor-prefix": [
      true,
      { ignoreProperties: ["background-clip", "box-orient"] }
    ],
    "number-leading-zero": "never",
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["v-deep"]
      }
    ],
    "color-named": null,
    // 在函数的逗号之后要求有一个换行符或禁止有空白
    "function-comma-newline-after": null,
    // 在函数的括号内要求有一个换行符或禁止有空白
    "function-parentheses-newline-inside": null,
    // url使用引号
    "function-url-quotes": "always",
    // 禁止小于 1 的小数的前导 0
    "number-leading-zero": "never",
    // 字符串使用双引号
    "string-quotes": "double",
    // 要求选择器列表的逗号之前有一个换行符
    "selector-list-comma-newline-before": "never-multi-line",
    // 在媒体查询的逗号之前禁止有一换行
    "media-query-list-comma-newline-before": "never-multi-line",
    // 禁止低优先级的选择器出现在高优先级的选择器之后
    "no-descending-specificity": null,
    // 禁止空源
    "no-empty-source": null,
    // 禁止缺少文件末尾的换行符
    "no-missing-end-of-source-newline": null,
    // 这个如果引用了w3c标准之外的字体会报错
    "font-family-no-missing-generic-family-keyword": null
  }
}
