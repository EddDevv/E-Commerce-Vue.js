import { getDatabase, ref, onValue} from "firebase/database";

export const infoStore = {
  state: {
    info: {}
  },
  mutations: {
    setInfo(state, info) {
      state.info = info
    },
    clearInfo(state) {
      state.info = {}
    }
  },
  actions: {
    async fetchInfo({dispatch, commit}) {
      try {
        const db = getDatabase();
        const uid = await dispatch("getUid")
        const starCountRef = ref(db, 'users/' + uid + '/info');

        onValue(starCountRef, (snapshot) => {
          const data = snapshot.val();
          commit("setIsAuth", true)
          commit("setInfo", data)
        });
      } catch(err) {
        throw err
      }
    }
  },
  getters: {
    info: s => s.info
  }
}