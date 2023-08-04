// Stores the active TCP connection object.
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", function(key) {
    handleUserInput(key);
  });
  return stdin;
};

const handleUserInput = function(key) {
  let movement;
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "w") {
    movement = "Move: up";
  }
  if (key === "a") {
    movement = "Move: left";
  }
  if (key === "s") {
    movement = "Move: down";
  }
  if (key === "d") {
    movement = "Move: right";
  }
  if (key === "z" || key === "q" || key === "x") {
    movement = "Say: Good Job";
  }
  connection.write(movement);

};

module.exports = setupInput;