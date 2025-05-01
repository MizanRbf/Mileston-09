import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../../Firebase/Firebase';
import { GithubAuthProvider } from "firebase/auth";

const Login = () => {
 const [user,setUser] = useState(null);
 const provider = new GoogleAuthProvider();
 const gitHubProvider = new GithubAuthProvider();
 const handleGoogleSignIN = () => {
  signInWithPopup(auth,provider).then((result )=>
    setUser(result.user))
    .catch((error) => 
      console.log(error));
  }

 const handleGitHubSignIN = () => {
  signInWithPopup(auth,gitHubProvider).then((result )=>
    setUser(result.user))
    .catch((error) => 
      console.log(error));
  }

  const handleSignOut = () => {
    signOut(auth).then(()=>{setUser(null)})
    .catch((error)=>{console.log(error)});
  }
  return (
    <div>
      <h3>Please Login</h3>
      {
        user? <button onClick={handleSignOut}>Sign Out</button>:
        <div>
          <button onClick={handleGoogleSignIN}>Sign In with google</button>
          <button onClick={handleGitHubSignIN}>Sign In with gitHub</button>
        </div>
      }
      {
        user && <div>
          <h2>{user.displayName}</h2>
        </div>
      }

    </div>
  );
};

export default Login;