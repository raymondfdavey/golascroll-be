const app = require("./app");

const { PORT = 9500 } = process.env;

app.listen(PORT, () => console.log(`Hi RAY! Listening on ${PORT}...`));
