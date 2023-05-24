
import PetStore from "../../services/petStore.services"
import ValidaPetStore from "../../services/validaPetStore.services"

describe('Casos de teste sobre a rota /pet da API Swagger Petstore', () => {    

    it('Adicionar novo pet', () => {
        PetStore.criarPet().then(resposta => {
            ValidaPetStore.validaCriarPet(resposta)
        })
    })

    it('Editar pet', () => {
        PetStore.editarPet().then(resposta => {
            ValidaPetStore.validaEditarPet(resposta)
        })
    })

})