export function searchByQuery(arr, query) {
    return arr.filter(item => item.title.toUpperCase().includes(query.toUpperCase()))
}