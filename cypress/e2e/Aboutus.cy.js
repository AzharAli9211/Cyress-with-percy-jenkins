describe('Aboutus Visual regression', () => {
  it('Page has no changes', () => {
    cy.viewport(1550, 850) 
    cy.visit('https://tareenity.com/about-us/');
    cy.wait(60000)
    cy.percySnapshot();
  })
})