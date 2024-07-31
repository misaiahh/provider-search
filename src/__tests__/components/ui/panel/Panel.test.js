import { expect, test } from 'vitest';
import Panel from '../../../../components/ui/Panel/Panel';

customElements.define('panel-component', Panel);

test('Panel renders correctly', () => {
    const panel = document.createElement('panel-component');
    document.body.appendChild(panel);

    const header = panel.shadowRoot.querySelector('.panel-header');
    expect(header).toBeTruthy();

    const body = panel.shadowRoot.querySelector('.panel-body');
    expect(body).toBeTruthy();

    const footer = panel.shadowRoot.querySelector('.panel-footer');
    expect(footer).toBeTruthy();
});