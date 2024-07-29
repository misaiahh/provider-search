const styles = /*html*/`
    <style>
        search-component {
            grid-area: main;
        }

        member-info {
            grid-area: module1;
        }

        family-info {
            grid-area: module2;
        }

        :host {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: auto;
            grid-template-areas: 
                "right main main left"
                "right module1 module2 left"
        }
    </style>
`

export default class ProviderSearch extends HTMLElement {
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
            <search-component></search-component>
            <member-info></member-info>
            <family-info></family-info>
        `;
        const modules = this.shadowRoot.querySelectorAll('member-info, family-info');
        this.shadowRoot.querySelector("search-component").addEventListener("provider-search", (event) => {
            modules.forEach(module => {
                module.setAttribute("search", event.detail.value);
            })
        });
    }
}