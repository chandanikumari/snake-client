const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',// IP address here,
    port: '50541', // PORT number here,
  });
  conn.on("connect", () => {
    // code that does something when the connection is first established
    // sets up an event handler
    console.log(`Successfully connected to game server`);
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
  // code that does something when the connection is first established
    // sets up an event handler
    console.log(`you ded cuz you idled`);
  });
  conn.on("connect", () => {
    conn.write("Name: SRI");
  });
  return conn;
};

module.exports = connect;