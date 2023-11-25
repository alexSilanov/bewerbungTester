describe('open Kaiiere-Portal', function(){

    it('Coockies akzeptieren', function(){
        cy.visit('/')
        //cy.get('.cookie-box').should('be.visible')
        //cy.get('.cookie-box ._brlbs-btn-accept-all').click()
    })

    it('Karriere-Portal öffnen', function() {
        //Dropdown-Menü öffnen
        cy.get('.page-header .sticky-nav__toggle').click()
        //Prüfen, ob Menü vorhanden
        cy.get('.sticky-nav__container').should('be.visible')
        //Tab Karrierre öffnen
        cy.get('.sticky__nav-tabs a[href="#nav-tab-1"]').click()
        // Auswahl Technology
        //TODO: please add some special selector 
        cy.get('li a[href="https://salt-and-pepper.eu/karriere/technology/"]').contains('Technology').click()
        // Seite mit Jobs öffnen
        cy.get('.expanded a[href="https://salt-and-pepper.eu/karriere/technology/#jobs"]').click()
        cy.url().should('include', 'karriere/technology/')
    })

})

