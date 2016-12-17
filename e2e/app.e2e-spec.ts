import { Intro12AppsPage } from './app.po';

describe('intro-12-apps App', function() {
  let page: Intro12AppsPage;

  beforeEach(() => {
    page = new Intro12AppsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
