describe('Job als Tetsingenieur finden', function(){

    before(function(){
        cy.fixture('job').then((job)=>{
            this.job=job;
        })
    }
    )

    it('Nach Stichwort suchen', function(){
        cy.visit('https://salt-and-pepper.eu/karriere/technology/')
        // Suchen Job als Testingenieur
        cy.get('.jobs__search-form input[name="jobs-term"]').click().type(`${this.job.jobTitle}{enter}`)
        // Suchen Job in Region: Hamburg
        cy.get('[data-jobs-filter-key="jobRegion"]').click()
        cy.get('.dropdown__option').contains('Hamburg').click()
        // Öffnen Job als TEstingenieur
        cy.get('li a[href="https://salt-and-pepper.eu/karriere/jobs/testingenieur-software-fuer-entwicklungsprojekte-all-genders-4/"]').click()
        // Prüfen, ob Jobtitel stimmt
        cy.get('.single-job__title').contains('Testingenieur Software für Entwicklungsprojekte, all genders').click()
    })
})