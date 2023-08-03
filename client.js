const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT, // PORT number here,
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
  
  setTimeout(() => {
    // print the char here
    conn.on("data", () => {
      conn.write("Move: up");
    });
  }, 50);

  
  

  return conn;
};

module.exports = connect;