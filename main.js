import "./reset.css";
import "./node_modules/prismjs/themes/prism-tomorrow.css";
import "./style.css";

import ButtonsComponent from "./src/buttons/buttons";

const uiItems = [
  { label: "Buttons", component: ButtonsComponent },
  { label: "Inputs", component: null },
  { label: "Loaders", component: null },
  { label: "Progress", component: null },
  { label: "Text", component: null },
];

const mapUIItems = () => {
  return uiItems
    .map(
      ({ label }) => `
      <div class="ui__item" id="ui-${label.toLowerCase()}">
        <span>${label}</span>
      </div>
    `
    )
    .join("");
};

document.querySelector("#app").innerHTML = `
  <h1>UI components</h1>
  <div class="despcription">
    <p>This page contains regular UI elements for on the web such as buttons, loaders, inputs and others elements. The components are in <code>HTML, CSS</code> and a some have some <code>Javascript</code> code (basic code 😐).</p>
    <p>I hope this components will help you in some way and I'm still working on in it 👨‍🏭, so there will be more components soon.</p>
  </div>
  <div class="ui__container">
    <div class="ui__container__components-list">
      ${mapUIItems()}
    </div>
    <div class="ui__container__components"></div>
  </div>
`;

document.querySelectorAll(".ui__item").forEach((element) => {
  element.addEventListener("click", (_) => {
    const uiElelment = element.getAttribute("id").replace("ui-", "");
    const component = uiItems.find(
      ({ label }) => label.toLowerCase() === uiElelment
    );

    document.querySelector(".ui__container__components").innerHTML = `${
      component?.component ??
      "<h4>At the moment there are no elements to display 😅, I'm working on it.</h4>"
    }`;

    document
      .querySelectorAll(".ui__item")
      .forEach((e) => e.classList.remove("active"));
    element.classList.add("active");
  });
});
