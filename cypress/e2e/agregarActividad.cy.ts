import { e2e } from '../support/constantes'

describe('Agregar una actividad', () => {
  it('Verificar que se puede agregar una nueva actividad a la lista', () => {
    cy.visit('/');
    // cy.get(e2e.TITULO_PRINCIPAL).should('be.visible').and('contain', 'Lista de Actividades');
    // cy.get(e2e.SUBTITULO).should('be.visible').and('contain', 'Agregar Actividad');
    // cy.get(e2e.AGREGAR_CAMPO_ACTIVIDAD)
    // .should('be.visible')
    // .and('have.attr', 'value','');
    // cy.get(e2e.BOTON_AGREGAR)
    // .should('be.visible')
    // .and('has.css','background-color', 'rgb(40, 167, 69)');

    cy.validacionInicial();
    cy.contains('Agregar').click();

    // Agregar una actividad
    cy.get(e2e.AGREGAR_CAMPO_ACTIVIDAD).type('Actividad de Prueba');
    cy.get(e2e.BOTON_AGREGAR).click();

    cy.get('[data-cy="2Vwg10"]').should('have.text','Actividad de Prueba')

  })
})