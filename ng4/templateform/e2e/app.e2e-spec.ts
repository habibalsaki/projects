import { TemplateformPage } from './app.po';

describe('templateform App', () => {
  let page: TemplateformPage;

  beforeEach(() => {
    page = new TemplateformPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
