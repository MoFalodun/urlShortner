const validUrl = require("valid-url");
const { v4: uuid } = require("uuid");
const express = require("express");

const app = express();

app.use(express.json());

const generateUUID = () => uuid().split("-")[0];

const urlArray = [];

const checkIfUrlIsValid = (req, res, next) => {
  const { url } = req.body;
  if (validUrl.isUri(url)) {
    next();
  } else {
    res.send(400);
  }
};

const generateUniqueId = () => {
  const generatedId = generateUUID();
  if (urlArray.find((el) => el.id === generatedId)) {
    checkIfIdIsUnique();
  } else {
    return generatedId;
  }
};

// controllers

const shortenUrl = (req, res) => {
  try {
    const id = generateUniqueId();
    const shortUrl = `http://localhost:3000/${id}`;
    urlArray.push({
      id,
      shortUrl,
      receivedUrl: req.body.url,
    });
    res.status(200).json({
      shortUrl,
    });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const findURL = (req, res) => {
  const { urLId } = req.params;
  const returnedUrlObject = urlArray.find((el) => el.id === urLId);
  return returnedUrlObject
    ? res.redirect(returnedUrlObject.receivedUrl)
    : res.status(404);
};

app.post("/shorten", checkIfUrlIsValid, shortenUrl);
app.get("/:urLId", findURL);

app.listen(3000, () => console.log(`Listening on port ${3000}`));
