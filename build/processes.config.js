module.exports = {
  apps: [
    {
      name: "api",
      script: "/app/index.js",
      watch: process.env.NODE_ENV === 'development',
      ignore_watch: ["node_modules"],
      autorestart: true,
      env: {
        "NODE_ENV": "development",
      },
      env_production: {
        "NODE_ENV": "production"
      }
    }
  ]
};