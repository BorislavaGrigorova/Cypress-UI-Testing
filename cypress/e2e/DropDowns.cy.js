

describe('handle dropdowns', () => {

  it.skip('dropdown with select', () => {

    cy.visit('https://www.zoho.com/commerce/free-demo.html')

    cy.get('#zcf_address_country')
      .select('Italy')
      .should('have.value', 'Italy')
  })

  it.skip('dropdown without select', () => {

    cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

    cy.get('#select2-billing_country-container').click()
    cy.get('.select2-search__field').type('Italy').type('{enter}')
    cy.get('#select2-billing_country-container').should('have.text', 'Italy')

    
  })

  it.skip('auto suggest dropdown', () => {

    cy.visit('https://www.wikipedia.org/')

    cy.get('#searchInput').type('Delhi')

    cy.get('.suggestion-title').contains('Delhi University').click()
    
  })

  it('dynamic dropdown', () => {

    cy.visit('https://www.google.com/')

    cy.get("input[name='q']").type('cypress automation')

    cy.wait(3000)

    cy.get('div,wM6W7d>span').should('have.length','11')

    cy.get('div,wM6W7d>span').each(($el,index,$list)=>{

      if($el.text()=='cypress automatiom tutotial')
      {
          cy.wrap($el).click()

      }

      cy.get('div,wM6W7d>span').should('have.value', 'cypress automatiom tutotial')
    })
    
  })

})