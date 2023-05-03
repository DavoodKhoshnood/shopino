describe('The Home Page', () => {
  beforeEach(() => {
    cy.exec('npm start');

    cy.request('GET', 'http://localhost:5000/api/products',{});

    it('successfully loads', () => {
      cy.visit('http://localhost:5001');
    })
  })
})