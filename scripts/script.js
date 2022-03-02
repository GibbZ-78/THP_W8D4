function load_my_js_page() {
  let my_choice = document.getElementById('my_form_to_choose_a_js').value;
  if (my_choice != "" && parseInt(my_choice) >= 1 && parseInt(my_choice) <= 7) {
    let my_url = `index_${my_choice}.html`;
    document.location.assign(my_url);
  }
  else {
    document.location.reload();
  }
}