// babel.config.js

const path = require('path');

module.exports = function(api) {
  api.cache(true);

  // THIS MUST BE CORRECT: ProjectRoot/___mocks__/empty-module.js
  const emptyModulePath = path.resolve(__dirname, '__mocks__/empty-module.js'); 

  return {
    presets: ['babel-preset-expo'],
    env: {
      web: {
        plugins: [
          [
            'module-resolver',
            {
              alias: {
                // This is the problematic module you are aliasing
                'react-native/Libraries/Utilities/codegenNativeCommands': emptyModulePath,
              },
            },
          ],
        ],
      },
    },
    // ... other plugins
  };
};