import "./normalize.css";
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
      component?.component ?? uiElelment
    }`;
  });
});
