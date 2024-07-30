const styles = /*html*/`
    <style>
        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
    </style>
`;

export default class ResultList extends HTMLElement {
    items = [];

    constructor() {
        super();
    }

    static get observedAttributes() {
        return ["results"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) return;

        switch (name) {
            case 'results':
                this.setState({ items: JSON.parse(newValue) });
                this.render();
                break;
        }
    }

    connectedCallback() {
        this.render();
    }

    setState(state) {
        Object.assign(this, state);
        this.render();
    }

    render() {
        this.results = JSON.parse(this.getAttribute("results"));
        this.innerHTML = `
            ${styles}
            <ul>
                ${this.results.map(result => `<li>${result.name}</li>`).join("")}
            </ul>
        `;
    }
}