import "./btn-hover-bg-animation.css";
import Prism from "prismjs";

const codeHtmlBtn = `<button class="btn-bg-hover-animate">
    <span>Hover me</span>
    <span class="material-icons">east</span>
</button>`;

const codeCssBaseBtn = `.btn-bg-hover-animate {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  border: none;
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.1rem;
  background-color: transparent;
  color: #da70d6;
  position: relative;
  padding: 0.5rem 1rem;
  transition: color 0.35s ease-out; /* transition to color text */
}

/* Space between in the text and the icon */
button span:first-child {
  margin-right: 0.4rem;
}

button span:last-child {
  margin-left: 0.4rem;
}

/* Color to the icon */
.btn-bg-hover-animate .material-icons {
  color: #f9f8fd;
}`;

const codeCssBeforeBtn = `/* Circular background button */
.btn-bg-hover-animate::before {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateX(calc(100% + 8px));  /* The background is on the right position */
  width: 45px;
  height: 45px;
  background-color: #da70d6;
  border-radius: 50px;
  transition: transform 0.25s 0.25s cubic-bezier(0, 0, 0.5, 2), width 0.25s cubic-bezier(0, 0, 0.5, 2); /* transition to background change */
  z-index: -1;
}`;

const codeCssHoverBtn = ` /* Color text hover */
.btn-bg-hover-animate:hover {
  color: #f9f8fd;
  transition: color 0.35s ease-in;
}

/* Background button hover */
.btn-bg-hover-animate:hover::before {
  width: 100%;
  transform: translateY(-50%) translateX(0px);
  transition: transform 0.25s cubic-bezier(0, 0, 0.5, 1), width 0.25s 0.25s cubic-bezier(0, 0, 0.5, 2);
}`;

export default `
    <div class="ui__component">
        <div class="ui__component__preview">
            <h3 class="ui__component__title">Button background hover animation</h3>
            <div class="ui__component__example">${codeHtmlBtn}</div>
        </div>
        <div class="ui__component__code">
            <p>Add a <code>button</code> tag and inside it add text and icon in <code>span</code> tag, in this case I use <a target="_new" href="https://fonts.google.com/icons?selected=Material+Icons">Material icons</a>.</p>
            <pre class="language-html"><code>${Prism.highlight(
              codeHtmlBtn,
              Prism.languages.html,
              "html"
            )}</code></pre>
            <p>Base style.</p>
            <pre class="language-css"><code>${Prism.highlight(
              codeCssBaseBtn,
              Prism.languages.css,
              "css"
            )}</code></pre>
            <p>Style to background color and transition in pseudo element <code>::before</code>.</p>
            <pre class="language-css"><code>${Prism.highlight(
              codeCssBeforeBtn,
              Prism.languages.css,
              "css"
            )}</code></pre>
            <p>Style in <code>hover</code> action.</p>
            <pre rel="css" class="language-css"><code>${Prism.highlight(
              codeCssHoverBtn,
              Prism.languages.css,
              "css"
            )}</code></pre>
            <q>If you interested to know about more <code>cubic-bezier</code> function, check the next article: <a target="_new" href="https://css-tricks.com/advanced-css-animation-using-cubic-bezier/">Using cubic-bezier()</a>.</q>
        </div>
    </div>
`;
