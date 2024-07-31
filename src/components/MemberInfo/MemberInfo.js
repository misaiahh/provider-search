export default class MemberInfo extends HTMLElement {
    search = '';

    constructor() {
        super();
    }

    static get observedAttributes() {
        return ['search'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) return;

        switch (name) {
            case 'search':
                this.setState({ search: newValue });
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
        this.innerHTML = `
            <panel-component>
                <span slot="header">Member Info</span>
                <span slot="body">${this.search ? this.search : 'Please select a member'}</span>
                <span slot="footer">Link to member</span>
            </panel-component>
        `;
    }
}