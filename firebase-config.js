// For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyBeqfZgsHC9_aOEafcMMSAQYuOfoWB-Hb0",
        authDomain: "karoot-disciplinas.firebaseapp.com",
        databaseURL: "https://karoot-disciplinas-default-rtdb.firebaseio.com",
        projectId: "karoot-disciplinas",
        storageBucket: "karoot-disciplinas.firebasestorage.app",
        messagingSenderId: "360464641158",
        appId: "1:360464641158:web:0f227e82e36dd97ffeb507",
        measurementId: "G-2V3LFXZJLK"
    };

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Exportar serviços para usar nos outros arquivos
const auth = firebase.auth();
const db = firebase.database();
const firestore = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();