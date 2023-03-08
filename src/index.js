const app = require("./app");
require("./db/mongoose");
const PORT = 3000;

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
