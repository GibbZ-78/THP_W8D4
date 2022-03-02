function print_everywhere(my_message) {
  console.log(my_message + " - Console");
  document.write(my_message + " - Page HTML");
  window.alert(my_message + " - Alert pop-up");
}

function my_factorial(my_number) {
  if (my_number <= 1) {
    return 1;
  }
  else {
    return my_number * my_factorial(my_number - 1);
  }
}

function prompt_then_calc_then_print_factorial() {
  let gimme_a_number = prompt("Which number do you want to know the factorial of?");
  let my_result = my_factorial(parseInt(gimme_a_number));
  print_everywhere(my_result.toString());
}