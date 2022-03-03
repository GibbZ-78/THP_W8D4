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

// JBV - Function cleaning the targeted textarea
function reset_chat() {
  document.getElementById("my_print_area").value = "";
}

// JBV - Function valuating the targeted textarea
function add_to_my_textarea(my_message) {
  let jumpline = ((document.getElementById("my_print_area").value == "") ? "" : "\n");
  document.getElementById("my_print_area").value += jumpline + my_message;
}

// JBV - computing the answer of the bot based on the human question
function talk_to_human(my_question) {
  let bot_answer = "";
  switch (true) {
    case my_question.endsWith("?"):
      bot_answer = "Ouais Ouais...";
      break;
    case my_question == "":
      bot_answer = "T'es en PLS ou quoi ?";
      break;
    case my_question == my_question.toUpperCase():
      bot_answer = "Pwa, calme-toi...";
      break;
    case my_question.search("Fortnite") != -1:
      bot_answer = "On s'fait une partie soum-soum ?";
      break;
    default:
      bot_answer = "Balek... KGB...";
      break;
  }
  add_to_my_textarea("   > Bot: " + bot_answer);
}

// JBV - Function collecting the user input, launching the method to answer, then reseting the input item
function talk_to_bot() {
  my_sentence = document.getElementById("my_input").value;
  add_to_my_textarea(" > You: " + my_sentence);
  talk_to_human(my_sentence);
  document.getElementById("my_input").value = "";
}

