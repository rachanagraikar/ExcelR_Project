import { initializeApp } from 'firebase/app'
import {getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC7AhWvmzrphzqE7mMMq435lAQKQgzskTc",
    authDomain: "newfirebaseddemo.firebaseapp.com",
    projectId: "newfirebaseddemo",
    storageBucket: "newfirebaseddemo.appspot.com",
    messagingSenderId: "416339376736",
    appId: "1:416339376736:web:a72f42855ff3a830c1a105"
  };

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const googleSignIn =  ()=> {
    try{

        signInWithPopup(auth,  googleProvider);
        alert('Sign in successfull')
    }
    catch(e){
        alert('Sign in failed')
        console.log(e)
    }
}

const gitHubSignIn = ()=>{
    try{

        signInWithPopup(auth,  gitHubProvider);
        alert('Sign in successfull')
    }
    catch(e){
        alert('Sign in failed')
        console.log(e)
    }
}

export const FirebaseGoogleSignIn = () => {



  return (
    <> 
        <h2>Sign In with Google</h2>
        <button onClick={googleSignIn}>SignIn with google</button> &nbsp;
        <button onClick={gitHubSignIn}>Sign in with GitHub</button>
    </>
  )
}
