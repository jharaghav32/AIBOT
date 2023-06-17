import admin from 'firebase-admin'
import {getApps} from 'firebase-admin/app'
// var serviceAccount = require('./serviceaccountkey.json')
//initialize the app and provide the service account key
const serviceAccount = JSON.parse(
    process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
)
if(!getApps().length){
    admin.initializeApp({
        credential:admin.credential.cert(serviceAccount)
    })
}
//initialize the firestore db
const adminDB = admin.firestore();
export {adminDB};