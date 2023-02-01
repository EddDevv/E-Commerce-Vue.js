export async function getAllProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products')
    const json = await res.json()
    return await json
  } catch (err) {
    console.log(err);
  }
}