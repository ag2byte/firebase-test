const auth = firebase.auth();

const signinbtn = document.getElementById("signinbtn");

const signoutbtn = document.getElementById("signoutbtn");
const singnedin = document.getElementById("signedin");
const singnedout = document.getElementById("signedout");
const userdetails = document.getElementById("userdetails");
const provider = new firebase.auth.GoogleAuthProvider();
console.log(provider);
signinbtn.onclick = () => {
  console.log("sign in");
  auth.signInWithPopup(provider);
};
signoutbtn.onclick = () => {
  console.log("signout");
  auth.signOut();
};

auth.onAuthStateChanged((user) => {
  if (user) {
    //signedin
    singnedin.hidden = false;
    singnedout.hidden = true;
    userdetails.innerText = `HELLO ${user.displayName.toUpperCase()}`;
  } else {
    singnedin.hidden = true;
    singnedout.hidden = false;
    userdetails.innerText = ``;
  }
});
