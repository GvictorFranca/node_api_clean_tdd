import request from 'supertest'
import app from '../config/app'

describe('Cors middleware', () => {
  test('Should enable corsn', async () => {
    app.post('/test_cors', (req, res) => {
      res.send(req.body)
    })

    await request(app)
      .get('/test_cors')
      .expect('acess-control-allow-origin', '*')
      .expect('acess-control-allow-headers', '*')
      .expect('acess-control-allow-methods', '*')
  })
})
