import Search, { ResultList } from './components/Search';
import ProviderSearch from './containers/ProviderSearch';
import MemberInfo from './components/MemberInfo';
import FamilyInfo from './components/FamilyInfo';
import './components/ClaimsModule';
import './components/ui';

customElements.define('search-component', Search);
customElements.define('result-list', ResultList);
customElements.define('provider-search', ProviderSearch);
customElements.define('member-info', MemberInfo);
customElements.define('family-info', FamilyInfo);

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/**
 * @type {HTMLElement}
 */
const app = $("#app");

app.innerHTML = "<provider-search></provider-search>";