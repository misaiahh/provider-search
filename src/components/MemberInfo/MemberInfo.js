export default class MemberInfo extends HTMLElement {
    constructor() {
        super();
    }  

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="member-info-container">
                Member Info
            </div>
        `;
    }
}