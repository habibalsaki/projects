import { NGRefPage } from './app.po';

describe('ngref App', () => {
  let page: NGRefPage;

  beforeEach(() => {
    page = new NGRefPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
