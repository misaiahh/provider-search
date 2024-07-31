export default class ClaimsModule extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <panel-component>
                <span slot="header">Claims</span>
                <span slot="body">Claims</span>
                <span slot="footer">Claims</span>
            </panel-component>
        `;
    }
}