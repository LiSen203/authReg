module.exports={ 
  chainWebpack: config => {
  const svgRule = config.module.rule("svg");   
     svgRule.uses.clear();
     svgRule
     .use("svg-sprite-loader")
     .loader("svg-sprite-loader")
    .options({
        symbolId: "icon-[name]"
      });
  },
}