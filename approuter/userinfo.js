/* eslint-disable no-console */
const approuter = require("@sap/approuter");
const jwtDecode = require("jwt-decode");

let ar = approuter();

ar.beforeRequestHandler.use((req, res, next) => {

    console.log("The following request was made...");
    console.log("Method: " + req.method);
    console.log("Headers: " + req.headers);
    console.log("URL: " + req.url);

    next();
});


ar.beforeRequestHandler.use("/myext", (req, res) => {

  if (!req.user) {
    res.statusCode = 403;
    res.end("Missing JWT Token");
  }

  res.statusCode = 200;
  let decodedJWTToken = jwtDecode(req.user.token.accessToken);

  console.log(JSON.stringify({
    decodedJWTToken
  }));

  res.end(JSON.stringify({
    decodedJWTToken
  }));

});

ar.start();
