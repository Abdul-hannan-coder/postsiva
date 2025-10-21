import { InstagramAuthAction, InstagramAuthState } from '../types/instagramTypes'

export const initialInstagramState: InstagramAuthState = {
  isLoading: false,
  error: null,
  authUrl: null,
  success: false,
}

export function instagramReducer(state: InstagramAuthState, action: InstagramAuthAction): InstagramAuthState {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload }
    case 'SET_ERROR':
      return { ...state, error: action.payload }
    case 'SET_AUTH_URL':
      return { ...state, authUrl: action.payload }
    case 'SET_SUCCESS':
      return { ...state, success: action.payload }
    default:
      return state
  }
}
