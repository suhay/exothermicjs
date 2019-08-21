import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import request from 'supertest'

import app from '@exothermic/server-express'

configure({ adapter: new Adapter() })

describe(`auth0`, () => {
  it(`logs in`, (done) => {
    request(app)
      .get(`/auth/fake`)
      .end((err, res) => {
        if (err) throw err
        expect(res.header.location).toContain(`/admin/dashboard`)
        done()
      })
  })
})
