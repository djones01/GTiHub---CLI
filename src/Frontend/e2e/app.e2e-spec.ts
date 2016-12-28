import { GTiHubPage } from './app.po';

describe('gti-hub App', function() {
  let page: GTiHubPage;

  beforeEach(() => {
    page = new GTiHubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
