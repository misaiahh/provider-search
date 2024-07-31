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
                <span slot="body">Please select a member</span>
                <span slot="footer">Link to claims</span>
            </panel-component>
        `;
    }
}