export function changeObj (arr, prodID, count, totalProductPrice) {
  const newArr = arr.map(obj => {
    if (obj.id === prodID) {
      obj.count = count
      obj.totalProductPrice = totalProductPrice
    }
    return obj
  })
  return newArr
}