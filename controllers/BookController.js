var mongojs = require('mongojs');

var db = mongojs('biblioteca', ['books', 'movies']);

module.exports = {
  create: function(req, res, next) {
    db.books.insert(req.body, function(err, result) {
      if (err) return next(err);
      res.status(200).json(result);
    });
  },

  index: function(req, res, next) {
    db.books.find(req.query, function(err, result) {
      if (err) return next(err);
      res.status(200).json(result);
    });
  },

  show: function(req, res, next) {
    db.books.findOne({
      _id: mongojs.ObjectId(req.params.id)
    }, function(err, result) {
      if (err) return next(err);
      res.status(200).json(result);
    });
  },

  update: function(req, res, next) {
    db.books.update({
      _id: mongojs.ObjectId(req.params.id)
    }, req.body, function(err, result) {
      if (err) return next(err);
      res.status(200).json(result);
    });
  },

  destroy: function(req, res, next) {
    db.books.remove({
      _id: mongojs.ObjectId(req.params.id)
    }, function(err, result) {
      if (err) return next(err);
      res.status(200).json(result);
    });
  }
};
