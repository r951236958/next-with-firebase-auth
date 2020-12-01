import firebaseClient from "firebase/app";
import "firebase/auth";
/*

Copy/paste your *client-side* Firebase credentials below.

To get these, go to the Firebase Console > open your project > Gear Icon >
Project Settings > General > Your apps. If you haven't created a web app
already, click the "</>" icon, name your app, and copy/paste the snippet.
Otherwise, go to Firebase SDK Snippet > click the "Config" radio button >
copy/paste.

*/
var CLIENT_CONFIG = {
    apiKey: "AIzaSyCLK3-n99CF3jw9bFRRIMx2ThZoUDsbNwY",
    authDomain: "nextjs-a9422.firebaseapp.com",
    databaseURL: "https://nextjs-a9422.firebaseio.com",
    projectId: "nextjs-a9422",
    storageBucket: "nextjs-a9422.appspot.com",
    messagingSenderId: "602319721741",
    appId: "1:602319721741:web:bb8363d0f073d3b9f98c44",
};
if (typeof window !== "undefined" && !firebaseClient.apps.length) {
    firebaseClient.initializeApp(CLIENT_CONFIG);
    firebaseClient
        .auth()
        .setPersistence(firebaseClient.auth.Auth.Persistence.SESSION);
    window.firebase = firebaseClient;
}
export { firebaseClient };
