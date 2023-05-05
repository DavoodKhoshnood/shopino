describe('My First Test', () => {
  it('Click on Sign In', () => {

    cy.request('GET', 'http://localhost:5000/api/products',{});

    })
})