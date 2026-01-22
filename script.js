const tabs = ["homepage.html"];
render(tabs[0]);
//document.getElementById("page").src = "./homepage.html";

function render(page) {
  if (page.endsWith(".html")) {
    document.getElementById("page").src = "./"+page;
  }
  document.getElementById("page").src = "https://"+page;
}
