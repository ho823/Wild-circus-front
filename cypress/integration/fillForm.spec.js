describe('run app from cypress', () => {      
    it('opens the app', () => {   
        cy.visit('http://localhost:3000') 
    })
    it('change page', () => {   
        cy.get('a').contains('Contact').click()
    })
    it('fill form', () => {   
        cy.get('input[name=name]').type('Jeanne Durand')
        cy.get('input[name=email]').type('j.durand@gmail.com')
        cy.get('textarea').type("Bonjour, j'aimerais avoir des informations concernant un spectacle qui a lieu prochainement")
    })
    it('submit form', () => {
      cy.get('form').submit()
    })
/*     it('test post request', () => {   
      cy.request({
        method: 'POST',
        url: 'http://localhost:7000/contact',
        body: {
          "name": "John Doe",
          "mail": "j.doe@gmail.com",
          "message": "Bonjour, j'aimerais avoir des informations concernant le spectacle de jeudi"
        }
      }, {timeout: 60000}).then((res) => {
        cy.log(res)
        expect(res.status).to.eq(200)
        expect(res.body.data).has.property("name", "John Doe")
        expect(res.body.data).has.property("mail", "j.doe@gmail.com")
        expect(res.body.data).has.property("message", "Bonjour, j'aimerais avoir des informations concernant le spectacle de jeudi")
      })
    }) */

    
})