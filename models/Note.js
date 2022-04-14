const { Schema, model } = require("mongoose");

const noteSchema = new Schema({
  name: String,
  status: String,
  data: Array,
  result: String,
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

// const note = new Note({
//   name: "Hola mundo!",
//   status: "pending",
//   data: [1, 2, 3, 5],
//   result: "something",
// });

// note
//   .save()
//   .then((result) => {
//     console.log(result);
//     mongoose.connection.close();
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// {
//   name: "My job 1",
//   id: 1,
//   status: "pending",
//   data: [1, 2, 3],
//   result: "something",
//   content: "holis",
//   important: true,
// },
// {
//   name: "My job 2",
//   id: 2,
//   status: "processed",
//   data: [4, 5, 6],
//   result: "something",
//   content: "hello",
//   important: true,
// },
// {
//   name: "My job 3",
//   id: 3,
//   status: "processed",
//   data: [7, 8, 9],
//   result: "something else",
//   content: "ciao",
//   important: false,
// },
