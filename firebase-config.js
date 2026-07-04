// ==========================================================
// CONFIGURATION FIREBASE — À REMPLIR UNE SEULE FOIS
// ==========================================================
// 1. Va sur https://console.firebase.google.com
// 2. Crée un projet (gratuit) -> ex: "soniashop"
// 3. Dans le projet : Compilation > Firestore Database > Créer une base
//    (mode "production", région "eur3" ou la plus proche)
// 4. Dans Paramètres du projet (roue crantée) > Général > tout en bas
//    "Vos applications" > icône </> (Web) > donne un nom > Enregistrer
// 5. Copie l'objet "firebaseConfig" que Firebase t'affiche et colle-le
//    ci-dessous, à la place de l'exemple.
// 6. Dans Firestore > Règles, colle les règles fournies dans
//    regles-firestore.txt puis clique "Publier"
// ==========================================================

const firebaseConfig = {
  apiKey: "AIzaSyCNk9_5LjghpzsusFWYI5-MjmhKA5rXbLo",
  authDomain: "site-cf606.firebaseapp.com",
  projectId: "site-cf606",
  storageBucket: "site-cf606.firebasestorage.app",
  messagingSenderId: "1065838590817",
  appId: "1:1065838590817:web:2baf8354c8892aa2dbe320"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Mot de passe de la page admin (à changer !)
const ADMIN_PASSWORD = "sonia2026";

// Numéro WhatsApp de la boutique
const WA_NUMBER = "2290155406411";

// Durée max d'une réservation (en jours)
const RESERVATION_DAYS = 7;
