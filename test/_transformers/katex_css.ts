const css = `
@font-face {
  font-family: KaTeX_Mock;
  src: url(fonts/KaTeX_Mock.woff2) format('woff2'),
    url('fonts/KaTeX_Mock.woff') format('woff'),
    url("fonts/KaTeX_Mock.ttf") format('truetype');
  font-weight: 400;
  font-style: normal;
}

.katex {
  display: inline;
}
`.trim()

module.exports = {
  process(src) {
    return `module.exports = ${JSON.stringify(css)};`
  },
}
