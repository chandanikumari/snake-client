const net = require("net");
//const port = 50541;


// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',// IP address here,
    port: '50541', // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
  // code that does something when the connection is first established
    // sets up an event handler
    console.log(`you ded cuz you idled`);
  });
  return conn;
};

console.log("Connecting ...");
connect();