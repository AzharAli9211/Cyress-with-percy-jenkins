describe('hompepage visual regression', () => {
  it('page has no major changes', () => {
    cy.viewport(1550, 850) 
    cy.visit('https://tareenity.com/');
    cy.wait(60000)
    cy.percySnapshot();
  })
})