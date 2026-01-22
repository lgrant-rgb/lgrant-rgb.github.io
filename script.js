const tabs = ["homepage.html"];
render(tabs[0]);

function render(page) {
  if (page.endsWith(".html")) {
    alert("local file");
    document.getElementById("page").src = "./"+page;
  }
  document.getElementById("page").src = "https://"+page;
}
