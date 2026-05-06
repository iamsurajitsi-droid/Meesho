function fetchCata() {
  return fetch(`https://dummyjson.com/products/categories`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}
export default fetchCata;
