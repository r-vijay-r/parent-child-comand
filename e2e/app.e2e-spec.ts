import { ParentChildComandPage } from './app.po';

describe('parent-child-comand App', function() {
  let page: ParentChildComandPage;

  beforeEach(() => {
    page = new ParentChildComandPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
