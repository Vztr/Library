const BASE_URL = "http://localhost:4000";
//PICTURES
const BOOKS = `${BASE_URL}/book`;

const getBooks = async () => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  const token = localStorage.getItem("token");
  const tokenParsed = token.replaceAll('"', "");
  //console.log(tokenParsed)
  //console.log('Bearer'+ ' ' + tokenParsed)

  headers.Authorization = `Bearer ${tokenParsed}`;

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