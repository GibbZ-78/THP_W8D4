function print_everywhere(my_message) {
  console.log(`${my_message} - Console`);
  document.writeln(`<p>${my_message} - Page HTML</p>`);
  document.writeln("<p><a href='index.html'>Click here to get back to the menu page</a></p>");
  document.writeln("<p>Before that, do not forget to check your browser's console for a surprise!</p>");
  document.close();
  window.alert(my_message + " - Alert pop-up");
}

function print_personalized(my_message) {
  let iv_my_people = window.prompt("Dis donc, quel est ton prénom?");
  console.log(`${my_message} ${iv_my_people} - Console`);
  document.writeln(`<p>${my_message} ${iv_my_people} - Page HTML</p>`);
  document.writeln("<p><a href='index.html'>Click here to get back to the menu page</a></p>");
  document.writeln("<p>Before that, do not forget to check your browser's console for a surprise!</p>");
  document.close();
  window.alert(`${my_message} ${iv_my_people} - Alert pop-up`);
}