const users_url = 'https://rocky-escarpment-34849.herokuapp.com/users';
const products_url = 'https://rocky-escarpment-34849.herokuapp.com/products';

export {getUsers, getProducts};

function getUsers() {
  console.log("hello");
  const url = `${users_url}`;
  return axios.get(url).then(response => response.data);
}

function getProducts() {
  const url = `${products_url}`;
  return axios.get(url).then(response => response.data);
}
