import "dotenv/config";
import app from "./src/index.js";

app.listen(3001, async () => {
	console.log("Servidor diz: chama os menó");
});