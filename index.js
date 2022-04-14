const express = require("express");
const cors = require("cors");

const app = express();
const logger = require("./loggerMiddleware");

app.use(cors());
app.use(express.json());

app.use(logger);

let notes = [
  {
    name: "My job 1",
    id: 1,
    status: "pending",
    data: [1, 2, 3],
    result: "something",
    content: "holis",
    important: true,
  },
  {
    name: "My job 2",
    id: 2,
    status: "processed",
    data: [4, 5, 6],
    result: "something",
    content: "hello",
    important: true,
  },
  {
    name: "My job 3",
    id: 3,
    status: "processed",
    data: [7, 8, 9],
    result: "something else",
    content: "ciao",
    important: false,
  },
];

//GET
app.get("/", (request, response) => {
  response.send("<h1>Hola mundo</h1>");
});

// app.get("/api/notes", (request, response) => {
//   response.json(notes);
// });

app.get("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  const note = notes.find((note) => note.id === id);

  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
});

app.get("/api/notes/", (request, response) => {
  const status = request.query.status;
  let newNotes = notes;

  if (Object.keys(request.query).length > 0) {
    newNotes = notes.filter((note) => note.status === status);
  }

  if (newNotes) {
    response.json(newNotes);
  } else {
    response.status(404).end();
  }
});

//DELETE
app.delete("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  notes = notes.filter((note) => note.id !== id);
  response.status(204).end();
});

//POST
app.post("/api/notes", (request, response) => {
  const note = request.body;

  if (!note || !note.content) {
    return response.status(400).json({
      error: "note.content is missing",
    });
  }

  const ids = notes.map((note) => note.id);
  const maxId = Math.max(...ids);

  const newNote = {
    id: maxId + 1,
    content: note.content,
    important: typeof note.important !== "undefined" ? note.important : false,
  };

  notes = [...notes, newNote];

  response.status(201).json(newNote);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
