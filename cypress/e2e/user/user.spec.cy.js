
import PetStore from "../../services/petStore.services"
import ValidaPetStore from "../../services/validaPetStore.services"

describe('Casos de teste sobre a rota /user da API Swagger Petstore', () => {    

    it('Criar usuario', () => {
        PetStore.criarUsuario().then( resposta => {
            ValidaPetStore.validaCriarUsuario(resposta)
        })
    })

    it('Editar usuario', () => {
        PetStore.editarUsuario().then( resposta => {
            ValidaPetStore.validaEditarUsuario(resposta)
        })
    })

    it('Deleta usuario', () => {
        PetStore.deletaUsuario().then( resposta => {
            ValidaPetStore.validaDeletaUsuario(resposta)
        })
    })

    it('Logar', () => {
        PetStore.logarUsuario().then( resposta => {
            ValidaPetStore.validaLogarUsuario(resposta)
        })
    })

    it('Logout', () => {
        PetStore.logoutUsuario().then( resposta => {
            ValidaPetStore.validaLogoutUsuario(resposta)
        })
    })
    
})