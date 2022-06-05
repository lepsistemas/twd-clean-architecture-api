import { UserRepository } from '../../ports/user-repository'
import { UserData } from '../user-data'

export class InMemoryUserRepository implements UserRepository {
  private users: UserData[] = []

  constructor (users: UserData[]) {
    this.users = users
  }

  async add (user: UserData): Promise<void> {
    this.users.push(user)
  }

  async findUserByEmail (email: string): Promise<UserData> {
    const user = this.users.find(user => user.email === email)
    if (!user) {
      return null
    }
    return user
  }

  async findAllUsers (): Promise<UserData> {
    throw new Error('Method not implemented.')
  }

  async exists (user: UserData): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
}
