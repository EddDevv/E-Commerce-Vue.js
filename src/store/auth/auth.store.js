import { createNotification } from "@/helpers/createNotification.js"
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { getDatabase, ref, set } from "firebase/database"
import { setLocalStorage } from "../../helpers/localStorage"

export const authStore = {
    state: {
        isAuth: false
    },
    getters: {
        isAuth: s => s.isAuth
    },
    mutations: {
        setIsAuth(state, isAuth) {
            state.isAuth = isAuth
        },
    },
    actions: {
        async login({ dispatch, commit }, { email, password }) {
            try {
                await signInWithEmailAndPassword(getAuth(), email, password)
                await commit("setIsAuth", true)
                setLocalStorage("isAuth", true)
            } catch (err) {
                commit("setError", err)
                throw err
            }
        },
        async logout({ commit }) {
            await signOut(getAuth())
            await commit("clearInfo")
            commit("setIsAuth", false)
            setLocalStorage("isAuth", false)
            localStorage.removeItem("isAuth")
        },
        async register({ dispatch, commit }, { email, password, username }) {
            try {
                await createUserWithEmailAndPassword(getAuth(), email, password)
                const userId = await dispatch("getUid")
                const db = getDatabase()
                await set(ref(db, "users/" + userId + "/info"), {
                    username: username, email: email,
                })
                commit("setIsAuth", true)
                setLocalStorage("isAuth", true)
                dispatch("addNotification", createNotification(`Welcome ${username}`))

            } catch (err) {
                commit("setError", err)
                throw err
            }
        },
        getUid() {
            const user = getAuth().currentUser
            return user ? user.uid : null
        },
    }
}