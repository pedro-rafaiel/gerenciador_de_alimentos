const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const connect = () => {
    mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.fvf5yll.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const connection = mongoose.connection;

    connection.on("error", (error) => {
        console.error("Erro ao conectar com o MongoDB:", error);
    });

    connection.once("open", () => {
        console.log("Conectado ao MongoDB com sucesso!");
    });

    return connection;
}

module.exports = connect();
