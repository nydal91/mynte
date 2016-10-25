import { MyntePage } from './app.po';

describe('mynte App', function() {
  let page: MyntePage;

  beforeEach(() => {
    page = new MyntePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
