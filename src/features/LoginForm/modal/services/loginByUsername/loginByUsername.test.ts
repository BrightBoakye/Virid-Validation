import type { User } from 'entities/User'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { loginByEmail } from './loginByEmail'

describe('loginByUsername', () => {
  test('fulfilled login', async () => {
    const data: User = {
      id: 1,
      username: 'username',
      role: 'USER',
    }

    const thunk = new TestAsyncThunk(loginByEmail)
    thunk.api.post.mockReturnValue(
      Promise.resolve({ data })
    )
    const result = await thunk.call({
      email: 'username',
      password: '123',
    })

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(data)
    )
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toEqual('fulfilled')
    expect(result.payload).toEqual(data)
  })

  test('rejected login', async () => {
    const thunk = new TestAsyncThunk(loginByEmail)
    thunk.api.post.mockReturnValue(
      Promise.resolve({
        status: 403,
      })
    )
    const result = await thunk.call({
      email: 'username',
      password: '123',
    })

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toEqual('rejected')
    expect(result.payload).toEqual('error')
  })
})