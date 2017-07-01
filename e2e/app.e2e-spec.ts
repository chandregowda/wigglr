import { FintechPage } from './app.po';

describe('fintech App', () => {
  let page: FintechPage;

  beforeEach(() => {
    page = new FintechPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
