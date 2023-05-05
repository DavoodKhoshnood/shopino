describe('My First Test', () => {
  it('Click on Sign In', () => {
    cy.visit('http://localhost:5001')

    cy.contains('Add to Cart').click({force: true})
    
    cy.contains('Sign In').click()

    cy.url().should('include', '/signin')

    cy.get('#email').type('kami@gmail.com')

    cy.get('#email').should('have.value', 'kami@gmail.com')
  })
})