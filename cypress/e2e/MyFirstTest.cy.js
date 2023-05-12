

describe('My First Test', () => {


  it('verify title-positive', () => {
    //steps - launch application
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.title().should('eq', 'OrangeHRM')
  })

  it('verify title-negative', () => {
    //steps - launch application
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.title().should('eq', 'OrangeHRM123')
  })

  it('test3', () => {
    //steps
  })


})