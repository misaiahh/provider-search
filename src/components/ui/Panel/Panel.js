const template = document.createElement("template");
template.innerHTML = /*html*/`
    <style>
        :host {
            display: block;
            border: 1px solid royalblue;
            border-radius: 5px;
            margin: 5px;
            display: flex;
            flex-direction: column;
        }

        .panel-header {
            border-bottom: 1px solid black;
            background-color: royalblue;
            padding: 10px;
            color: white;
            font-weight: bold;
        }

        .panel-body {
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .panel-footer {
            border-top: 1px solid royalblue;
            padding: 10px;
        }
    </style>
    <div class="panel-header">
        <slot name="header">
            Header
        </slot>
    </div>
    <div class="panel-body">
        <slot name="body">
            Body
        </slot>
    </div>
    <div class="panel-footer">
        <slot id="footer" name="footer"></slot>
    </div>
`;

export default class Panel extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        const parent = this.shadowRoot.querySelector(".panel-footer");
        const footer = this.shadowRoot.querySelector("#footer");
        footer.assignedNodes().length > 0 ? parent.style.display = "block" : parent.style.display = "none";
    }
}