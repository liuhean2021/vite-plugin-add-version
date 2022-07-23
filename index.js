const htmlRegex = /\.css|\.js/g;
module.exports =  function (version){
  return {
    name: "vite-plugin-add-version",
    apply: "build",
    transformIndexHtml(html) {
      return html.replace(htmlRegex, ($0) => `${$0}?v=${version}`)
    },
  }
};
