const express = require('express');
const app = express();
const path = require('node:path');

const LOCAL_SERVER_PORT = 3000
const LOCAL_SERVER_ADDR = `http://localhost:${LOCAL_SERVER_PORT}`
const FIXTURES_PATH = path.join(__dirname, '/../fixtures')
const TRACKERS_PATH = path.join(__dirname, '/../../../priv/tracker')

exports.runLocalFileServer = function () {
  app.use(express.static(FIXTURES_PATH));
  app.use('/tracker', express.static(TRACKERS_PATH));

  app.listen(LOCAL_SERVER_PORT, function () {
    console.log(`Local server listening on ${LOCAL_SERVER_ADDR}`)
  });
}

if (require.main === module) {
  exports.runLocalFileServer()
}

exports.LOCAL_SERVER_ADDR = LOCAL_SERVER_ADDR
