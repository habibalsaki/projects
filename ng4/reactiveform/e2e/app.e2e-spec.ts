import { ReactiveformPage } from './app.po';

describe('reactiveform App', () => {
  let page: ReactiveformPage;

  beforeEach(() => {
    page = new ReactiveformPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
