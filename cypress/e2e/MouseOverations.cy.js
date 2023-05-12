import '@4tw/cypress-drag-drop'

describe('Mouse Operations', () => {

  it('MouseHover', () => {

    cy.visit('https://demo.opencart.com')

    cy.get('li:nth-of-type(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > li:nth-of-type(2) > .nav-link').should('not.be.visible')

    cy.get('li:nth-of-type(1) > .dropdown-toggle.nav-link').trigger('mouseover').click()

    cy.get('li:nth-of-type(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > li:nth-of-type(2) > .nav-link').should('be.visible')

  })

  it('Right Click', () => {

    cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')

    //approach1
    //cy.get('.context-menu-one').trigger('contextmenu')

    //cy.get('.context-menu-icon-copy > span').should('be.visible')

    //approach2
    cy.get('.context-menu-one').rightclick()
    cy.get('.context-menu-icon-copy > span').should('be.visible')


  })

  it('Drag and drop using plugin', () => {

    cy.visit('http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

    cy.get('#box6').drag('#box106',{force: true});//if an element is invisible we can add {force: true}


  })

  it.only('Scrolling Page', () => {

    cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')

    cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').scrollIntoView({duration: 2000})

    cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').should('be.visible');

    cy.get(':nth-child(1) > tbody > :nth-child(4) > :nth-child(1) > img').scrollIntoView({duration: 2000})

    cy.get(':nth-child(1) > tbody > :nth-child(4) > :nth-child(1) > img').should('be.visible');

    cy.get('#footer').scrollIntoView();
  })

})