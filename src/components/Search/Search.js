const styles = /*html*/`
    <style>
        :host {
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    </style>
`;

export default class Search extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            ${styles}            
            <input type="text" placeholder="Search">
        `;
    }
}