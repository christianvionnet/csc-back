require("dotenv").config();
require("./mongo");

const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("./loggerMiddleware");
const Note = require("./models/Note");

app.use(cors());
app.use(express.json());
app.use(logger);

let notes = [];

//GET
app.get("/", (request, response) => {
  response.send("<h1>Hola mundo</h1>");
});

app.get("/api/notes/:id", async (request, response) => {
  const { id } = request.params;

  try {
    const note = await Note.findById(id);
    if (note) {
      response.json(note);
    } else {
      response.status(404).end();
    }
  } catch (error) {
    console.log(error);
  }
});

//GET STATUS
app.get("/api/notes/", async (request, response) => {
  const { status } = request.query;

  console.log(request.query);

  try {
    if (Object.keys(request.query).length === 0) {
      const allNotes = await Note.find({});
      response.json(allNotes);
      return;
    }
    const notes = await Note.find({ status });
    if (notes) {
      response.json(notes);
    } else {
      response.status(404).end();
    }
  } catch (error) {
    console.log(error);
  }
});

//DELETE
app.delete("/api/notes/:id", async (request, response) => {
  const { id } = request.params;

  try {
    const notes = await Note.findByIdAndRemove(id);
    response.status(204).end();
  } catch (error) {
    console.log(error);
    response.status(400).end();
  }
});

//POST
app.post("/api/notes", async (request, response) => {
  const note = request.body;

  if (!note.name) {
    return response.status(400).json({
      error: "Required fields are missing",
    });
  }

  try {
    const newNote = new Note({
      name: note.name,
      status: note.status,
      data: note.data,
      result: note.result,
    });

    const savedNote = await newNote.save();
    response.json(savedNote);
  } catch (error) {
    console.log(error);
  }
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
