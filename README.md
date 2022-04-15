# Back-end - NodeJs App

This part of the project was developed as part of a programming challenge with NodeJs, Express, MongoDB and other dependencies listed in the file `package.json`

## Deployment

This project was deployed by using `Heroku`.

The following link will redirect to the page: https://hidden-river-08736.herokuapp.com

## Available Scripts

In the project directory, you can run

## `npm start`

This command will run the app in the development mode.
Open [http://localhost:3001](http://localhost:3001) to view it in your browser to see the homepage, there we have the Queue Management system.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Outputs

For getting the required outputs, there are two sections:

1. `Get all posts`: By clicking this button the site will redirect to a new tab with all JSON files listed in the data base.
2. `Get posts by status`: By selecting the status( `pending` or `processed` ) with the selector bar, and then by clicking on the corresponding button, the site will redirect to a new tab with all JSON files listed in the data base accordingly to the status previously selected.

## Inputs

As inputs we have 2 fields, `Job` and `Data` (it was assumed that it can only be an `array of numbers`). Then by clicking on the `Post Job` button the resulting values will be displayed in the right box called `Job queue - Last posts`.

Simultaneously a JSON object with all the required statements is stored in the data base:

```json
{
  "_id": { "$oid": "625867eb135b1ebb964316af" },
  "name": "This is my 1st job",
  "status": "pending",
  "data": ["[1,2,4,5,6]"],
  "result": "null",
  "__v": { "$numberInt": "0" }
}
```

While the final JSON object displayed in console has the following format:

```json
{
  "id": "625867eb135b1ebb964316af",
  "name": "This is my 1st job",
  "status": "pending",
  "data": ["[1,2,4,5,6]"],
  "result": "null"
}
```

## Inputs - Assumptions

It was assumed that the only fields availables for entering data will be two: `Job` and `Data`, the other fields are automatically completed, `"status": "pending"` and `"result": "null"` by default.
