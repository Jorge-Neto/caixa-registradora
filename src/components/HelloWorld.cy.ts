import HelloWorld from "./HelloWorld.vue"

describe("<HelloWorld />", () => {
    it("renders", () => {
        // see: https://on.cypress.io/mounting-vue
        cy.mount(HelloWorld)
    })

    it("HelloWorld count should default to 0", () => {
        cy.mount(HelloWorld)
        cy.get("v-btn").should("have.text", "count is 0")
    })
})
