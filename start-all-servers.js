#!/usr/bin/env node

const concurrently = require("concurrently");

concurrently([
  { command: "cd mobile-proxy && node main.js", name: "mobile-proxy" },
  { command: "cd product-app && node main.js", name: "product-app" },
  { command: "cd user-app && node main.js", name: "user-app" },
]);
