import { BelatrixProjectPage } from './app.po';

describe('belatrix-project App', () => {
  let page: BelatrixProjectPage;

  beforeEach(() => {
    page = new BelatrixProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
