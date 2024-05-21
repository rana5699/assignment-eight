const getReadBooksIdFromLs = () => {
  const readBooksString = localStorage.getItem("readBooks");
  return readBooksString ? JSON.parse(readBooksString) : [];
};

const savedReadBooks = (readBooks) => {
  const readBooksStringify = JSON.stringify(readBooks);
  localStorage.setItem("readBooks", readBooksStringify);
};

const addReadBooks = (addReadBookId) => {
  const books = getReadBooksIdFromLs();
  books.push(addReadBookId);
  savedReadBooks(books);
};

// wishlist
const getWishlistBooksIdFromLs = () => {
  const wishlistBooksString = localStorage.getItem("wishlistBooks");
  return wishlistBooksString ? JSON.parse(wishlistBooksString) : [];
};

const savedwishlistBooks = (wishlistBooks) => {
  const wishlistBooksStringify = JSON.stringify(wishlistBooks);
  localStorage.setItem("wishlistBooks", wishlistBooksStringify);
};

const addwishlistBooks = (addwishlistBookId) => {
  const books = getWishlistBooksIdFromLs();
  books.push(addwishlistBookId);
  savedwishlistBooks(books);
};

// wishlist

export {
  addReadBooks,
  getReadBooksIdFromLs,
  addwishlistBooks,
  getWishlistBooksIdFromLs,
};
