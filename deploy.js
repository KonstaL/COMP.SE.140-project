const AWS = require('aws-sdk');
const fs = require('fs'); // Needed for example below
const path = require("path");

const spacesEndpoint = new AWS.Endpoint('fra1.digitaloceanspaces.com');
const s3 = new AWS.S3({
    endpoint: spacesEndpoint,
    accessKeyId: process.env.SPACES_KEY,
    secretAccessKey: process.env.SPACES_SECRET
});

const params = {
    Bucket: "compo.se.200", // I typoed the course code..
};

async function deleteEveryThing() {
    const data = await s3.listObjects(params).promise();
    const deletionPromises = data['Contents'].map(obj => s3.deleteObject({...params, key: obj.key}));
  
    return Promise.all(deletionPromises);
}


const uploadDir = function(s3Path, bucketName) {
    function walkSync(currentDirPath, callback) {
        fs.readdirSync(currentDirPath).forEach(function (name) {
            var filePath = path.join(currentDirPath, name);
            var stat = fs.statSync(filePath);
            if (stat.isFile()) {
                callback(filePath, stat);
            } else if (stat.isDirectory()) {
                walkSync(filePath, callback);
            }
        });
    }

    walkSync(s3Path, function(filePath, stat) {
        let bucketPath = filePath.substring(s3Path.length+1);
        let params = {Bucket: bucketName, Key: bucketPath, Body: fs.readFileSync(filePath), ACL: 'public-read' };
        s3.putObject(params, function(err, data) {
            if (err) {
                console.log(err)
            } else {
                console.log('Successfully uploaded '+ bucketPath +' to ' + bucketName);
            }
        });
    });
};







async function init() {
    await deleteEveryThing();
    uploadDir("./coverage", params.Bucket);
}

init();