export async function getAllCategories() {
  try {
    const res = await fetch('https://fakestoreapi.com/products/categories')
    const json = await res.json()
    return await json
  } catch (err) {
    console.log(err.message);
  }
}