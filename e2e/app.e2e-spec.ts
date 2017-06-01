import { SimplesurveyAngularCliPage } from './app.po';

describe('simplesurvey-angular-cli App', () => {
  let page: SimplesurveyAngularCliPage;

  beforeEach(() => {
    page = new SimplesurveyAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
