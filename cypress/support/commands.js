import 'cypress-fill-command'

Cypress.Commands.add('getAlert', (btnElement) => {
    cy.fixture('alerts&ModalsLocators.json').then((alerts) => {
        cy.get(alerts.alerts_Modals).click()
                .get(alerts.bootstrap_alerts).click()
                .get(btnElement).click()
    })
})

Cypress.Commands.add('validateAutoAlert', (alertElement, alertText) => {
    cy.get(alertElement).should('be.visible')
    const text = cy.get(alertElement).invoke('text').then((text) => {       // get the text here
        const cleanedText = text.trim()                                     // remove all white spaces
        expect(cleanedText).to.equal(alertText)                            // confirm alert text
    })
})

Cypress.Commands.add('validateNormalAlert', (alertElement, alertText) => {
    cy.get(alertElement).should('be.visible')
    const text = cy.get(alertElement).invoke('text').then((text) => {       // get the text here
        const cleanedText = text.trim().replace('×', '').trim()             // remove all white spaces
        expect(cleanedText).to.equal(alertText);                            // assert
    })
})

Cypress.Commands.add('closeAlert', (closeElement) => {
    cy.get(closeElement).click()
    cy.get(closeElement).should('not.be.visible')                           //confirm the alert is closed
})

Cypress.Commands.add('getModalsPage', () =>{
    cy.fixture('alerts&ModalsLocators.json').then((modals) =>{
        cy.get(modals.alerts_Modals).click()
            .get(modals.bootstrap_modals).click()
    })
})




