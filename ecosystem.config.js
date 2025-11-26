const path = require('path');

module.exports = {
  apps: [
    {
      name: 'Suporte-Eficiente Backend',
      script: 'npm',
      args: 'start',
      cwd: path.resolve(__dirname, 'backend'),
      env: {}
    },
    {
      name: 'Suporte-Eficiente Frontend',
      script: 'server.js',
      cwd: path.resolve(__dirname, 'frontend'),
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      env: {}
    }
  ]
};
