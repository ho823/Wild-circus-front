describe('get contact', () => {
  it('get request', () => {  
    cy.request({
      method: 'GET',
      url: 'http://localhost:7000/contact',
    }).then((response) => {
      cy.log(response.body)
      expect(response.status).to.eq(200)
      expect(response.body)
    })
  })
})