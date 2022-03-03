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

// JBV - Displays 'my_message" in the browser's console, as an alert pop-up and by replacing the current 'document'
function print_everywhere(my_message) {
  console.log(my_message + " - Console");
  document.write(my_message + " - Page HTML");
  window.alert(my_message + " - Alert pop-up");
}

// JBV - Mastermind method
function prompt_then_display_pyramid() {
  let gimme_a_number_of_levels = prompt("How many levels should the pyramid have?");
  let my_pyramid = "";
  for (let index = 1; index <= gimme_a_number_of_levels; index++) {
    my_pyramid = my_pyramid + " ".repeat(gimme_a_number_of_levels - index) + "*".repeat(index) + "\n";
  }
  // Call below doesn't work with the "document.write" method... Displaying all in one single line ('\n' hence being useless)
  // Tried going with the "document.writeln" for each line instead... Did not work neither
  // Last option would be to have 1 call to 'document.write(ln)' by pyramid stage... Maybe not very optimal but could be tried ... another day!
  print_everywhere(my_pyramid);
}