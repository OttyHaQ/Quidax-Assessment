
describe('Select List Demo', () => {
    it('Select an option from the dropdown list and verify that it is displayed correctly', () => {
        cy.fixture('dropdownLocators.json').then((dropdown) => {
            cy.get(dropdown.input_forms).click()
                .get(dropdown.select_dropdown_list).click()
                .get(dropdown.select_day_dropdown).select(dropdown.day)
                .get(dropdown.day_selected).should('have.text', dropdown.display_day_selected)
        })
    })
})

describe('Multi Select List Demo', () => {
    
    it('Select multiple options from the dropdown list and verify that the first selected option is displayed correctly', () => {
        cy.fixture('dropdownLocators.json').then((dropdown) => {
            cy.get(dropdown.input_forms).click()
                .get(dropdown.select_dropdown_list).click()
                .get(dropdown.multi_select_field).select([dropdown.city_1, dropdown.city_2, dropdown.city_3], { multiple: true })          // select multiple options
                .get(dropdown.first_selected_btn).click()
                .get(dropdown.get_selected).should('be.visible').should('have.text', dropdown.first_selected)
        })
    })
    
    
    it('Select multiple options from the dropdown list and verify that they are displayed correctly', () => {
        cy.fixture('dropdownLocators.json').then((dropdown) => {
            cy.get(dropdown.input_forms).click()
                .get(dropdown.select_dropdown_list).click()
                .get(dropdown.multi_select_field).select([dropdown.city_1, dropdown.city_2, dropdown.city_3], { multiple: true })  // select multiple options
                .get(dropdown.get_all_selected).click()
                .get(dropdown.get_selected).invoke('text')
                .get(dropdown.get_selected).should('have.text', dropdown.options_selected)
        })
    })

})