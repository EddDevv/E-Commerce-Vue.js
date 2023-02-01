import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword  } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

export const authStore = {
  actions: {
    async login({dispatch, commit}, {email, password}) {
      try {
        await signInWithEmailAndPassword(getAuth(), email, password)
      } catch (err) {
        throw new Error (err)
      }
    },
    async logout() {
      await signOut(getAuth())
    },
    async register({dispatch}, {email, password, name}) {
      try { 
        await createUserWithEmailAndPassword(getAuth(), email, password)
        const userId = await dispatch("getUid")
        await writeUserData(userId, name, email)
      } catch(e) {
        throw e
      }
    },
    getUid() {
      const user = getAuth().currentUser()
      console.log(user ? user.uid : null);
    },
    async writeUserData(userId, name, email) {
      const db = getDatabase();
      console.log(db);
      try {
        set(ref(db, 'users/' + userId), {
          username: name,
          email: email,
        });
      } catch (e) {
        throw e
      }
    }
  }
}