function print_everywhere(my_message) {
  console.log(my_message + " - Console");
  document.write(my_message + " - Page HTML");
  window.alert(my_message + " - Alert pop-up");
}

function prompt_then_display_pyramid() {
  let gimme_a_number_of_levels = prompt("How many levels should the pyramid have?");
  let my_pyramid = "";
  for (let index = 1; index <= gimme_a_number_of_levels; index++) {
    my_pyramid = my_pyramid + " ".repeat(gimme_a_number_of_levels - index) + "*".repeat(index) + "\n";
  }

  // Doesn't work with the "document.write" method... Go with "document.writeln" for each line instead...
  print_everywhere(my_pyramid);
}