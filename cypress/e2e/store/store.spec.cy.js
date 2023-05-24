
import PetStore from "../../services/petStore.services"
import ValidaPetStore from "../../services/validaPetStore.services"


describe('Casos de teste sobre a rota /store da API Swagger Petstore', () => {    

    it('Fazer pedido de pet', () => {
        PetStore.pedidoPet().then( resposta => {
            ValidaPetStore.validaPedidoPet(resposta)
        })
    })


    it('Fazer pedido de pet', () => {
        PetStore.inventarioMascote().then( resposta => {
            ValidaPetStore.validaInventarioMascote(resposta)
        })
    })

    it('Deletar pet do store com erro 404', () => {
        PetStore.deleteMascote().then( resposta => {
            ValidaPetStore.validaDeleteMascote(resposta)
        })
    })

})