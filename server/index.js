const app = require("./app");
const PORT = require("./config/config").app.port;
const chalk = require("chalk");
const connectDB = require("./config/db");

app.listen(PORT, async () => {
  console.log(
    chalk.black.bgBlueBright(`server is running at http://localhost:${PORT}`)
  );
  await connectDB();
});
