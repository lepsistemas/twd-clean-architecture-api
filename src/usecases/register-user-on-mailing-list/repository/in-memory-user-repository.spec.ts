import { UserData } from '../user-data'
import { InMemoryUserRepository } from './in-memory-user-repository'

describe('In memory user repository', () => {
  test('should return null if user is not found', async () => {
    const users: UserData[] = []
    const repository = new InMemoryUserRepository(users)
    const user = await repository.findUserByEmail('any@mail.com')
    expect(user).toBe(null)
  })
})
