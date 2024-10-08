const styles = /*html*/`
    <style>
        result-list {
            display:flex;
            justify-content: center;
            flex-direction: column;
        }
    </style>
`;

export default class Search extends HTMLElement {
    search = "";
    memberId = null;
    memberSelected = false;
    results = [];

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

    fetchResults(_searchString) {
        return new Promise((resolve, _reject) => {
            resolve([{ name: "Micky Hallabrin", id: 1 }, { name: "Brian Casserly", id: 2 }, { name: "Bruce Wayne", id: 3 }]);
        });
    }

    render() {
        this.shadowRoot.innerHTML = `
            ${styles}
            <panel-component>
                <span slot="header">
                    <input type="text" placeholder="Search" value="${this.search}">
                </span>
                <span slot="body">
                    ${this.results.length > 0 ? `<result-list results='${JSON.stringify(this.results)}'></result-list>` : 'Search for a member'}
                </span>
            </panel-component>
        `;
        this.shadowRoot.querySelector("input").addEventListener("keydown", async (event) => {
            if (event.key === "Enter") {
                const response = await this.fetchResults(event.target.value);
                this.setState({ results: response });
            }
        });
    }
}