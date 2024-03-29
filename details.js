var books = [
    { id: 1, Name: "HTML,CSS and Javascript All in One", Price: '35.95 Euros', 
      Description: "A thorough and helpful reference for aspiring website builders Looking to start an exciting new career in front-end web building and design? Or maybe you just want to develop a new skill and create websites for fun. Whatever your reasons, it's never been easier to start learning how to build websites from scratch than with help from HTML, CSS, & JavaScript All-in-One For Dummies . This book has the essentials you need to wrap your head around the key ingredients of website design and creation. You'll learn to build attractive, useful, and easy-to-navigate websites by combining HTML, CSS, and JavaScript into fun and practical creations. Using the 6 books compiled within this comprehensive collection, you'll discover how to make static and dynamic websites, complete with intuitive layouts and cool animations. The book also includes: Incorporate the latest approaches to HTML, CSS, and JavaScript, including those involving new markup, page styles, interactivity, and more Step-by-step instructions for new site creators explaining the very basics of page layouts and animations Easy-to-follow advice for adjusting page color and background, adding widgets to a site, and getting rid of all the bugs that affect site performance.",
      FeaturedImage: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSGsLXsdC6Fm7scE9Phb9oVA40AwU8jv_wPMFspfE18VALdkC_ZOG5FxUEs10FfNjbamhPe3DOyAIaz4cCTR1eFtCc-wWzbu9RGNvQVcqY&usqp=CAc'},
    { id: 2, Name: "Python Programming and SQL", Price: '31.49 Euros', 
      Description: "This easy-to-understand guide provides step-by-step instructions, making it effortless to grasp Python and SQL fundamentals.Progress rapidly from beginner to advanced levels with our carefully crafted curriculum. Gain confidence to tackle coding challenges.",
      FeaturedImage: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRXj13WVNfLK3lMkII5Bs5criYP7pjkTOiIZ50YAdWpY-f7q1VsmGiBzpKqRjW5jntc80DH4rLY5e1KXIXLHYi9qyQwkPP82H8rz2sMMMI&usqp=CAc'},
    { id: 3, Name: "Excel VBA Programming", Price: '18.48 Euros', 
      Description: 'Understand the basic tools and operations of Visual Basic for Applications. Create custom spreadsheet functions that make life easier for you and the people maintaining your spreadsheets. Deal with errors and exceptions and eliminate the bugs in your code',
      FeaturedImage: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQDRBWPMQNGdIt-2F-MbZw-wd_wzCGyRcECsLzG3_pUtmmr1hZBm9spb-BAAU7EvQtR-DdVUgBgpQaLa3QZ_DgUvoprzt8MSHAkovV4Mpmo&usqp=CAc' },
    { id: 4, Name: "The Personal MBA", Price: '9.09 Euros', 
      Description: "The Personal MBA gives you simple mental models for every subject that's key to commercial success. From the basics of products and marketing to the nuances of teamwork and systems, this book distils everything you need to know to take on the MBA graduates and win.",
      FeaturedImage: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTw8E3SqIVjntemIjkVcUT_utv1CRzUxJ7Jjp2Ea-INhfkGh7e_moCZd_TKw-S-cHMObg2WH4XV0BY3ENEVCipv8hp1bR6ktXmrb4zYyxi8whGYQceh-2L2&usqp=CAc' },
    { id: 5, Name: "Rich Dad Poor Dad", Price: '8.30 Euros', 
      Description: "Rich Dad Poor Dad that still ranks as the #1 Personal Finance book of all time. And although 25 years have passed since Rich Dad Poor Dad was first published, readers will find that very little in the book itself has changed — and for good reason. While so much in our world is changing at high speed, the lessons about money and the principles of Rich Dad Poor Dad haven’t changed. Today, as money continues to play a key role in our daily lives, the messages in Robert Kiyosaki’s international bestseller are more timely and more important than ever.",
      FeaturedImage: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQd7mSGCdjjCJQ_7LO7i4rztTVWbh7A0FPJ7TkyY5YNy7LswSIxtkhSOvcsYYFPlBDO7N5QPzeocxhZoZtaQXp9mGqHZCxEjG02IK8TkzqxwjB15WgD2YxXFw&usqp=CAc' },
    { id: 6, Name: "Project Management", Price: '78.15 Euros', 
      Description: "In the newly revised 13th Edition of Project Management: A Systems Approach to Planning, Scheduling, and Controlling, project management pioneer, leader, and educator Dr. Harold Kerzner delivers a comprehensive and intuitive approach to project management. Widely known as the bestselling “bible” of project management, this book aligns with the concepts and standards outlined in PMI’s latest A Guide to the Project Management Body of Knowledge, (PMBOK® Guide) and contains the detailed coverage of tools and methods used at all stages of a project.",
      FeaturedImage: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRRn6ObCRtMoCfMW6GmbZIts_N6pWQ6wpe36h2zOZLpCFlPShV4yV5WYwEyxobNhFiq1HN6L3MWV9QuvWQgvl0f81Tv0ykwxvF9LotSOeU8&usqp=CAc' },
    { id: 7, Name: "The Warren Buffet Way", Price: '20.29 Euros', 
      Description: "Warren Buffett is the most famous investor of all time and one of today’s most admired business leaders. He became a billionaire and investment sage by looking at companies as businesses rather than prices on a stock screen. The first two editions of The Warren Buffett Way gave investors their first in-depth look at the innovative investment and business strategies behind Buffett's spectacular success. The new edition updates readers on the latest investments by Buffett. And, more importantly, it draws on the new field of behavioral finance to explain how investors can overcome the common obstacles that prevent them from investing like Buffett.",
      FeaturedImage: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR0m7iydbQzUoDq4RisHANdgE_VFcaFx6mmCNbcHR4pBlT44zAlV3FYFQxNh5zI77BppmpM-KDvLFQDCCkRqb0YJsPBFOytZVhe7Tc_sneQaNSOadTjoPg0KA&usqp=CAc'},
    { id: 8, Name: "CryptoCurrency", Price: '30.45 Euros', 
      Description: "The world of cryptocurrency includes some of the coolest technologies and most lucrative investments available today. And you can jump right into the middle of the action with Cryptocurrency All-in-One For Dummies, a collection of simple and straightforward resources that will get you up to speed on cryptocurrency investing and mining, blockchain, Bitcoin, and Ethereum.",
      FeaturedImage: 'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwijvKbfhJCFAxUbk1AGHchDATcYABAMGgJkZw&ase=2&gclid=Cj0KCQjwwYSwBhDcARIsAOyL0fhQbxamRHlwyWnw3m0M1D2SYKMfbudlmtc0GKRyy9xaefbTvP1PidoaAkjHEALw_wcB&ohost=www.google.co.in&cid=CAESVeD23_RhMnTdEqR7DYAC5FIBt7xU_g8a6KkzhAsKBpaRR4NT6aqsAa0vy-nr19QxZxnQtxaVfbffX1Gem8ep6ufM6KPMlCeDwp7IWzJR6iWKigoskwU&sig=AOD64_1SLIYFXp_u3mgRSC3WYA3SOj35Cg&ctype=5&q=&nis=4&ved=2ahUKEwjS3aDfhJCFAxVUQEEAHRbXDtYQ9aACKAB6BAgIEF0&adurl=' },
    { id: 9, Name: "The Intelligence Trap", Price: '5.99 Euros', 
      Description: "We assume that smarter people are less prone to error. But greater education and expertise can often amplify our mistakes while rendering us blind to our biases. This is the intelligence trap. Drawing on the latest behavioural science and historical examples from Socrates to Benjamin Franklin, David Robson demonstrates how to apply our intelligence more wisely; identify bias and enhance our 'rationality quotient'; read and regulate our emotions; fine-tune our intuition; navigate ambiguity and uncertainty; and think more flexibly about seemingly intractable problems.",
      FeaturedImage: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ4tm2JGk1-HO3AqRFOE23W3vykDsS2zdiZgqAbYbpHg9YkP2vVl2Rw2kSvpAsoMDJAZUudKAwWw3mkWr_IdeqGQYdb5Uojssm2Se5ny_9kOLZA8knDrVGniBSPhFF8UKHS_rb4QX8&usqp=CAc' },
];
function getBookIdFromUrl(){
    var urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id'))
}

function showDetails(){
    var bookId = getBookIdfromUrl();
    var selectedBook = books.find(book => book.id === bookId);
    var detailsContent = document.getElementbyId("book-details");

    detailsContent.innerHTML = '';

    detailsContent.innerHTML = `
        <h2><b>${selectedBook.Name}</b></h2>
        <p><b>Price:</b>${selectedBook.Price}</p>
        <p><b>Description:</b>$selectedBook.Description}</p>
        <img src="${selectedBook.FeaturedImage}" alt="${selectedBook.Name} Image" width="500">
    `;

    var detailsHTML = `
        <h3>Buy Book</h3>
        <form id="buy-book">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required><br>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br>

            <label for="quantity">Quantity:</label>
            <input type="number" id="quantity" name="quantity" min="1" value="1" required><br>

            <button type="submit">Buy Now</button>
        </form>
    `;

    detailsContent.innerHTML += detailsHTML;

    var buyBookForm = document.getElementById("buy-book");
    buyBookForm.addEventListener("submit", function (event) {
        event.preventDefault();
        handleBuySubmit(selectedBook);
    });
}

document.addEventListener("DOMContentLoaded", showDetails);

function handleBuySubmit(book) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var quantity = document.getElementById("quantity").value;

    console.log(`Details:
        Book: ${book.Name}
        Name: ${name}
        Email: ${email}
        Quantity: ${quantity}
    `);

    alert("Added to Cart Successfully");
}
    
