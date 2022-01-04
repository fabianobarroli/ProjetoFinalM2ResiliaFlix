$("button").click(function (e) {
  e.preventDefault();
  const controler = new Controller($("#email").val());

  controler.validaEmail();
});
