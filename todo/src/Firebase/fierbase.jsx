
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyASrCn7WXyT4ceUSl9hhkoH38Z6eMAqnL0",
  authDomain: "todo-signup.firebaseapp.com",
  projectId: "todo-signup",
  storageBucket: "todo-signup.appspot.com",
  messagingSenderId: "334020709432",
  appId: "1:334020709432:web:e5532daeaff01eed3faacd",
  measurementId: "G-WWC0PTGHLG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
const analytics = getAnalytics(app);