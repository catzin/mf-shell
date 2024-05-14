const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  ["@host-shared"]);

module.exports = {
  output: {
    uniqueName: "mfShell",
    publicPath: "http://localhost:4200/"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },

        // For remotes (please adjust)
        // name: "mfShell",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './SharedStateModule': './src/app/shared-state/shared-state.module.ts',
        // },        
        
        // For hosts (please adjust)
        remotes: {
            "mfShop": "http://localhost:4021/remoteEntry.js",
            "mfAuthe": "http://localhost:4025/remoteEntry.js",

        },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@ngxs/store":{ singleton: true, strictVersion: true, requiredVersion: 'auto' },
          

          ...sharedMappings.getDescriptors()
        })
        
    }),
    sharedMappings.getPlugin()
  ],
};
