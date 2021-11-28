const BASE_URL = "http://localhost:4000";
//PICTURES
const BOOKS = `${BASE_URL}/book`;

const token = localStorage.getItem("token");
/* const tokenParsed = token.replaceAll('"', ""); */

const getBooks = async () => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Authorization": `Bearer ${token}`
  };

  const books = await fetch(BOOKS, {
    method: "GET",
    credentials: "include",
    headers: headers,
  });
  const resBooks = await books.json();
  console.log(resBooks);
  return resBooks;
};

export default getBooks;