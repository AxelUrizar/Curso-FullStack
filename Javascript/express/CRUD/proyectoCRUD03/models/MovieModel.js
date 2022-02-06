let db = require('../db')

MovieModel = {};

MovieModel.findAll = () => db;

MovieModel.findById = (id) => db.find(movie => movie.id == id)

module.exports = MovieModel;