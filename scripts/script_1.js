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

// JBV - My humble attempt to go DRY ;-)
function print_same_things() {
  document.writeln("<p><a href='index.html'>Click here to get back to the menu page</a></p>");
  document.writeln("<p>Before that, do not forget to check your browser's console (Ctrl+Shift+J on PCs, Command+Shift+J on Macs) for a surprise!</p>");
  document.close();
}

// JBV - Displays 'my_message" in the browser's console, as an alert pop-up and by replacing the current 'document'
function print_everywhere(my_message) {
  console.log(`${my_message} - Console`);
  document.writeln(`<p>${my_message} - Page HTML</p>`);
  print_same_things();
  window.alert(my_message + " - Alert pop-up");
}

// JBV - Same as 'print_everywhere' except it's pormpting for a name to personnalize all prints.
//       IMPROVEMENT: Could have been merged with preceding method by adding a switch to go generic or personnalized
function print_personalized(my_message) {
  let iv_my_people = window.prompt("Dis donc, quel est ton prénom?");
  console.log(`${my_message} ${iv_my_people} - Console`);
  document.writeln(`<p>${my_message} ${iv_my_people} - Page HTML</p>`);
  print_same_things();
  window.alert(`${my_message} ${iv_my_people} - Alert pop-up`);
}