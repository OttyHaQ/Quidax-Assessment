
describe('Single Input Field', () => {
  it('Verify when text is entered into the input field, it is displayed correctly', () => {
    cy.fixture('formLocators.json').then((form) =>{
      cy.get(form.input_forms).click()
        .get(form.simple_form_demo).click()
        .get(form.enter_message_field).type(form.message)
        .get(form.show_message_btn).click()
        .get(form.message_display).should('have.text', form.message)
    })
  })
})

describe('Multiple Input Field', () => {
  it('Enter numerical values into both input fields and verify that the sum is calculated correctly', () => {
    cy.fixture('formLocators.json').then((form) =>{
      cy.get(form.input_forms).click()
        .get(form.simple_form_demo).click()
        .get(form.enter_A).type(form.value_A)
        .get(form.enter_B).type(form.value_B)
        .get(form.get_total_btn).click()
        .get(form.total).should('have.text', form.sum)
    })
  })
})