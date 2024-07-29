export default class FamilyInfo extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="family-info-container">
                Family Info
            </div>
        `;
    }
}