import { Eteki.DashboardPage } from './app.po';

describe('eteki.dashboard App', () => {
  let page: Eteki.DashboardPage;

  beforeEach(() => {
    page = new Eteki.DashboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
