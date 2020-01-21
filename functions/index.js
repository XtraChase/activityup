const functions = require("firebase-functions");
const gcs = require("@google-cloud/storage");

exports.uploadFile = functions.https.onRequest((req, res) => {
  var form = new formidable.IncomingForm();
  return new Promise((resolve, reject) => {
    form.parse(req, function(err, fields, files) {
      var file = files.fileToUpload;
      if (!file) {
        reject("no file to upload, please choose a file.");
        return;
      }
      console.info("about to upload file as a json: " + file.type);
      var filePath = file.path;
      console.log("File path: " + filePath);

      var bucket = gcs.bucket("bucket-name");
      return bucket
        .upload(filePath, {
          destination: file.name
        })
        .then(() => {
          resolve(); // Whole thing completed successfully.
        })
        .catch(err => {
          reject("Failed to upload: " + JSON.stringify(err));
        });
    });
  })
    .then(() => {
      res.status(200).send("Yay!");
      return null;
    })
    .catch(err => {
      console.error("Error while parsing form: " + err);
      res.status(500).send("Error while parsing form: " + err);
    });
});
