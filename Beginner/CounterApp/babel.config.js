module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins:[
      [
        'module-resolver',
        {
          root:['./src'],
          alias:{
            '@Src': "./src",
            '@Tests':  './tests',
            '@Screens': './src/screens',
            '@Components':'./src/components',
            '@Assets':'./assets'           
          }

        },
      ]
    ]
  };
};

