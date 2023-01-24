const Book = require("../models/Book.model");
const Client = require("../models/Client.model");

module.exports.bookController = {
  addBook: async (req, res) => {
    try {
      const data = await Book.create({
        name: req.body.name,
        author: req.body.author,
        genre: req.body.genre,
      });
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  getBook: async (req, res) => {
    try {
      const data = await Book.find().populate("genre rent");
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  getBookId: async (req, res) => {
    try {
      const data = await Book.findById(req.params.id).populate(
        "genre rent books"
      );
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  getBookGenreId: async (req, res) => {
    try {
      const data = await Book.find({ genre: req.params.id });
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  updateBook: async (req, res) => {
    try {
      const data = await Book.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        author: req.body.author,
        genre: req.body.genre,
      });
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  deleteBook: async (req, res) => {
    try {
      await Book.findByIdAndDelete(req.params.id);
      res.json("книга удалена");
    } catch (error) {
      res.json(error);
    }
  },
  rentBook: async (req, res) => {
    try {
      const client = await Client.findById(req.params.clientid);
      const book = await Book.findById(req.params.bookid);

      if (book.rent !== null) {
        return res.json("Книга уже арендована");
      }

      if (client.books.length >= 3) {
        return res.json("Вы не можете арендовать больше 3-х книг");
      }
      if (client.isBlocked === true) {
        return res.json("Вы заблокированы");
      }

      await client.updateOne({ $push: { books: req.params.bookid } });
      await book.updateOne({ rent: req.params.clientid });

      res.json("Арендовано");
    } catch (error) {
      res.json(error);
    }
  },
  returnBook: async (req, res) => {
    try {
      const client = await Client.findById(req.params.clientid);
      const book = await Book.findById(req.params.bookid);

      const hasBook = client.books.find(
        (item) => item.toString() === req.params.bookid
      );

      if (!hasBook) {
        return res.json("Вы не арендавали эту книгу");
      }
      await client.updateOne({ $pull: { books: req.params.bookid } });
      await book.updateOne({ rent: req.params.null });
      res.json("Книга возвращена");
    } catch (error) {
      res.json(error);
    }
  },
  blokClient: async (req, res) => {
    try {
      await Client.findByIdAndUpdate(req.params.clientid, {
        isBlocked: true,
        books: [],
      });
      const books = await Book.updateMany(
        { rent: req.params.clientid },
        { rent: null }
      );
      console.log(req.params.clientid);
      console.log(books)

      res.json("Клиент заюлокирован");
    } catch (error) {
      res.json(error.message);
    }
  },
  unlockClient: async (req, res) => {
    try {
      await Client.findByIdAndUpdate(req.params.clientid, {
        isBlocked: false,
      });
      res.json("Клиент разблокирован");
    } catch (error) {
      res.json(error);
    }
  },
};
