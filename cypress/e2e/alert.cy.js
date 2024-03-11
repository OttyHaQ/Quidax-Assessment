

describe('bootstrap alerts', () => {
    it('Validate autoclosable success message', () => {                                     // steps repeated for all autoclosable alerts
        cy.fixture('alerts&ModalsLocators.json').then((alerts) => {                             // call the locator object and put in a function
            cy.getAlert(alerts.auto_success_btn)                                                // click the alert button using a custom command
                .validateAutoAlert(alerts.auto_success_alert, alerts.auto_success_text)         // validate that the alert is visible and displays the correct text using a custom command
                .wait(6000)                                                                     //  wait for the alert to disappear
                .get(alerts.auto_success_alert).should('not.be.visible')                        //  validate that the alert has disappeared
        })
    })


    it('Validate normal success message', () => {                                               // steps repeated for all normal alerts
        cy.fixture('alerts&ModalsLocators.json').then((alerts) => {                             // call the locator object put in a function
            cy.getAlert(alerts.normal_success_btn)                                              // click the alert button using a custom command
                .validateNormalAlert(alerts.normal_success_alert, alerts.normal_success_text)    // validate that the alert is visible and displays the correct text using a custom command
                .closeAlert(alerts.close_normal_success)                                       // close the alert and validate it is closed
         })
    })

    it('Validate autoclosable warning message', () => {
        cy.fixture('alerts&ModalsLocators.json').then((alerts) => {                     
            cy.getAlert(alerts.auto_warning_btn)                                        
                .validateAutoAlert(alerts.auto_warning_alert, alerts.auto_warning_text)
                .wait(4000)                                                                     
                .get(alerts.auto_warning_alert).should('not.be.visible')     
        })
    })


    it('Validate normal warning message', () => {
        cy.fixture('alerts&ModalsLocators.json').then((alerts) => {                             
            cy.getAlert(alerts.normal_warning_btn)                                              
                .validateNormalAlert(alerts.normal_warning_alert, alerts.normal_warning_text)    
                .closeAlert(alerts.close_normal_warning)                                       
         })
    })


    it('Validate autoclosable danger message', () => {
        cy.fixture('alerts&ModalsLocators.json').then((alerts) => {                     
            cy.getAlert(alerts.auto_danger_btn)                                        
                .validateAutoAlert(alerts.auto_danger_alert, alerts.auto_danger_text) 
                .wait(6000)                                                                     
                .get(alerts.auto_danger_alert).should('not.be.visible')     
        })   
        
    })


    it('Validate normal danger message', () => {
        cy.fixture('alerts&ModalsLocators.json').then((alerts) => {                             
            cy.getAlert(alerts.normal_danger_btn)                                              
                .validateNormalAlert(alerts.normal_danger_alert, alerts.normal_danger_text)    
                .closeAlert(alerts.close_normal_danger)                                       
         })
    })

    it('Validate autoclosable info message', () => {
        cy.fixture('alerts&ModalsLocators.json').then((alerts) => {                     
            cy.getAlert(alerts.auto_info_btn)                                        
                .validateAutoAlert(alerts.auto_info_alert, alerts.auto_info_text)
                .wait(7000)                                                                     
                .get(alerts.auto_info_alert).should('not.be.visible')    
        })
    })


    it('Validate normal info message', () => {
        cy.fixture('alerts&ModalsLocators.json').then((alerts) => {                             
            cy.getAlert(alerts.normal_info_btn)                                              
                .validateNormalAlert(alerts.normal_info_alert, alerts.normal_info_text)    
                .closeAlert(alerts.close_normal_info)                                       
         })
    })
})