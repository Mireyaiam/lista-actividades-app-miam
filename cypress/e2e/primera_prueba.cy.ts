describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');

    // cy.wait(10000);
    cy.get('h1', {timeout:10000}).should('be.visible').and('contain', 'Lista de Actividades');

  })
})