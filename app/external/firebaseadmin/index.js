const firebaseAdmin = require('firebase-admin');

const CREDENTIAL = require('../../../credentials/firebase.json');

firebaseAdmin.initializeApp({
  databaseURL: 'https://dev-gii.firebaseio.com',
  credential: firebaseAdmin.credential.cert(CREDENTIAL),
});

module.exports = firebaseAdmin;
