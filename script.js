const tabs = ["homepage.html"];
document.getElementById("page").src = render(tabs[0]);

function render(page) {
  if (page.endsWith(".html")) {
    return "./"+page;
  }
  return "https://"+page;
}
