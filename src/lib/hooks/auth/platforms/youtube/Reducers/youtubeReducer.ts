import { YoutubeAuthAction, YoutubeAuthState } from '../types/youtubeTypes'

export const initialYoutubeState: YoutubeAuthState = {
  isLoading: false,
  error: null,
  authUrl: null,
  success: false,
}

export function youtubeReducer(state: YoutubeAuthState, action: YoutubeAuthAction): YoutubeAuthState {
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
