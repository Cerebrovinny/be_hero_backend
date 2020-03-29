const request = require('express');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async() => {
        await connection.destroy();
    });

    it('should be able to create a new ONG',async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "APAD234",
            email: "contat@xample.com",
            whatsapp: "470000000",
            city: "Botucatu",
            uf: "SP"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});