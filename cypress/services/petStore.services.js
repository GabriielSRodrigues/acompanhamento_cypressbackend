import Factory from "../fixtures/factory"

const URL_PET   = '/pet'
const URL_STORE = '/store'
const URL_USER  = '/user'

export default class PetStore {

    static pedidoPet(){
        return cy.request({
            method: 'POST',
            url: '/store/order',
            failOnStatusCode: false,
            body: {
                "id": 0,
                "petId": 0,
                "quantity": 0,
                "shipDate": "2023-05-23T14:39:06.843Z",
                "status": "placed",
                "complete": true
            }
        })
    }

    static criarPet(){
        return cy.request({
            method: 'POST',
            url: '/pet',
            failOnStatusCode: false,
            body: {
                "id": 5,
                "category": {
                  "id": 0,
                  "name": "string"
                },
                "name": "doggie",
                "photoUrls": [
                  "string"
                ],
                "tags": [
                  {
                    "id": 0,
                    "name": "string"
                  }
                ],
                "status": "available"
            }
        })
    }

    static criarUsuario(){
        let usuario = Factory.gerarUser()

        return cy.request({
            method: 'POST',
            url: '/user',
            failOnStatusCode: false,
            body: usuario
        })
    }

    static inventarioMascote(){
        return cy.petStore('GET', '/store/inventory')
    }

    static editarPet(){
        return cy.request({
            method: 'PUT',
            url: '/pet',
            failOnStatusCode: false,
            body: {
                "id": 0,
                "category": {
                  "id": 0,
                  "name": "string"
                },
                "name": "doggie",
                "photoUrls": [
                  "string"
                ],
                "tags": [
                  {
                    "id": 0,
                    "name": "string"
                  }
                ],
                "status": "available"
            }
        })
    }

    static deleteMascote(){
        return cy.request({
            method: 'DELETE',
            url: '/store/order/5',
            failOnStatusCode: false,
            body: null
        })
    }

    static deletaUsuario(){
        return cy.request({
            method: 'DELETE',
            url: '/user/string',
            failOnStatusCode: false,
            body: null
        })
    }

    static logarUsuario(){
        return cy.request({
            method: 'GET',
            url: '/user/login',
            failOnStatusCode: false,
            body: {
                "email": "string",
                "password": "string"
            }
        })
    }

    static logoutUsuario(){
        return cy.request({
            method: 'GET',
            url: '/user/logout',
            failOnStatusCode: false,
            body: null
        })
    }

    static editarUsuario(){
        return cy.request({
            method: 'PUT',
            url: '/user/string',
            failOnStatusCode: false,
            body: {
                "id": 0,
                "username": "string",
                "firstName": "string",
                "lastName": "string",
                "email": "string",
                "password": "string",
                "phone": "string",
                "userStatus": 0
            }
        })
    }

}
