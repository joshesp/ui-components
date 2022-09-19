import "./btn-icon-hover-effect.css";
import Prism from "prismjs";

const btnHtml = `<button class="btn-hover-icon">Hover me</button>`;

const codeBtnBase = `.btn-hover-icon {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    border: none;
    border-radius: 0.25rem;
    font-size: 0.9rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.1rem;
    box-shadow: 1px 1px 5px #0907145e;
    background-color: #da70d6;
    color: #f9f8fd;
    width: 200px;
}`;

const codeBtnAfter = `.btn-hover-icon::after {
    content: "";
    display: block;
    width: 0px; /* Default width */
    height: 24px; 
    overflow: hidden;
    background-image: url("./arrow-forward.svg");  /* Svg icon */
    background-repeat: no-repeat;
    transition: width 200ms, margin-left 200ms;
}`;

const codeBtnHover = `.btn-hover-icon:is(:hover, :focus)::after {
    width: 24px; /* Update width */
    margin-left: 8px; /* Space between text and icon */
}`;

export default `
    <div class="ui__component">
        <div class="ui__component__preview">
            <h3 class="ui__component__title">Button hover icon</h3>
            <div class="ui__component__example">${btnHtml}</div>
        </div>
        <div class="ui__component__code">
            <p>It's a simple button with class <code>btn-hover-icon</code>.</p>
            <pre class="language-html">${Prism.highlight(
              btnHtml,
              Prism.languages.html,
              "html"
            )}</pre>
            <p>Base style.</p>
            <pre class="language-css"><code>${Prism.highlight(
              codeBtnBase,
              Prism.languages.css,
              "css"
            )}</code></pre>
            <p>Style to svg icon in pseudo element <code>::after</code>.</p>
             <pre class="language-css"><code>${Prism.highlight(
               codeBtnAfter,
               Prism.languages.css,
               "css"
             )}</code></pre>
            <p>Style in <code>hover</code> action.</p>
            <pre rel="css" class="language-css"><code>${Prism.highlight(
              codeBtnHover,
              Prism.languages.css,
              "css"
            )}</code></pre>
        </div>
    </div>
`;
