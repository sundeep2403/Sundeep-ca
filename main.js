function searchBooks(events){
  var searchStr = event.target.value.toLowerCase();

  document.querySelectorAll('.container #book-list div').forEach(book) => {
