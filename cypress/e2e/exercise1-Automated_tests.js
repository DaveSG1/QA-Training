import { Utilities } from "../support/utilities";

const utilities = new Utilities();

describe("IMDb Tests", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.setCookie("lc-main", "en_US");
    cy.visit("/");
    cy.get("html").should("have.attr", "lang", "en-US");
  });

  it("Search for Nicolas Cage upcoming credits", () => {
    utilities.acceptConsentBanner();
    utilities.searchForActor("Nicolas Cage");
    utilities.actorPageChecker("Nicolas Cage");
    utilities.elements
      .getActorDetailPageTitle()
      .should("contain", "Nicolas Cage");
    utilities.actorUpcomingProjects();

    // As all results shown are upcoming projects, there are no elements with tag "completed", in case them exist, the next step would be like this
    // cy.get('[data-testid="unrel_cred_actor_1"]').find('[completed]')
    //    .eq(0)
    //    .click();
  });

  it("Top box office", () => {
    utilities.acceptConsentBanner();
    utilities.navigateToTopBoxOffice();
    utilities.elements
      .getDetailPageTitle()
      .should("have.text", "Top Box Office (US)");
    utilities.clickResultInTopBoxPage(2);
    utilities.openRatingsPage();
    utilities.rateMovie(5);
  });

  it("Top 250 TV Shows", () => {
    utilities.acceptConsentBanner();
    utilities.navigateToTop250TVShows();
    utilities.verifyTop250TVShowsPage();
    utilities.selectShowAndViewPhotos("Breaking Bad");
    utilities.openImageGallery();
    utilities.selectActorInGallery("Danny Trejo");
    utilities.closeGalleryPrompt();
    cy.wait(5000);
    utilities.clickOnImage(1);
  });

  it("Celebrities born yesterday", () => {
    const yesterday = utilities.getYesterdayDate();
    utilities.acceptConsentBanner();
    utilities.navigateToCelebritiesBornOnDate();
    cy.wait(2000);
    utilities.setBirthday(yesterday);
    utilities.clickOnGetResults();
    cy.wait(3000);
    utilities.selectCelebrity(2);
    cy.wait(3000);
    cy.screenshot();
  });

  it.only("Celebrities born today but 40 years ago", () => {
    const date = utilities.getDate40YearsAgo();
    utilities.acceptConsentBanner();
    utilities.navigateToCelebritiesBornOnDate();
    cy.wait(2000);
    utilities.setBirthDate(date);

    // I stablished values invoking attribute and setting dates there, but "See results" button doesn't activate
    // so I couldn't click on it
    // I've tried different approaches, but didn't find a way to inspect elements within calendar as it closes
    // anytime you try to make right click on them
    // In case it worked, next steps would be like this:
    // cy.get('[data-testid="adv-search-get-results"]').invoke('attr', 'aria-disabled', 'false').click({ force: true });
    // cy.get('[data-testid="nlib-title"]').first().click()
    // cy.screenshot()
  });
});
