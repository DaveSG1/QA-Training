describe("PokeApi tests", () => {
  const berryIdValid = 5;
  const berryNameValid = "bluk";
  const berryNameNotValid = "fred";
  let berryFlavorNameValid = "dry";

  it("Call PokeApi using a valid berry id, and get expected response", () => {
    cy.request(`https://pokeapi.co/api/v2/berry/${berryIdValid}/`)
      .its("status")
      .should("equal", 200);

    cy.request(`https://pokeapi.co/api/v2/berry/${berryIdValid}/`)
      .its("body")
      .should("have.property", "id", berryIdValid);
  });

  it("Call PokeApi using a valid berry name, and get expected response", () => {
    cy.request(`https://pokeapi.co/api/v2/berry/${berryNameValid}/`)
      .its("status")
      .should("equal", 200);

    cy.request(`https://pokeapi.co/api/v2/berry/${berryNameValid}/`)
      .its("body")
      .should("have.property", "name", berryNameValid);
  });

  it("Call PokeApi and return an error when using an invalid berry name", () => {
    cy.request({
      url: `https://pokeapi.co/api/v2/berry/${berryNameNotValid}/`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(404);
    });
    cy.log(
      `The name ${berryNameNotValid} doesn't match with any berry Pokemon`
    );
  });

  it("Verify any berry flavor returns 200, then find the highest potency spicy berry", () => {
    let highestPotencyBerry;
    cy.request(
      `https://pokeapi.co/api/v2/berry-flavor/${berryFlavorNameValid}/`
    ).then((response) => {
      expect(response.status).to.equal(200);
    });

    cy.request(`https://pokeapi.co/api/v2/berry-flavor/spicy/`)
      .then((response) => {
        const berries = response.body.berries;

        const highestPotencyBerry = berries.reduce((max, berry) =>
          berry.potency > max.potency ? berry : max
        );

        cy.log(
          `Highest potency berry: ${highestPotencyBerry.berry.name}, Potency: ${highestPotencyBerry.potency}`
        );

        return cy.request(
          `https://pokeapi.co/api/v2/berry/${highestPotencyBerry.berry.name}/`
        );
      })
      .then((response) => {
        expect(response.status).to.equal(200);
        cy.log(`The berry is ${response.body.name}`);
      });
  });
});
