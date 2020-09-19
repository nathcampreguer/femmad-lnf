(function (window, document, undefined) {

  'use strict';

  const basic_info_form = document.getElementById("basic_info");
  const try_again_btn = document.getElementById("try_again_btn");
  const about_section = document.getElementById("about");

  const result_div = document.getElementById("result");
  const radiobuttons = document.getElementsByClassName("radio-box");

  let score = 0;

  const img_placeholder = document.getElementById("fortune_result");


  function tell_fortune(event) {
    const gender_selector = basic_info_form.elements['gender'];
    const age_selector = basic_info_form.elements['age'];
    const nationality_selector = basic_info_form.elements['nationality'];

    const gender = gender_selector.value;
    const age = age_selector.value;
    const nationality = nationality_selector.value;

    var score = 0;

    for(const element of radiobuttons){
      if(element.checked){
        score += parseInt(element.value);
      }
    }

    var test = score;
    
    if (test <= 7) {
      img_placeholder.classList.add("not_using");
    }if(test > 7 && test < 10){
      img_placeholder.classList.add("moderate");
    }if (test >= 10) {
      img_placeholder.classList.add("frequent");
    }

    //document.getElementById("delete_me").innerHTML = score;

    basic_info_form.hidden = true;
    about_section.hidden = true;
    result_div.hidden = false;


    event.preventDefault();
  }

  function tryAgain(){
    basic_info_form.hidden = false;
    result_div.hidden = true;

    for(const element of radiobuttons){
      element.checked = false;
    }

    if (score <= 7) {
      img_placeholder.classList.remove("not_using");
    }if(score > 7 && score < 10){
      img_placeholder.classList.remove("moderate");
    }if (score >= 10) {
      img_placeholder.classList.remove("frequent");
    }
    score = 0;

  }


  basic_info_form.addEventListener('submit', tell_fortune);
  try_again_btn.addEventListener('click', tryAgain);

})(window, document);
