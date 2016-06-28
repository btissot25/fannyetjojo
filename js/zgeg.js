$(document).ready(function($) {
  $("#cmd").focus();
  $("#content").append("<p>" + welcome + "</p>");
  clickHandler();
});

function clickHandler() {
  $("html").click(function() {
    $("#cmd").focus();    
  });
}

var s1 = false;
var s2 = false;
var cmdHistory = [];
// Dis donc Jojo !!! Tu pensais vraiment que tu aurais les reponses dans le code source ?!
var cmds = {
  "s1": "SklB",
  "s2": "QU4=",
  "s3": "U1M=",
  "l": "SklBNDQwOUpUL1NV",
  "b": "QlNM",
  "o": "TkNF",
  "p": "Y3NzL3Nhc3MvbGliL2Jpbi9leHAvYnAucG5n"
};
var b = "", o = "", d = "";

function validateInput() {
  var cmd = $("#cmd").val().toUpperCase();
  cmdHistory.push(cmd);
  var out = getOutput(cmd);
  $("#content").append("<p>" + $("#cmd_pre").val() + " " + cmd + "</p>")
  $("#content").append("<p>" + out + "</p>")
  $("#cmd").val("").focus();
  $("html, body").animate({ scrollTop: $(document).height() }, "slow");
}

function getOutput(cmd) {
  var out = "";
  if (cmd.indexOf(atob(cmds.l)) === 0) {
    if (!s1) {
      out = "Signed in as Johan Thivollet."
      s1 = true;
    } else {
      out = "You are already signed in."
    }
  } else if (cmd.indexOf(atob(cmds.s2)) === 0) {
    if (!s1) {
      out = "Please sign in first.";
    } else {
      if (cmd.length !== (2+2+3+3+3)) {
        out = "INVALID COMMAND."
      } else {
        d = cmd.substr(2, 5);
        b = cmd.substr(7, 3);
        o = cmd.substr(10, 3);
        if (b === atob(cmds.b) && o === atob(cmds.o)) {
          out = atob(k);
          s2 = true;
        } else {
          out = "No availability for the selected flight."
        }
      }
    }
  } else if (cmd.indexOf(atob(cmds.s3)) === 0) {
    if (!s1) {
      out = "Please sign in first.";
    } else if (!s2) {
      out = "Please check for flight availability first."
    } else {
      out = "1. BG6768 P " + d + " 2 " + b + o + " KH2 0715 0945 " + d + " E BG/HBXP7";
      $(".cmd").hide();
      $("#bp").html('<a target="_blank" href="' + atob(cmds.p) + '">Download Boarding Pass</a>');
    }
  } else {
    out = "INVALID COMMAND."
  }
  return out;
}

function keyListener(e) {
  //console.log(e.keyCode);
  if (e.keyCode === 13) {
    validateInput();
  } else if (e.keyCode === 38) {
    //UP
  } else if (e.keyCode === 40) {
    //DOWN
  }
}

var welcome = ''+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;aaaaa&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;M&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;M&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;aaaaa&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DDDDDD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EEEEEE&nbsp;&nbsp;&nbsp;UU&nbsp;&nbsp;&nbsp;UU&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SSSSS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;aa&nbsp;&nbsp;&nbsp;aa&nbsp;&nbsp;&nbsp;&nbsp;MM&nbsp;&nbsp;&nbsp;MM&nbsp;&nbsp;&nbsp;&nbsp;aa&nbsp;&nbsp;&nbsp;aa&nbsp;&nbsp;&nbsp;&nbsp;DD&nbsp;&nbsp;&nbsp;DD&nbsp;&nbsp;&nbsp;&nbsp;EE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UU&nbsp;&nbsp;&nbsp;UU&nbsp;&nbsp;&nbsp;&nbsp;SS&nbsp;&nbsp;&nbsp;SS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;aa&nbsp;&nbsp;&nbsp;&nbsp;MMM&nbsp;MMM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;aa&nbsp;&nbsp;&nbsp;&nbsp;DD&nbsp;&nbsp;&nbsp;DD&nbsp;&nbsp;&nbsp;&nbsp;EE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UU&nbsp;&nbsp;&nbsp;UU&nbsp;&nbsp;&nbsp;&nbsp;SS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>'+
'&nbsp;&nbsp;&nbsp;aaaaaaa&nbsp;&nbsp;&nbsp;&nbsp;MM&nbsp;M&nbsp;MM&nbsp;&nbsp;&nbsp;&nbsp;aaaaaaa&nbsp;&nbsp;&nbsp;&nbsp;DD&nbsp;&nbsp;&nbsp;DD&nbsp;&nbsp;&nbsp;&nbsp;EEEE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UU&nbsp;&nbsp;&nbsp;UU&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SSSSS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>'+
'&nbsp;&nbsp;aa&nbsp;&nbsp;&nbsp;aa&nbsp;&nbsp;&nbsp;&nbsp;MM&nbsp;&nbsp;&nbsp;MM&nbsp;&nbsp;&nbsp;&nbsp;aa&nbsp;&nbsp;&nbsp;aa&nbsp;&nbsp;&nbsp;&nbsp;DD&nbsp;&nbsp;&nbsp;DD&nbsp;&nbsp;&nbsp;&nbsp;EE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UU&nbsp;&nbsp;&nbsp;UU&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>'+
'&nbsp;aa&nbsp;&nbsp;&nbsp;aa&nbsp;&nbsp;&nbsp;&nbsp;MM&nbsp;&nbsp;&nbsp;MM&nbsp;&nbsp;&nbsp;&nbsp;aa&nbsp;&nbsp;&nbsp;aa&nbsp;&nbsp;&nbsp;&nbsp;DD&nbsp;&nbsp;&nbsp;DD&nbsp;&nbsp;&nbsp;&nbsp;EE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UU&nbsp;&nbsp;&nbsp;UU&nbsp;&nbsp;&nbsp;&nbsp;SS&nbsp;&nbsp;&nbsp;SS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>'+
'&nbsp;aaaaa&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MM&nbsp;&nbsp;&nbsp;MM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;aaaaa&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DDDDDD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EEEEEE&nbsp;&nbsp;&nbsp;&nbsp;UUUUU&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SSSSS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>'+
'&nbsp;&nbsp;&nbsp;T&nbsp;h&nbsp;r&nbsp;o&nbsp;u&nbsp;g&nbsp;h&nbsp;&nbsp;&nbsp;S&nbsp;e&nbsp;r&nbsp;v&nbsp;i&nbsp;c&nbsp;e&nbsp;s&nbsp;&nbsp;I&nbsp;n&nbsp;t&nbsp;e&nbsp;g&nbsp;r&nbsp;a&nbsp;t&nbsp;o&nbsp;r&nbsp;&nbsp;&nbsp;S&nbsp;y&nbsp;s&nbsp;t&nbsp;e&nbsp;m&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>'+
'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>'+
'&nbsp;You&nbsp;are&nbsp;connected&nbsp;as&nbsp;Guest.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>';

var k = 'KiombmJzcDtBTUFERVVTJm5ic3A7QVZBSUxBQklMSVRZJm5ic3A7LSZuYnNwO0FOJm5ic3A7KiombmJzcDtOQ0UmbmJzcDtOSUNFPGJyPiZuYnNwOzEmbmJzcDsmbmJzcDsmbmJzcDtCRzY3NjgmbmJzcDsmbmJzcDtKOSZuYnNwO1c5Jm5ic3A7UzkmbmJzcDtBNyZuYnNwO1k3Jm5ic3A7QjcmbmJzcDtNOSZuYnNwOy9CU0wmbmJzcDsyJm5ic3A7TkNFJm5ic3A7MSZuYnNwOyZuYnNwOzA3MTUmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDswOTQ1Jm5ic3A7Jm5ic3A7RTAvMzE5PGJyPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO1U5Jm5ic3A7SzkmbmJzcDtINCZuYnNwO0w0Jm5ic3A7UTQmbmJzcDtUNCZuYnNwO0U5Jm5ic3A7TjkmbmJzcDtSOSZuYnNwO1Y5Jm5ic3A7WDkmbmJzcDtHUjxicj4=';