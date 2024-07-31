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
    results = [];
    $$;

    constructor() {
        super();
        this.$$ = this.querySelectorAll.bind(this);
    }

    static get observedAttributes() {
        return ["results"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) return;

        switch (name) {
            case 'results':
                this.setState({ results: JSON.parse(newValue) });
                this.render();
                break;
        }
    }

    connectedCallback() {}

    setState(state) {
        Object.assign(this, state);
        this.render();
    }

    render() {
        this.innerHTML = `
            ${styles}
            <ul>
                ${this.results.map(r => `
                    <li>
                        <button name="member" value="${r.id}">${r.name}</button>
                    </li>
                `).join("")}
            </ul>
        `;
        this.$$("button").forEach(b => {
            b.addEventListener("click", (event) => {
                console.log(event.target.value);
                this.dispatchEvent(new CustomEvent("member-selected", { detail: { value: event.target.value } }));
            });
        });
    }
}