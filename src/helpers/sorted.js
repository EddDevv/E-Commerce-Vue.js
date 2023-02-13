import {store} from "@/store";
export function sortedByCategory(category) {
    const products = store.getters.products
    let arr = products.filter(a => category === "all categories" ? products : a.category === category)
    store.commit("setSortedAndSearchProducts", arr)
    return arr
}