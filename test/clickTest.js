/* eslint-disable no-undef */
const assert = require('assert');

describe('Test Anri Liy homepage', () => {
  it('Validate whether the homepage titleis correct', () => {
    browser.url('./');
    const title = browser.getTitle();
    assert.strictEqual(title, 'Anri Liy');
  });
});
