module.exports = {
  apps: [{
    name: 'nodejs-api',
    script: 'app/server.js',
    instances: 'max',
    exec_mode: 'cluster',
  }],
};

