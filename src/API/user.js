import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged  } from '@firebase/auth';

const auth = getAuth()

export async function createUser(email, password, username) {
  await createUserWithEmailAndPassword(auth, email, password, username)
  .then((userCredential) => {
    const user = auth.currentUser;
    user.displayName = username
    if (user !== null) {
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;
      const uid = user.uid;
      console.log(displayName, email);
    }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return errorMessage
  });
}