import { PhosfogularPage } from './app.po';

describe('phosfogular App', function() {
  let page: PhosfogularPage;

  beforeEach(() => {
    page = new PhosfogularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
