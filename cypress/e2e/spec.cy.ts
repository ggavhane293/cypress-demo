describe('home page', () => {
  it('run login page', () => {

    cy.visit('https://q-nedbankbusinesshub.nedbank.co.za')
    //cy.get("label").contains("Username")
    cy.viewport(1424, 868)
    cy.get('#username')//add user name
      .type('qatestdata')

    cy.get('#password')// add password
      .type('P@$$w0rd')

    cy.get('#login')// click on login button
      .click()

    cy.wait(10000)

    //click on apply button
    cy.get('.apply-text', { timeout: 20000 })
      .click()

    cy.get('#bankCard', { timeout: 20000 })//click on bank and transact
      .click()

    cy.get('#bankaccounts')//click on accounts
      .click()

    cy.get('.card > :nth-child(1)')
      .trigger('mouseover')

    cy.get('#nedbankCurrentAccountSelectButton')//Click on select button
      .click({ force: true })// using this for hidden element

    cy.get('#start-application-btn', { timeout: 20000 })//click on start application
      .click({ force: true })

    cy.wait(25000)

    cy.get('#next-button', { timeout: 30000 })
      .click()

    cy.get('[for="copyExistingNo"]')
      .click()

    cy.get('[for="copyExistingNoDefault"]')
      .click()

    cy.get('#copyFromExistingNext')
      .click()


    cy.get('[for="requireDepositBookNo"]')
      .click()

    cy.get('#chequeDepositBookNext')
      .click()
    cy.wait(6000)
    cy.get('#autoCompleteSearch').click()

    cy.get('#list-item li:first-child').click()

    cy.wait(5000)

    cy.get('#drpSignatoryCountContainer > .view-arrow-box > .arrow').click()

    cy.get('li[title="1"]').click()

    cy.get(':nth-child(1) > .nlsg-c-form-element__radio-group__radio__label').click()

    cy.get('#accountSignatoriesNext').click()

    cy.get('[for="requireCashDepositNo"]').click()

    cy.get('#cashDepositNext').click()

    cy.wait(5000)

    cy.get('[for="switchDeliveryYes"]').click()

    cy.get('.nlsg-c-two-buttons > [type="submit"]').click()

    cy.get('#ca-vas-button-next').click()

    cy.wait(5000)
    cy.get('#cashDepositNext').click()

    cy.get('#copyFromExistingNext').click()

    cy.get('[for="statementEmailType"]').click()

    cy.get('#emailtypeContainer > .view-arrow-box > .arrow').click()

    cy.get('li[title="RohiniG@nedbank.co.za"]').click()

    cy.get('#drpStatementFrequenciesContainer > .view-arrow-box > .arrow').click()

    cy.get('li[title="Monthly"]').click()

    cy.get('#drpStatementDaysOfMonthContainer > .view-arrow-box > .arrow').click()

    cy.get('li[title="11"]').click()

    cy.get('#statementNext').click()

    cy.get('#chequeDepositBookNext').click()

    cy.get('#accountSignatoriesNext').click()

    cy.get('#cashDepositNext').click()

    cy.wait(5000)

    cy.get('.nlsg-c-two-buttons > [type="submit"]').click()

    cy.get('#ca-vas-button-next').click()

    cy.wait(5000)

    cy.get('#cashDepositNext').click()

    cy.get('#next-button').click()





  })
})