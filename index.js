$(".friend").bind('click', function (e) {
  if($(this).find('th:first').text() == 1) {
    $("#redDiv").css({ position: "absolute", top: "50px", left: "95px", border: "1px solid red", width: "90px", height: "90px", });
  } 
  else if($(this).find('th:first').text() == 2) {
    $("#redDiv").css({ position: "absolute", top: "65px", left: "160px", border: "1px solid red", width: "90px", height: "90px", });
  }
  else if($(this).find('th:first').text() == 3) {
    $("#redDiv").css({ position: "absolute", top: "35px", left: "220px", border: "1px solid red", width: "90px", height: "90px", });
  }
  else if($(this).find('th:first').text() == 4) {
    $("#redDiv").css({ position: "absolute", top: "65px", left: "295px", border: "1px solid red", width: "90px", height: "90px", });
  }
  else if($(this).find('th:first').text() == 5) {
    $("#redDiv").css({ position: "absolute", top: "40px", left: "350px", border: "1px solid red", width: "90px", height: "90px", });
  }
  else if($(this).find('th:first').text() == 6) {
    $("#redDiv").css({ position: "absolute", top: "60px", left: "415px", border: "1px solid red", width: "90px", height: "90px", });
  }
});