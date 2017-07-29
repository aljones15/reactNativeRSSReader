const path = require('path');

/**
* just a global path finder to cut down on complex paths
* root filters out undefined paths and then reduces to a final absolute path
*/

global.paths = {
  root: (...dests) => 
    dests.filter((i) => i).reduce((acc, cur) => path.resolve(acc, cur), __dirname),
  assets: (parent, child) => paths.root('assets', parent, child),
  containers: (destination) => paths.assets('Containers', destination),
  services: (dest) => paths.assets('Services', dest),
  styles: (dest) => paths.assets('Styles', dest),
  types: (dest) => paths.assets('Types', dest),
  components: (dest) => paths.assets('components', dest)
}

module.exports = paths;
