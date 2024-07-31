import './components/Search';
import './containers/ProviderSearch';
import './components/MemberInfo';
import './components/FamilyInfo';
import './components/ClaimsModule';
import './components/ui';

const $ = document.querySelector.bind(document);

/**
 * @type {HTMLElement}
 */
const app = $("#app");

app.innerHTML = "<provider-search></provider-search>";