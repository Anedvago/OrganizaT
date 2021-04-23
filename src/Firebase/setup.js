import firebase from 'firebase';
import * as firebaseui from 'firebaseui';

//////////////////////////////////////////////////////////////////////////
const config = {
    apiKey: "AIzaSyAsq3jX9n73Hoeg0nRGfQDXFEXl7aM7E6k",
    authDomain: "organizate-3f2bb.firebaseapp.com",
    projectId: "organizate-3f2bb",
    storageBucket: "organizate-3f2bb.appspot.com",
    messagingSenderId: "274934781083",
    appId: "1:274934781083:web:d7777095001cd1cd8fe23e"
};

firebase.initializeApp(config);

/////////////////////////////////////////////////////////////7777
//Firebase con el servicio de correo electronico
var uiConfig = {
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    signInSuccessUrl: '/',
};

export const auth = firebase.auth();//autenticacion
export const db = firebase.firestore();//base de datos
export const autorization = firebase.auth;

//lo pide el firebase
db.settings({
    timestampsInSnapshots: true,
});

//el modulo de firebase ui aqui se invoca
export const startUi = (elementId) => {
    const ui = new firebaseui.auth.AuthUI(auth);//se inicializa
    ui.start(elementId, uiConfig);//se inicia la ui element id es el id de un modulo
}