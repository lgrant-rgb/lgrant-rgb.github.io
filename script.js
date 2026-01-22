const tabs = ["home"];
document.getElementById("page").src = "./homepage.html";

function exists(url)
{
  var http = new XMLHttpRequest();
  http.open('HEAD', url, false);
  http.send();
  return http.status!=404;
}


function render(page) {
  if (exists("./"+page+".html")) {
    document.getElementById("page").src = "./"+page+".html";
  }
  document.getElementById("page").src = "https://"+page;
}
