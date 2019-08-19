const config = require('dotenv').config();
const { Client, Authenticator } = require('minecraft-launcher-core');

var usernames = process.env.USERNAMES.split(' ');
var passwords = process.env.PASSWORDS.split(' ');

startAllAccounts();

async function startAllAccounts() {
  var arrayLength = usernames.length;
  for (var i = 0; i < arrayLength; i++) {
    console.log("logging into " + usernames[i]);
    var username = usernames[i];
    var passkey = passwords[i];

    console.log(username + " " + passkey)

    let opts = {
      clientPackage: null,
      authorization: Authenticator.getAuth(username, passkey),
      root: "/Users/heathlogancampbell/Library/Application\ Support/minecraft",
      version: {
        number: "1.8.9",
        type: "release",
        custom: "1.8.9-OptiFine_HD_U_I7"
      },
      memory: {
        max: "2000",
        min: "1000"
      }
    }

    const launcher = new Client();
    launcher.launch(opts);

    launcher.on('debug', (e) => console.log(e));
    launcher.on('data', (e) => console.log(e.toString('utf-8')));
    launcher.on('error', (e) => console.log(e.toString('utf-8')));
    await sleep(1000)
  }
}

//Cheap busy wait
function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}