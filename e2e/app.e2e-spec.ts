import { DemocliPage } from './app.po';

describe('democli App', () => {
  let page: DemocliPage;

  beforeEach(() => {
    page = new DemocliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
