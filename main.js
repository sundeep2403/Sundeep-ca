function searchBooks(events){
  var searchStr = event.target.value.toLowerCase();

  document.querySelectorAll('.container #book-list div').forEach(book) => {
    var bookTest = book.innerText.toLowerCase();

    if(bookText.indexOf(searchStr) === -1) {
      book.style.display = 'none';
      
