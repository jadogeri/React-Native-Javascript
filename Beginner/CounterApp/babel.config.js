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
// "@Navigation/*": ["src/navigation/*"],
//       "@Components/*": ["src/components/*"],
//       "@Screens/*": ["src/screens/*"],
//       "@Stores/*": ["src/stores/*"],
//       "@Assets/*": ["assets/*"]

// import Home from './Home'
// import Contact from './Contact'
// import Login from './Login'
// import SignUp from './Signup';

// export {
//     Home,
//     Contact,
//     Login,
//     SignUp,
// }