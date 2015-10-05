System.config({
  defaultJSExtensions: true,
  transpiler: "typescript",
  paths: {
    "github:*": "jspm_packages/github/*",
    "app": "app",
    "npm:*": "jspm_packages/npm/*"
  },

  packages: {
    "app": {
      "main": "app",
      "defaultExtension": "ts"
    }
  },

  map: {
    "angular": "github:angular/bower-angular@1.4.7",
    "core-js": "npm:core-js@0.9.18",
    "typescript": "npm:typescript@1.6.2",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    }
  }
});
