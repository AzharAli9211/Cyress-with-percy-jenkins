describe('OurServices visual regression', () => {
  it('Page has no major changes', () => {
    cy.viewport(1550, 850) 
    cy.visit('https://tareenity.com/our-services/');
    cy.wait(60000)
    cy.percySnapshot();
  })
})