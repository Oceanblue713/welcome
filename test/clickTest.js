/* eslint-disable no-undef */
const assert = require('assert');
const expect = require('chai').expect;

describe('Test Anri Liy homepage', () => {
  beforeEach(() => {
    browser.url('./');
  })
  it('Validate whether the homepage titleis correct', () => {
    const title = browser.getTitle();
    assert.strictEqual(title, 'Anri Liy');
  });

  it('click About link', () => {
    $('*=About').click();
  });

  it('click Skills link', () => {
    $('*=Skills').click();
  });

  it('click What I like link', () => {
    $('*=What I like').click();
  });

  it('click Contact', () => {
    $('*=Contact').click();
  });
});

describe('Website contents', () => {
  it('has About Me header', () => {
    const aboutMe = $('h2=About Me')
    expect(aboutMe.getText()).to.equal('About Me');
    expect(aboutMe.getTagName()).to.equal('h2');
  });

  it('has Skills header', () => {
    const skills = $('h2=Skills')
    expect(skills.getText()).to.equal('Skills');
    expect(skills.getTagName()).to.equal('h2');
  });

  it('has What I like header', () => {
    const whatIlike = $('h2=What I like')
    expect(whatIlike.getText()).to.equal('What I like');
    expect(whatIlike.getTagName()).to.equal('h2');
  });

  it('has Contact Me header', () => {
    const contactMe = $('h2=Contact Me');
    expect(contactMe.getText()).to.equal('Contact Me');
    expect(contactMe.getTagName()).to.equal('h2');
  });
});

describe('Website contents', () => {
  it('has About Me header', () => {
    const aboutMe = $('h2=About Me')
    expect(aboutMe.getText()).to.equal('About Me');
    expect(aboutMe.getTagName()).to.equal('h2');
  });

  it('has Skills header', () => {
    const skills = $('h2=Skills')
    expect(skills.getText()).to.equal('Skills');
    expect(skills.getTagName()).to.equal('h2');
  });

  it('has What I like header', () => {
    const whatIlike = $('h2=What I like')
    expect(whatIlike.getText()).to.equal('What I like');
    expect(whatIlike.getTagName()).to.equal('h2');
  });

  it('has Contact Me header', () => {
    const contactMe = $('h2=Contact Me');
    expect(contactMe.getText()).to.equal('Contact Me');
    expect(contactMe.getTagName()).to.equal('h2');
  });
});

describe('What I like modals', () => {
  it('click cooking image', () => {
    $('.like-raw > div:nth-of-type(1) .figure-img.img-fluid.rounded-circle').click();
    const modal = $('.like-modal-box.react-reveal')
    modal.waitForExist();
    expect(modal.isDisplayed()).to.equal(true);
    $('.like-close-button').click();
    browser.pause(2000);
    expect(modal.isDisplayed()).to.equal(false);
  });
});
