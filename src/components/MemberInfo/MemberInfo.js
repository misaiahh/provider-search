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
            <div class="member-info-container">
                ${this.search ? this.search : 'Member Info'}
            </div>
        `;
    }
}