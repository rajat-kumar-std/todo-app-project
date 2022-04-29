const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    timeStamp: {
      type: String,
      default: Date.now(),
    },
  },
  {
    collection: 'todos', 
  }
);

module.exports = mongoose.model('Todo', TodoSchema);
