


describe('Single modals', () =>{
    it('verify single modal appearance', () =>{
        cy.fixture('alerts&ModalsLocators.json').then((modals) =>{
            cy.getModalsPage()                                                  // created a custom command to navigate to the modals page.
                .get(modals.single_modal_btn).click()
                .get(modals.single_modal).should('be.visible')

        })
    })

    it('verify single modal can be canceled', () =>{
        cy.fixture('alerts&ModalsLocators.json').then((modals) =>{
            cy.getModalsPage()
                .get(modals.single_modal_btn).click()
                .get(modals.single_modal).should('be.visible')
                .get(modals.cancel_single_modal_btn).click()
                .get(modals.single_modal).should('not.be.visible')

        })
    })

    it('verify user can save changes', () =>{
        cy.fixture('alerts&ModalsLocators.json').then((modals) =>{
            cy.getModalsPage()
                .get(modals.single_modal_btn).click()
                .get(modals.single_modal).should('be.visible')
                .get(modals.single_modal_save_btn).click()
                .get(modals.single_modal).should('not.be.visible')

        })
    })
})

describe('multiple modals', () =>{
    it('verify that the user can launch multiple modals', () =>{
        cy.fixture('alerts&ModalsLocators.json').then((modals) =>{
            cy.getModalsPage()
                .get(modals.multi_modal_btn).click()
                .get(modals.first_modal).should('be.visible')
                .get(modals.multi_modal_btn2).click()
                .get(modals.second_modal).should('be.visible')
        })
    })

    it('verify that the user can close first modal', () =>{
        cy.fixture('alerts&ModalsLocators.json').then((modals) =>{
            cy.getModalsPage()
                .get(modals.multi_modal_btn).click()
                .get(modals.first_modal).should('be.visible')
                .get(modals.first_close_btn).click()
                .get(modals.first_modal).should('not.be.visible')
        })
    })

    it('verify that the user can save first modal changes', () =>{
        cy.fixture('alerts&ModalsLocators.json').then((modals) =>{
            cy.getModalsPage()
                .get(modals.multi_modal_btn).click()
                .get(modals.first_modal).should('be.visible')
                .get(modals.first_save_btn).click()
                .get(modals.first_modal).should('not.be.visible')
        })
    })

    it('verify that the user can close second modal', () =>{
        cy.fixture('alerts&ModalsLocators.json').then((modals) =>{
            cy.getModalsPage()
                .get(modals.multi_modal_btn).click()
                .get(modals.multi_modal_btn2).click()
                .get(modals.second_modal).should('be.visible')
                .get(modals.second_close_btn).click()
                .get(modals.second_modal).should('not.be.visible')
        })
    })

    it('verify that the user can save first modal changes', () =>{
        cy.fixture('alerts&ModalsLocators.json').then((modals) =>{
            cy.getModalsPage()
                .get(modals.multi_modal_btn).click()
                .get(modals.multi_modal_btn2).click()
                .get(modals.second_modal).should('be.visible')
                .get(modals.second_save_btn).click()
                .get(modals.second_modal).should('not.be.visible')
        })
    })
})