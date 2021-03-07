const Notes = require('../models/notes_model.js');

exports.getAllNotes = async (req, res, next) => {
  try {
    const [allNotes] = await Notes.fetchAll();
    res.status(200).json(allNotes);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.postNotes = async (req, res, next) => {
  try {
    const postResponse = await Notes.post(req.body.title, res.body.description);
    res.status(201).json(postResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
      console.log(err);
    }
    next(err);
  }
};

exports.putNotes = async (req, res, next) => {
  try {
    const putResponse = await Notes.update(req.body.id, req.body.title, req.body.description);
    res.status(200).json(putResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteNotes = async (req, res, next) => {
  try {
    const deleteResponse = await Notes.delete(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};