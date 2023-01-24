const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 4700;

app.use(express.json());
app.use(require('./routers/books.route'))
app.use(require('./routers/genres.route'))
app.use(require('./routers/revievs.route'))
app.use(require('./routers/clients.route'))

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Kolizey08:Maga@cluster0.nmzoj5b.mongodb.net/Online-Books"
    );
    app.listen(port, () => console.log("Соединение со сервером установлено"));
  } catch (error) {
    console.log("не удалось подключится");
  }
};
start();
