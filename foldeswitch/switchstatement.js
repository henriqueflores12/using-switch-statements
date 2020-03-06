var msg; //Message
var level = 1; //Level

//determine message based on level
switch (level) {
  case 1:
    msg = "Good look first test";
    break;

  case 2:
    msg = "Second of there - keep going!";
    break;

  case 3:
    msg = "Final round, almost there";
    break;

  default:
    msg = "Good look";
    break;
}
var el = document.getElementById('answer');
el.textContent = msg;



//just so you can see what the console.log can see ok
console.log(level);
console.log(msg);