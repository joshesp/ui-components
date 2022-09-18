import "./btn-icon-hover-effect.css";

export default `
    <div class="ui__component">
        <div class="ui__component__preview">
            <h3 class="ui__component__title">Button icon effect</h3>
            <div class="ui__component__example">
                <button class="btn">Get started</button>
            </div>
        </div>
        <div class="ui__component__code">
            <pre rel="css" class="language-css"><code>.btn::after {
    content: "";
    display: block;
    width: 0px; /* Default width */
    height: 24px; 
    overflow: hidden;
    background-image: url("./arrow-forward.svg");  /* Svg icon */
    background-repeat: no-repeat;
    transition: width 200ms, margin-left 200ms;
}</code></pre>
<pre rel="css" class="language-css"><code>.btn:is(:hover, :focus)::after {
    width: 24px; /* Update width */
    margin-left: 8px; /* Space between text and icon */
}</code></pre>
        </div>
    </div>
`;
