import { EmailValidatorAdapter } from './email-validator'

describe('Emaill Validator, Adapter', () => {
  test('Should return false if Validator return false', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('invalid_email@mail.com')
    expect(isValid).toBe(false)
  })
})
