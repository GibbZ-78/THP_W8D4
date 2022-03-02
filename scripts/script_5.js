// JBV - Global constant: table of hashes containing... Books. How original ;-)
const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// JBV - Function valuating the targeted textarea
function print_in_my_textarea(my_message) {
  document.getElementById("my_print_area").value = my_message;
}

// JBV - Test if all books have been rented at least X times (X being collected via a prompt to the user)
//       Function manages the possble "null", "" (empty) and <0 cases
function rented_at_least_N_times() {
  let tmp_string = "";
  let user_given_n = window.prompt("What threshold value for 'rented' do you want to use?");
  if (user_given_n !== null && user_given_n != "" && parseInt(user_given_n) > 0) {
    let rented_less_tab = [];
    for (const book1 of books) {
      if (book1.rented < parseInt(user_given_n)) {
        rented_less_tab.push(book1);
      }
    }
    if (rented_less_tab.length > 0) {
      tmp_string = `Too bad, these books have been less rented than ${user_given_n} times:\n\n`;
      rented_less_tab.forEach(book2 => tmp_string += `${book2.title} (ID: ${book2.id}, rented ${book2.rented} times)\n`);
    }
    else {
      tmp_string = `Good news: no book has been rented less than ${user_given_n} times!`;
    }
  }
  else {
    tmp_string = "You thought I was dumb... Come on, type something meaningful in, for once!";
  }
  print_in_my_textarea(tmp_string);
}

// JBV - Display the most and less rented books among the list
function most_least_rented() {
  let tmp_sorted_tab = books.sort((a, b) => { return (a.rented > b.rented ? 1 : (a.rented <= b.rented ? -1 : 0)); });
  // The end of the sort test is not trivial but easily understable once you know the sort method 
  // requires a ternary return pattern for its anonymous function : 0 for equal, 1 if ordered asc, -1 if desc
  tmp_string = `The LESS rented book is ${tmp_sorted_tab[0].title} (rented ${tmp_sorted_tab[0].rented} times)\n\n`;
  tmp_string += `The MOST rented book is ${tmp_sorted_tab.at(-1).title} (rented ${tmp_sorted_tab.at(-1).rented} times)`;
  print_in_my_textarea(tmp_string);
}

// JBV - Returns all info from book #873495
function info_book_873495() {
  let tmp_book = books.find(a => a.id == 873495);
  let tmp_string = `We found your book ID ${tmp_book.id}: irs title is '${tmp_book.title}' and has been rented ${tmp_book.rented} times`;
  print_in_my_textarea(tmp_string);
}

// JBV - Function using the power of the "anonymous / generic methods" (exact name?)
//       to achieve an ascendant sort in place of this array of hashes, by books'title
function sort_by_title() {
  let tmp_string = "";
  let tmp_sorted_tab = books.sort((a, b) => { return a.title.localeCompare(b.title); })
  // Other possible syntaxes :
  // ... books.sort(function(a, b) { return a.title.localeCompare(b.title); })
  // ... books.sort(function (a, b) { return a.title < b.title; })
  tmp_sorted_tab.forEach(book => tmp_string += `${book.title} (ID: ${book.id}, rented ${book.rented} times)\n`);
  print_in_my_textarea(tmp_string);
}

// JBV - Delete the hash containing all info related to book #133712
function suppr_book_133712() {
  books.splice(books.findIndex(function (my_hash) { return my_hash.id == 133712 }), 1);
  sort_by_title();
}