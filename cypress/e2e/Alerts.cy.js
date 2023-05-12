

describe('Alerts', () => {

  
  it('JS alert', () => {

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    cy.get("button[onclick='jsAlert()']").click()

    
    cy.on('wondow:alert', (t)=>{

        expect(t).to.contains('I am a JS Alert');
    })

    cy.get("#result").should('have.text', 'You successfully clicked an alert')
  })
})