import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('Should return 400, if no name is provide', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing Param : name')) // To equal serve para comparar valores, enquanto toBe compara ponteiros
  })
})

describe('SignUp Controller', () => {
  test('Should return 400, if no email is provide', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'any_name',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing Param : email')) // To equal serve para comparar valores, enquanto toBe compara ponteiros
  })
})