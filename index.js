import {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
    sendPasswordResetEmail,
    updatePassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    database,
    set,
    ref,
    setDoc,
    doc,
    db,
    serverTimestamp,
    updateDoc,
    onSnapshot,
    query,
    getDocs,
    collection,
  } from "./firebase.config.js";
  
  ////////////////// SignUp
  
  const signUp = async (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let contact = document.getElementById("contact").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("pswd").value;
  
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
  
      await setDoc(doc(db, "users", user.uid), {
        name,
        age,
        contact,
        email,
        isActive: true,
        timestamp: serverTimestamp(),
        role: "user",
      });
  
  
  
      if (!user.emailVerified) {
        await sendEmailVerification(auth.currentUser);
        signOut(auth);
        alert("Please verify your email")
        window.location.replace("/html/login.html");
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  document.getElementById("signup-form")?.addEventListener("submit", signUp);

  