console.log('this is the script file')

if(navigator.geolocation) {
    console.log("Location is available")
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords);
      });
  } else {
    console.log("Location not available")
  }


// const AWS = require("aws-sdk");
// const credentials = new AWS.CognitoIdentityCredentials({
//  IdentityPoolId: "us-east-2:d9bd6c65-e4f6-4a35-b007-d1e5592c6ec5" // e.g., us-east-1:d40a3a95-a6b5-4816-a15ca15ac4f0930d
// });
// const client = new AWS.Location({
//  credentials,
//  region: AWS.config.region || "<region>"
// });
// console.log(await client.getMapStyleDescriptor("ExampleMap").promise());