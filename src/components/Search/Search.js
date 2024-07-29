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
    search = "";

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    dissconnectedCallback() {
        this.shadowRoot.querySelector("input").removeEventListener("input");
    }

    setState(state) {
        Object.assign(this, state);
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            ${styles}            
            <input type="text" placeholder="Search" value="${this.search}">
        `;
        this.shadowRoot.querySelector("input").addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                console.log({ value: event.target.value });
                this.setState({ search: event.target.value });
                this.dispatchEvent(new CustomEvent('provider-search', { detail: { value: event.target.value } }));
            }
        });
    }
}