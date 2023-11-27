import 'cypress-file-upload';

describe('Bewerbung senden', function(){

    beforeEach(function(){
        cy.fixture('user').then((user)=>{
            this.user = user
        })
    })
    it('Bewerbungsform ausfüllen', function(){
        cy.visit('https://salt-and-pepper.eu/karriere/jobs/testingenieur-software-fuer-entwicklungsprojekte-all-genders-4/')
        cy.url().should('include', 'karriere/jobs/testingenieur-software-fuer-entwicklungsprojekte-all-genders-4/')
        // Vorname eintragen
        cy.get('form #vorname').type(this.user.name)
        // Nachname eintragen
        cy.get('form #nachname').type(this.user.surname)
        // E-Mail eintragen
        cy.get('form #email').type(this.user.email)
        // Tel eintragen
        cy.get('form #telefon').type(this.user.phone)
    })

    it('Test Beschreibung', function(){
        // Validierung der Jobbeschreibung
        cy.get('.single-job__text li:nth-child(1)').should('have.text', 'Du testet Programme, Anwendungen, Softwarekomponenten oder ganze Softwarelösungen.')
    })

    it('Bewerbungsdaten hochladen', function(){
        // Hochladen CV
        cy.get('#application-uploads').attachFile('Test.pdf', {subjectType:'drag-n-drop'})
    })
    it('Bestätigung der Speicherung meiner Daten', function(){
        // Datenschutz einstimmen
        cy.get('.sticky-form__checkbox-label').click()
    })
    it('Klick auf Button "Bewerbung senden"', function(){
        // Bewerbung senden 
        cy.get('.sticky-form__submit-button')
    })
})