import request from 'supertest';
import { Shutdown, application } from '../index';
describe('test my application', () => {
    afterAll((done) => {
        Shutdown(done);
    });
    it('test env', async () => {
        expect(process.env.SERVER_PORT).toBe("1337")
    });
    it('route',async()=>{
        const res = await request(application).get('/')
        expect(res.status).toBe(404)
    })
    it('route true',async()=>{
        const res = await request(application).get('/main/healthcheck')
        console.log('check',res.body)
        expect(res.body.hello).toBe('world!')
    })
});
