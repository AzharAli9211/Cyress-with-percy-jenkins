describe('Portfolio page visual Regression', () => {
  it('page has no major changes', () => {
    cy.viewport(1550, 850) 
    cy.visit('https://tareenity.com/projects-portfolio/');
    cy.wait(60000)
    cy.percySnapshot();
  })
})