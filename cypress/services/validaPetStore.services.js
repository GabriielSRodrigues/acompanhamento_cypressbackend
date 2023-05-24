
export default class ValidaPetStore {

//----------------------------- PET -----------------------------
    static validaCriarPet(resposta){
        expect(resposta.status).to.be.eq(200)
        expect(resposta.statusText).to.be.eq('OK')
    }

    static validaEditarPet(resposta){
        expect(resposta.status).to.be.eq(200)     
        expect(resposta.body).to.haveOwnProperty('id')
    }

//---------------------------- STORE ----------------------------
    static validaPedidoPet(resposta){
        expect(resposta.status).to.be.eq(200)
        expect(resposta.statusText).to.be.eq('OK')
        expect(resposta.body).to.haveOwnProperty('petId')
    }

    static validaInventarioMascote(resposta){
        expect(resposta.status).to.be.eq(200)
        expect(resposta.body).to.haveOwnProperty('sold')
        expect(resposta.body).to.haveOwnProperty('pending')
        cy.log(JSON.stringify(resposta));
    }

    static validaDeleteMascote(resposta) {
        expect(resposta.status).to.be.eq(404)
        expect(resposta.body).to.haveOwnProperty('message')
        expect(resposta.body.message).to.be.eq('Order Not Found')
    }

//----------------------------- USER ----------------------------
    static validaCriarUsuario(resposta){
        expect(resposta.status).to.be.eq(200)
        expect(resposta.statusText).to.be.eq('OK')
        expect(resposta.body.message).to.be.a('string')
        expect(resposta.body).to.haveOwnProperty('message')
    }

    static validaDeletaUsuario(resposta){
        expect(resposta.status).to.be.eq(200)
        expect(resposta.body).to.haveOwnProperty('message')
        expect(resposta.body.message).to.be.eq('string')
    }

    static validaLogarUsuario(resposta) {
        expect(resposta.status).to.be.eq(200)
        expect(resposta.body).to.haveOwnProperty('type')
        expect(resposta.body.type).to.be.eq('unknown')
    }

    static validaLogoutUsuario(resposta) {
        expect(resposta.status).to.be.eq(200)
        expect(resposta.statusText).to.be.eq('OK')
        expect(resposta.body).to.haveOwnProperty('message')
        expect(resposta.body.message).to.be.eq('ok')
    }

    static validaEditarUsuario(resposta){
        expect(resposta.status).to.be.eq(200)
        expect(resposta.body).to.haveOwnProperty('type')
        expect(resposta.body.type).to.be.eq('unknown')
        expect(resposta.body).to.haveOwnProperty('message')
    }

}