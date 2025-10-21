export interface PinterestAuthState {
  isLoading: boolean;
  error: string | null;
  authUrl: string | null;
  success: boolean;
}

// Backend can return either a flat shape or nested data depending on service consistency
export type PinterestCreateTokenResponse =
  | {
      message?: string;
      auth_url?: string;
      instructions?: string;
      success?: boolean;
    }
  | {
      success: boolean;
      message: string;
      data?: {
        auth_url?: string;
        instructions?: string;
      };
    };

export type PinterestAuthAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_AUTH_URL'; payload: string | null }
  | { type: 'SET_SUCCESS'; payload: boolean };
