const db = require('../util/connect_db.js');

module.exports = class Notes {
  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM 00062688_ania.notepad');
  }

  static post(title, description) {
    return db.execute('INSERT INTO notepad (title, description) VALUES (?, ?)', [title, description]);
  }

  static update(id, title, description) {
    return db.execute('UPDATE notepad SET title = ?, description =? WHERE id = ?', [title, description, id]);
  }

  static delete(id) {
    return db.execute('DELETE FROM notepad WHERE id = ?', [id]);
  }
};