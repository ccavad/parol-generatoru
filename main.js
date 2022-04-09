$(document).ready(function(){

  $(window).on('load', parolYarat); // sehife yuklenen kimi parol yaradacaq

  // variables

  const uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
  const lowercase = "qwertyiopasdfghjklzxcvbnm";
  const numbers = "1234567890";
  const special = "~`!@#$%^&*()-_+={}[]|\\;:\"<>,./?";
  const uzunluq = $("#uzunluq"); // parolun uzunlugunu idare eden range inputu
  let generatedParol;
  const uzunluqspan = $("#uzunluqspan"); // parolun uzunlugunu gosteren label
  const parol = $("#parol"); // parolun goruneceyi text inputu


  // buttons

  uzunluq.change(()=>{
    uzunluqspan.html(uzunluq.val());
    parolYarat()
    if(uzunluq.val() < 7){
      parol.css({"border-color": "red", "color": "red"})
    } else if (uzunluq.val() >8) {
      parol.css({"border-color": "green", "color": "green"})
    } else {
      parol.css({"border-color": "orange", "color": "orange"})
    }
  })

  $("#generateBtn").click(()=>{
    parolYarat()
  })

  $("#copyBtn").click(()=>{
    parol.select();
    document.execCommand("Copy");
    if(parol.val() != 0){ // parolun kopyalandigini bildiren popup cixardacaq
      $(".notif").show(250)
      setTimeout(() => {
      $(".notif").hide(250)
      }, 3000);
    }
  })

  $(".checkboxcont input").click(()=>{parolYarat()})

  // funksiyalar

  function parolYarat(){
    generatedParol = "";
    generateRndm();
    parol.val(generatedParol);
  }

  function generateRndm(){

    let allChar = "";
    ($("#check1").is(":checked") === true) ? allChar += uppercase : {};
    ($("#check2").is(":checked") === true) ? allChar += lowercase : {};
    ($("#check3").is(":checked") === true) ? allChar += numbers : {};
    ($("#check4").is(":checked") === true) ? allChar += special : {};
    allChar = allChar.split("")

    if (allChar.length == 0) {
      parol.attr("placeholder", "parol seçiminiz boşdur")
    } else {
      for(i=0; i<uzunluq.val(); i++){
        generatedParol += allChar[Math.floor(Math.random() * allChar.length)]
      }
      return generatedParol;
    }
  }

  const darkmode = $("button#darkmode");
  const duymeler = $(".parolxana button")

  darkmode.click(() => {
    $("body").toggleClass("darkmode");

    if ($("body").hasClass("darkmode")) {
      darkmode.html("<i class='fa-solid fa-sun'></i>");
      darkmode.css({"background" : "orange", "color" : "white"});
      duymeler.css({"color" : "white"});
    } else {
      darkmode.html("<i class='fa-solid fa-moon'></i>");
      duymeler.css({"color" : "#180A0A"});
      darkmode.css({"background" : "black", "color" : "white"})
    }
  })

});
