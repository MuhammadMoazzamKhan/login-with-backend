const logregBox = document.querySelector(".logreg-box");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const lockshowLog = document.getElementById("lockshow");
const lockshowSign = document.getElementById("lockshow1");


registerLink.addEventListener("click", () => {
    logregBox.classList.add("active");
})
loginLink.addEventListener("click", () => {
    logregBox.classList.remove("active");
})

lockshowLog .style.cursor = "pointer"

lockshowLog .addEventListener('click',()=>{
    if(passwordLog.type == "password"){
        passwordLog.type = "text";
    }else{
        passwordLog.type = "password";
    }
    
})

lockshowSign .style.cursor = "pointer"

lockshowSign .addEventListener('click',()=>{
    if(passwordSign.type == "password"){
        passwordSign.type = "text";
    }else{
        passwordSign.type = "password";
    }
    
})


import {app,auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification ,signOut} from "./firsebase.js"






const emailSign = document.getElementById("emailSign");
const passwordSign = document.getElementById("passwordSign");
const nameSign = document.getElementById("nameSign");
const btnSign = document.getElementById("btnSign");

const name = document.getElementById("name");

const emailLog = document.getElementById("emailLog");
const passwordLog = document.getElementById("passwordLog");
const btnLog = document.getElementById("btnLog");

export let namevalue = nameSign.value;


btnSign.addEventListener("click", async () => {
  let email = emailSign.value;
  let name = nameSign.value;
  localStorage.setItem("name",name)
  let password = passwordSign.value;
  if (name != "") {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem('user', user.uid);
        if (localStorage.getItem('user')) {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              // Email verification sent!
              // ...
              Swal.fire({
                title: 'Verify Your email'
              })
            });
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorMessage)
        if (errorMessage == "Firebase: Error (auth/email-already-in-use).") {
          Swal.fire({
            icon: 'Error',
            title: 'This email is already used.',
            text: 'Go to verify your account.',
          })
        } else {
          Swal.fire({
            icon: 'Error',
            title: 'Password weak',
            text: 'Password should be at least 6 characters',
          })
        }
      });
  }
  await logregBox.classList.remove("active");
  emailSign.value = ""
  passwordSign.value = ""
})



btnLog.addEventListener("click", () => {
  let email = emailLog.value;
  let password = passwordLog.value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
      if (localStorage.getItem('user') && user.emailVerified) {
        window.location = "./home.html"
        }else{
          Swal.fire({
            icon: 'Error',
            title: 'Verify your email'
          })
      }

    })
    .catch((error) => {
      const errorMessage = error.message;

      console.log(errorMessage)
      if (errorMessage == "Firebase: Error (auth/invalid-email).") {
        Swal.fire({
          icon: 'Error',
          title: 'User not found',
          text: 'Firstly Go to sign Up'
        })
      } else {
        Swal.fire({
          icon: 'Error',
          title: 'The password is not Corrent',
          text: 'Enter the correct password'
        })
      }
    });
})

// signOut(auth).then(() => {
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });

