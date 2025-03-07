describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');

    cy.get('h1').should('be.visible').and('contain', 'Lista de Actividades');
  })
})