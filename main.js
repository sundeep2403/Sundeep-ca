function searchBooks(events){
  var searchStr = event.target.value.toLowerCase();

  document.querySelectorAll('.container #book-list div').forEach(book) => {
    var bookTest = book.innerText.toLowerCase();

    if(bookText.indexOf(searchStr) === -1) {
      book.style.display = 'none';
    }else{
      book.style.display = 'block';
    }
  });
}
      
var searchInput = document.getElementbyId('searchInput');
searchInput.addEventListener('input',searchBooks);
