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

var books = [
    {id: 1, name: "HTML,CSS and Javascript All in One",FeaturedImage:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSGsLXsdC6Fm7scE9Phb9oVA40AwU8jv_wPMFspfE18VALdkC_ZOG5FxUEs10FfNjbamhPe3DOyAIaz4cCTR1eFtCc-wWzbu9RGNvQVcqY&usqp=CAc"},
    {id: 2, name: "Python Programming and SQL",FeaturedImage:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRXj13WVNfLK3lMkII5Bs5criYP7pjkTOiIZ50YAdWpY-f7q1VsmGiBzpKqRjW5jntc80DH4rLY5e1KXIXLHYi9qyQwkPP82H8rz2sMMMI&usqp=CAc"},
    {id: 3, name: "Excel VBA Programming",FeaturedImage:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQDRBWPMQNGdIt-2F-MbZw-wd_wzCGyRcECsLzG3_pUtmmr1hZBm9spb-BAAU7EvQtR-DdVUgBgpQaLa3QZ_DgUvoprzt8MSHAkovV4Mpmo&usqp=CAc"},
    {id: 4, name: "The Personal MBA",FeaturedImage:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTw8E3SqIVjntemIjkVcUT_utv1CRzUxJ7Jjp2Ea-INhfkGh7e_moCZd_TKw-S-cHMObg2WH4XV0BY3ENEVCipv8hp1bR6ktXmrb4zYyxi8whGYQceh-2L2&usqp=CAc"},
    {id: 5, name: "Rich Dad Poor Dad",FeaturedImage:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQd7mSGCdjjCJQ_7LO7i4rztTVWbh7A0FPJ7TkyY5YNy7LswSIxtkhSOvcsYYFPlBDO7N5QPzeocxhZoZtaQXp9mGqHZCxEjG02IK8TkzqxwjB15WgD2YxXFw&usqp=CAc"},
    {id: 6, name: "Project Management",FeaturedImage:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRRn6ObCRtMoCfMW6GmbZIts_N6pWQ6wpe36h2zOZLpCFlPShV4yV5WYwEyxobNhFiq1HN6L3MWV9QuvWQgvl0f81Tv0ykwxvF9LotSOeU8&usqp=CAc"},
    {id: 7, name: "The Warren Buffet Way",FeaturedImage:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR0m7iydbQzUoDq4RisHANdgE_VFcaFx6mmCNbcHR4pBlT44zAlV3FYFQxNh5zI77BppmpM-KDvLFQDCCkRqb0YJsPBFOytZVhe7Tc_sneQaNSOadTjoPg0KA&usqp=CAc"},
    {id: 8, name: "CryptoCurrency",FeaturedImage:"https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwijvKbfhJCFAxUbk1AGHchDATcYABAMGgJkZw&ase=2&gclid=Cj0KCQjwwYSwBhDcARIsAOyL0fhQbxamRHlwyWnw3m0M1D2SYKMfbudlmtc0GKRyy9xaefbTvP1PidoaAkjHEALw_wcB&ohost=www.google.co.in&cid=CAESVeD23_RhMnTdEqR7DYAC5FIBt7xU_g8a6KkzhAsKBpaRR4NT6aqsAa0vy-nr19QxZxnQtxaVfbffX1Gem8ep6ufM6KPMlCeDwp7IWzJR6iWKigoskwU&sig=AOD64_1SLIYFXp_u3mgRSC3WYA3SOj35Cg&ctype=5&q=&nis=4&ved=2ahUKEwjS3aDfhJCFAxVUQEEAHRbXDtYQ9aACKAB6BAgIEF0&adurl="},
    {id: 9, name: "The Intelligence Trap",FeaturedImage:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ4tm2JGk1-HO3AqRFOE23W3vykDsS2zdiZgqAbYbpHg9YkP2vVl2Rw2kSvpAsoMDJAZUudKAwWw3mkWr_IdeqGQYdb5Uojssm2Se5ny_9kOLZA8knDrVGniBSPhFF8UKHS_rb4QX8&usqp=CAc"},
];

function initializeBookList(){
  var bookList = document.getElementbyId("book-list")

  books.forEach(book => {
    var bookElement = document.createElement("div");
  
