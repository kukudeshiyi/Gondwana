const { parentPort } = require('node:worker_threads');

console.log("execution");

parentPort.on('message', (msg) => {
  console.log("from main thread", msg);
  parentPort.postMessage("got the msg");
});