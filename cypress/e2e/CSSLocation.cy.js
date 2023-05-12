

describe('CSSLocation', () => {


  it('csslocators', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com')
    cy.get("[name='username']").type("T-Shirt")
    cy.get("[type='submit']").click()
    cy.get(".oxd-text--span").contains("Required")

  })


})