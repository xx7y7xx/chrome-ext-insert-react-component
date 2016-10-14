// d3vin.chen@gmail.com

// Switch to tab
var tab = document.getElementById("expense_wait_link");
if (tab) {
  setTimeout(function(){
    
    document.getElementById("expense_wait_link").click();
  }, 1000);
}

// Place React root node
var li = document.getElementById('li_expBillQueryCondi');
if (li) {
  
  // bootstrap style namespace
  // This will conlict with the original style
  //document.body.className += "tw-bs";
  
  var parent = li.parentNode;

  //<link href="//cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
  //<link href="//cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" rel="stylesheet">
  function createLink(href) {
    var l = document.createElement("link");
    l.href = href;
    l.rel = "stylesheet";
    return l;
  }
  var link1 = createLink("//cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css");
  var link2 = createLink("//cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap-theme.min.css");

  // <div id="root" />
  var div = document.createElement("div");
  div.id = "root";
  div.className = "tw-bs";
  div.innerHTML = "fuck you";

  //parent.insertBefore(link1, li);
  //parent.insertBefore(link2, li);
  parent.insertBefore(div, li.nextSibling);
}