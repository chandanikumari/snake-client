
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (handleUserInput) => {
    if (handleUserInput === "\u0003") {
      console.log("ctrl+c");
      process.exit();
    }
  });
  return stdin;
};

module.exports = setupInput;