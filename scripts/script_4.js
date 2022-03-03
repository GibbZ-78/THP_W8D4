/******************************/
/*                            */
/*   Made with love & sweat   */
/*                            */
/*             by             */
/*                            */
/*      -~={ GIBBZ }=~-       */
/*                            */
/*  (c) 2022 Itemacy for THP  */
/******************************/

// JBV - Global constant: table of hashes containing the Who's who !
const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// JBV - Function valuating the targeted textarea
function print_in_my_textarea(my_message) {
  document.getElementById("my_print_area").value = my_message;
}

// JBV - Function filtering and concatenating infos of those stars born in the 70's solely
function born_in_the_70s() {
  let tmp_string = "";
  for (let index = 0; index < entrepreneurs.length; index++) {
    let nerd = entrepreneurs[index];
    if ((nerd.year >= 1970) && (nerd.year < 1980)) {
      tmp_string += `${nerd.first} ${nerd.last} (${nerd.year})\n`;
    }
  }
  print_in_my_textarea(tmp_string);
  // Here above, instead of displaying the first name, last name and year of birth, 
  // we could have built an array or any other structure containing this information
}

// JBV - Once the 1st question above provided, quite easy to display firs tand last names for all stars
function array_first_last() {
  let tmp_struct = {};
  let tmp_string = "";
  var my_table_first_last = [];
  for (let index = 0; index < entrepreneurs.length; index++) {
    let nerd = entrepreneurs[index];
    let tmp_struct = { firstname: nerd.first, lastname: nerd.last };
    my_table_first_last.push(tmp_struct);
  }
  my_table_first_last.forEach(nerd => tmp_string += `${nerd.firstname} ${nerd.lastname}\n`);
  print_in_my_textarea(tmp_string);
  // In addition to printing its content, the "my_table_first_last" array of hash 
  // is now accessible throughout the whole Javascript program, because instanciated via "var"
}

// JBV - Same as above, except current age is computed on the flow, then all this info displayed / reused
function compute_ages() {
  let tmp_string = "";
  let true_age = 0;
  let currentTime = new Date();
  let currentYear = currentTime.getFullYear();
  for (const nerd of entrepreneurs) {
    true_age = currentYear - nerd.year;
    tmp_string += `${nerd.first} ${nerd.last} (${nerd.year}, ${true_age} y.o.)\n`;
  }
  print_in_my_textarea(tmp_string);
  // Here above, instead of displaying the first name, last name, year of birth, and age,
  // we could have built an array or any other structure containing this information
}

// JBV - Function using the power of the "anonymous / generic methods" (exact name?)
//       to achieve an ascendant sort in place of this array of hashes, by stars' last name
function sort_by_lastname() {
  let tmp_string = "";
  let tmp_sorted_tab = entrepreneurs.sort((a, b) => { return a.last.localeCompare(b.last); })
  // Other possible syntaxes :
  // ... entrepreneurs.sort(function(a, b) { return a.last.localeCompare(b.last); })
  // ... entrepreneurs.sort(function (a, b) { return a.last < b.last; }) // This last one did not work, though...???
  // ... It is also possible to create one's own comparison function and call it within the "sort()" method: poserful !
  tmp_sorted_tab.forEach(star => tmp_string += `${star.last} ${star.first} (${star.year})\n`);
  print_in_my_textarea(tmp_string);
  // Again, here above, instead of displaying the first name, last name, and year of birth 
  // of all stars, ordered by they ascending last name, we could have manipulated the "tmp_sorted_tab" 
  // to do something else
}