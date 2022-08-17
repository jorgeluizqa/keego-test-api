describe("Teste api trello", () => {
    it('Testando o status code e o campo name', () => {
        cy.request({
            method: 'GET',
            url: "https://api.trello.com/1/actions/592f11060f95a3d3d46a987a",
            failOnStatusCode: false
        }).as('response')
        cy.get('@response').should((response) => {
            
            expect(response.status).to.equal(200)
            expect(response.body.data.list.name).to.equal("Professional")
           

        })

    })

})



