import { Angular2MasonryDemoPage } from './app.po';

describe('angular2-masonry-demo App', function() {
  let page: Angular2MasonryDemoPage;

  beforeEach(() => {
    page = new Angular2MasonryDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
