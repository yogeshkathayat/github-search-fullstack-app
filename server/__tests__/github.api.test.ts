import 'jest';
import supertest from 'supertest';
import app from '../src/config/app';
import { init as initCache } from '../src/config/cache';
const api = supertest.agent(app);

beforeAll(async () => {
  await initCache();
});

/**
 * Testing status api
 */
describe('GET /api/status', () => {
  it('should return 200 OK', () => {
    return api.get('/api/status').expect(200);
  });
});

/**
 * Testing search api
 */
describe('/api/search api', () => {
  const search1 = {
    search: 'test',
  };
  it('It should return bad request if type is missing from request', async () => {
    await api
      .post('/api/search')
      .send(search1)
      .expect(400)
      .expect('Content-Type', /application\/json/);
  });

  const search2 = {
    type: 'user',
  };
  it('It should return bad request if search is missing from request', async () => {
    await api
      .post('/api/search')
      .send(search2)
      .expect(400)
      .expect('Content-Type', /application\/json/);
  });

  const search3 = {
    type: 'wrongType',
    search: 'tradeling',
  };
  it('It should return bad request if type wrong', async () => {
    await api
      .post('/api/search')
      .send(search3)
      .expect(400)
      .expect('Content-Type', /application\/json/);
  });

  const search4 = {
    type: 'repository',
    search: 'tradeling',
  };
  it('It should return success if the type is repository', async () => {
    const response=await api
      .post('/api/search')
      .send(search4)
      .expect(200)
      .expect('Content-Type', /application\/json/);

      expect(response.text).toContain(search4.search);
    
  });

  const search5 = {
    type: 'user',
    search: 'tradeling',
  };
  it('It should return success if the type is user', async () => {
    const response=await api
      .post('/api/search')
      .send(search5)
      .expect(200)
      .expect('Content-Type', /application\/json/);

      expect(response.text).toContain(search4.search);
    
  });

});


/**
 * Testing clear-cache api
 */
describe('/api/clear-cache api', () => {
 
  it('It should return success ok', async () => {
    await api
      .get('/api/clear-cache')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });
});