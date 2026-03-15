const { Worker } = require('node:worker_threads');

const worker = new Worker("./20_worker2.js");

worker.postMessage("send u");

worker.on('message', (msg) => {
  console.log("from another thread", msg);
});