describe('Job als Tetsingenieur finden', function(){

    beforeEach(function(){
        Cypress.on('uncaught:exception', (err) => {
            // returning false here prevents Cypress from
            // failing the test
            console.log('Cypress detected uncaught exception: ', err);
            return false;
          });

        cy.fixture('job').then((job)=>{
            this.job=job;
        })
    }
    )

    it('Nach Stichwort suchen', function(){
        // Job Portal öffnen
        cy.visit('https://salt-and-pepper.eu/karriere/technology/')
        // Url prüfen
        cy.url().should('include', 'karriere/technology/')
        // Suchen Job als Testingenieur
        cy.get('.jobs__search-form input[name="jobs-term"]').type(`${this.job.jobTitle}{enter}`)
        // Suchen Job in Region: Hamburg
        cy.get('[data-jobs-filter-key="jobRegion"]').click()
        cy.get('.dropdown__option').contains('Hamburg').click()
        // Öffnen Job als Testingenieur
        cy.get('li a[href="https://salt-and-pepper.eu/karriere/jobs/testingenieur-software-fuer-entwicklungsprojekte-all-genders-4/"]').click()
        // Prüfen, ob Jobtitel stimmt
        cy.url().should('include', 'karriere/jobs/testingenieur-software-fuer-entwicklungsprojekte-all-genders-4/')
    })
})