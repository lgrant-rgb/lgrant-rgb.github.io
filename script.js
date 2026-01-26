function _render(page) {
  if (page.endsWith(".html")) {
    return page;
  }
  return "https://"+page;
}

function render(page) {
  document.getElementById("page").src = _render(page);
}

const keybinds = {
  "":""
}
const tabs = ["homepage.html"];

function main() {
  render(tabs[0]);
}

main()