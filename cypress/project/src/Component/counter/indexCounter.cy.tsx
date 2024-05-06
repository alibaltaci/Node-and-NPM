import Counter from './index'

describe('<Counter />', () => {

  beforeEach( () => {
    cy.mount(<Counter />)
  })

  // test 1
  it('Is the initial value 0 after rendering?', () => {
    // see: https://on.cypress.io/mounting-react

    // cy.mount(<Counter />) beforeEach can be used to avoid writing this line of code every time 
    
    cy.get('[data-test-id="counter"]').should('contain.text', 0)  
  })

  //  test 2
  it('Is the decrease button disabled when the count value is 0?', () => {
    cy.get('[data-test-id="counter"]').should('contain.text', 0)
    cy.get('button').eq(1).should('be.disabled')
  })

  //  test 3
  it('Does the increament button fulfill its function?', () => {
    // cy.get('button').eq(0).click()
    for( let i = 0; i < 5; i++){
      cy.get('button').eq(0).click()
    }
    cy.get('[data-test-id="counter"]').should('have.text', 5)
  })

  //  test 4
  it('Does the increment button become active when it is not 0?', () => {
    cy.get('[data-test-id="counter"]').should('have.text', 0)
    cy.get('button').eq(1).should('be.disabled')
    cy.get('button').eq(0).click()
    cy.get('button').eq(1).should('not.be.disabled')
  })

  //  test 5
  it( 'Do the decrement button and the count render correctly when an initial value assigned?', () => {
    cy.mount(<Counter initialValue={10} />)
    cy.get('[data-test-id="counter"]').should('have.text', 10)
    cy.mount(<Counter initialValue={-3}/>)
    cy.get('[data-test-id="counter"]').should('have.text', 0)
    cy.get('button').eq(1).should('be.disabled')
    cy.get('button').eq(0).click()
    cy.get('button').eq(1).should('not.be.disabled')
  })
})