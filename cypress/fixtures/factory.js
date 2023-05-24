const { faker } = require('@faker-js/faker');

export default class Factory {

    static gerarUser(){
        return {
            "id": 0,
            "username": faker.internet.userName(),
            "firstName": faker.person.firstName(),
            "lastName": faker.person.lastName(),
            "email": faker.internet.email(),
            "password": faker.internet.password(),
            "phone": faker.phone.number(),
            "userStatus": 0
        }
    }

    
}