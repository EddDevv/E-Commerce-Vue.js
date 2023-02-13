import { createNotification } from "@/helpers/createNotification.js"
import { changeObj } from "../../helpers/arrayMethods"
import { setLocalStorage } from "../../helpers/localStorage"

export const cartStore = {
    state: {
        cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
        totalPrice: localStorage.getItem('totalPrice') ? parseInt(localStorage.getItem('totalPrice')) : 0,
    },
    getters: {
        cart: s => s.cart,
        totalPrice: s => s.totalPrice,
    },
    mutations: {
        setCart(state, cart) {
            return state.cart.length ? state.cart = [...state.cart, cart] : state.cart = [cart]
        },
        updateCartStorage(state, storage) {
            return state.cart = storage
        },
        setTotalPrice(state, totalPrice) {
            return state.totalPrice = totalPrice
        },
        setCounter(state, cart) {
            return state.cart = cart
        }
    },
    actions: {
        addProductToCart({ getters, dispatch, commit }, prodId) {
            const product = getters.products.find(a => a.id === prodId)
            product.count = 1
            product.totalProductPrice = product.price
            commit("setCart", product)
            dispatch("calculateTotalPrice")
            setLocalStorage('cart', JSON.stringify(getters.cart))
        },
        loadStateLocaStorage({ commit }) {
            if (window.localStorage.getItem('cart')) {
                commit("updateCartStorage", JSON.parse(window.localStorage.getItem('cart')))
            }
        },
        checkProductInCart({ dispatch, state }, id) {
            const res = state.cart.some(obj => obj.id === id)
            if (res) {
                dispatch("addNotification", createNotification("Already in cart"))
            } else {
                dispatch("addProductToCart", id)
                dispatch("addNotification", createNotification("Product added to cart"))
            }
        },
        removeFromCart({ commit, dispatch, getters }, prodId) {
            const returnUpdatedCart = getters.cart.filter(item => item.id !== prodId)
            commit("updateCartStorage", returnUpdatedCart)
            dispatch("calculateTotalPrice")
            setLocalStorage('cart', JSON.stringify(getters.cart))
        },
        calcCounterPlus({ commit, dispatch, getters }, { prodID, count, totalProductPrice }) {
            commit("setCounter", changeObj(getters.cart, prodID, count, totalProductPrice))
            dispatch("calculateTotalPrice")
            setLocalStorage('cart', JSON.stringify(getters.cart))
        },
        calcCounterMinus({ commit, dispatch, getters }, { prodID, count, totalProductPrice }) {
            commit("setCounter", changeObj(getters.cart, prodID, count, totalProductPrice))
            dispatch("calculateTotalPrice")
            setLocalStorage('cart', JSON.stringify(getters.cart))
        },
        calculateTotalPrice({ getters, commit }) {
            if (getters.cart.length === 1) {
                commit("setTotalPrice", getters.cart[0].totalProductPrice)
                setLocalStorage('totalPrice', getters.cart[0].totalProductPrice)
            } else {
                let total = null
                getters.cart.forEach(item => {
                    total += item.totalProductPrice
                })
                commit("setTotalPrice", total)
                setLocalStorage('totalPrice', +total)
            }
        }
    }
}