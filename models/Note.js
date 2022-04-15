const { Schema, model } = require("mongoose");

const noteSchema = new Schema({
  name: String,
  status: String,
  data: Array,
  result: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

noteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Note = model("Note", noteSchema);

module.exports = Note;
