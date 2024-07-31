import { expect } from 'vitest';
import MemberInfo from '../../../components/MemberInfo/MemberInfo.js';

global.customElements.define('member-info', MemberInfo);

describe('MemberInfo', () => {
  let memberInfo;

  beforeEach(() => {
    memberInfo = new MemberInfo();
  });

  it('should set the search attribute', () => {
    memberInfo.setAttribute('search', 'test');
    expect(memberInfo.search).toBe('test');
  });

  it('should render the search value', () => {
    memberInfo.search = 'test';
    memberInfo.render();
    expect(memberInfo.innerHTML).toContain('test');
  });

  it('should update the search value when the attribute changes', () => {
    memberInfo.setAttribute('search', 'new value');
    expect(memberInfo.search).toBe('new value');
  });
});