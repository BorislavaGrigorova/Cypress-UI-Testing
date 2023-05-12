
describe('Assertion Demo', () => {


  it('Implicit assertions', () => {

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    //should and

    //cy.url().should('include','orangehrmlive.com')
    //cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //cy.url().should('contain','orangehrm')

    //cy.url().should('include','orangehrmlive.com')
            //.should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            //.should('contain','orangehrm')

    cy.url().should('include','orangehrmlive.com')
            .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .and('contain','orangehrm')
            .and('not.contain','greenhrm')
    
    cy.title().should('include', 'Orange')
              .and('eq','OrangeHRM')
              .and('contain','HRM')

    cy.get('.orangehrm-login-branding > img').should('be.visible')
              .and('be.exist')

    cy.xpath("//a").should('have.length','5')

    cy.get("[name='username']").type("Admin") 
    cy.get("[name='username']").should('have.value','Admin')

  })

  it('Explicit assertions', () => {

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    //expect assert
    cy.get("[name='username']").type("Admin")
    cy.get("[name='password']").type("admin123")
    cy.get(".oxd-button").click()

    let expName="Kajal Karale";

    cy.get(".oxd-userdropdown-name").then( (x)=>{ 

              let actName=x.text() 

              //BDD style
              expect(actName).to.equal(expName)

              //TDD style
              assert.equal(actName,expName)
    })


})

})