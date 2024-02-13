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
            src: "./src",
            '@test':  './tests',
            '@screen': './src/screens',
            '@component':'./src/components'

          }

        },
      ]
    ]
  };
};
