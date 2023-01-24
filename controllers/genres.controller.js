const Genre = require("../models/Genre.model");

module.exports.genreController = {
  addGenre: async (req, res) => {
    try {
      const data = await Genre.create({
        name: req.body.name,
      });
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  getGenre: async (req, res) => {
    try {
      const data = await Genre.find();
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  updateGenre: async (req, res) => {
    try {
      const data = await Genre.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
      }, {new: true});
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  deleteGenre: async (req, res) => {
    try {
      await Genre.findByIdAndDelete(req.params.id);
      res.json("жанр удален");
    } catch (error) {
      res.json(error);
    }
  },
};
