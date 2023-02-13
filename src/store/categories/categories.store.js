export const categoriesStore = {
    state: {
        categories: []
    },
    getters: {
        categories: s => s.categories
    },
    mutations: {
        setCategories(state, categories) {
            state.categories = categories
        }
    },
    actions: {
        async fetchCategories({commit}) {
            try {
                const res = await fetch('https://fakestoreapi.com/products/categories')
                const json = await res.json()
                commit("setCategories", json)
            } catch (e) {
                throw e
            }
        }
    }
}