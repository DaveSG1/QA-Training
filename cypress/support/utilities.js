export class Utilities {
  elements = {
    getActorDetailPageTitle: () => cy.get('[data-testid="hero__primary-text"]'),
    getDetailPageTitle: () =>
      cy.get("h1.ipc-title__text.chart-layout-specific-title-text"),
  };

  acceptConsentBanner() {
    cy.get('[data-testid="consent-banner"]').then(($banner) => {
      if ($banner.is(":visible")) {
        cy.get('[data-testid="accept-button"]').click();
      }
    });
  }

  actorPageChecker(name) {
    cy.contains(name).click();
  }

  actorUpcomingProjects() {
    cy.get('[data-testid="accordion-item-actor-upcoming-projects"]').click();
  }

  searchForActor(actor) {
    cy.get('input[placeholder="Search IMDb"]').type(actor).type("{enter}");
  }

  navigateToTopBoxOffice() {
    cy.get("#imdbHeader-navDrawerOpen").click();
    cy.contains("span.ipc-list-item__text", "Top Box Office")
      .should("have.text", "Top Box Office")
      .click();
  }

  clickResultInTopBoxPage(result) {
    cy.get(".ipc-title-link-wrapper")
      .eq(result - 1)
      .click();
  }

  openRatingsPage() {
    cy.get(
      '.sc-ef98a327-3 > .sc-3a4309f8-0 > .sc-3a4309f8-1 > [data-testid="hero-rating-bar__aggregate-rating"] > .ipc-btn > .ipc-btn__text > .sc-acdbf0f3-3 > .sc-c4ffe080-0 > [data-testid="hero-rating-bar__aggregate-rating__score"] > .sc-c4ffe080-1'
    ).click();
  }

  rateMovie(stars) {
    cy.get('[data-testid="rating-button__user-rating__unrated"]').click();
    cy.get(`[aria-label="Rate ${stars}"]`).click({ force: true });
    cy.get("button.ipc-rating-prompt__rate-button")
      .should("have.attr", "aria-disabled", "false")
      .click();
  }

  navigateToTop250TVShows() {
    cy.get("#imdbHeader-navDrawerOpen").click();
    cy.contains("span.ipc-list-item__text", "Top 250 TV Shows")
      .should("have.text", "Top 250 TV Shows")
      .click();
  }

  verifyTop250TVShowsPage() {
    cy.get("h1.ipc-title__text.chart-layout-specific-title-text").should(
      "have.text",
      "Top 250 TV Shows"
    );
  }

  selectShowAndViewPhotos(showName) {
    cy.contains(".ipc-title__text", showName).click();
    cy.contains(".ipc-title__text", "Photos").click();
  }

  openImageGallery() {
    cy.get('[data-testid="mv-gallery-button"]').click();
    cy.get('[data-testid="image-chip-dropdown-test-id"]').click();
  }

  selectActorInGallery(actorName) {
    cy.get('[data-testid="select-dropdown-test-id"]')
      .first()
      .then(($select) => {
        cy.wrap($select)
          .find("option")
          .contains(actorName)
          .then(($option) => {
            cy.wrap($select).select($option.val());
          });
      });
  }

  closeGalleryPrompt() {
    cy.get('[aria-label="Close Prompt"]').click();
  }

  clickOnImage(index) {
    cy.get('[data-testid="sub-section-images"]').find("a").eq(index).click();
  }

  navigateToCelebritiesBornOnDate() {
    cy.get("#imdbHeader-navDrawerOpen").click();
    cy.get(
      '[href="/feature/bornondate/?ref_=nv_cel_brn"] > .ipc-list-item__text'
    ).click();
  }

  setBirthday(date) {
    cy.get('[data-testid^="selected-input-chip-list-birthday-"]').click();
    cy.get(".sc-6addea7c-0").contains("Birthday").click();
    cy.get('[aria-label="Enter birthday"]').type(date).type("{enter}");
  }

  clickOnGetResults() {
    cy.get('[data-testid="adv-search-get-results"]').click();
  }

  selectCelebrity(index) {
    cy.get(".ipc-title__text").eq(index).click();
  }

  setBirthDate(date) {
    cy.get('[data-testid^="selected-input-chip-list-birthday-"]').click();
    cy.get(".sc-6addea7c-0").contains("Birth date").click();
    cy.get('input[aria-label="Enter birth date from"]').invoke(
      "attr",
      "value",
      date
    );
    cy.get('input[aria-label="Enter birth date to"]').invoke(
      "attr",
      "value",
      date
    );
  }

  getYesterdayDate() {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const month = String(yesterday.getMonth() + 1).padStart(2, "0");
    const day = String(yesterday.getDate()).padStart(2, "0");
    return `${month}-${day}`;
  }

  getDate40YearsAgo() {
    const currentYear = new Date().getFullYear();
    const yearDeduct40 = currentYear - 40;

    const month = new Date().getMonth() + 1;
    const formattedMonth = String(month).padStart(2, "0");

    const day = new Date().getDate();
    const formattedDay = String(day).padStart(2, "0");

    return `${yearDeduct40}-${formattedMonth}-${formattedDay}`;
  }
}
