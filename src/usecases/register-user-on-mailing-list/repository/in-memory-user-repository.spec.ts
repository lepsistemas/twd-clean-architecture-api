import { UserData } from '../user-data'
import { InMemoryUserRepository } from './in-memory-user-repository'

describe('In memory user repository', () => {
  test('should return null if user is not found', async () => {
    const users: UserData[] = []
    const repository = new InMemoryUserRepository(users)
    const user = await repository.findUserByEmail('any@mail.com')
    expect(user).toBe(null)
  })

  test('should return user if exists', async () => {
    const users: UserData[] = []
    const name = 'any_name'
    const email = 'any@mail.com'
    const repository = new InMemoryUserRepository(users)
    repository.add({ name, email })
    const result = await repository.findUserByEmail('any@mail.com')
    expect(result).toStrictEqual({ name, email })
  })
})
