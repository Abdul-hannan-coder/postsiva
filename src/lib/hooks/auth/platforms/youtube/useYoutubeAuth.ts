"use client";

import { useCallback, useReducer } from 'react';
import { api } from '@/lib/hooks/auth/authSimple/authApi';
import { STORAGE_KEYS } from '@/lib/hooks/auth/authSimple/authConstants';
import { DEBUG_LOGS } from '@/lib/config/appConfig';
import { initialYoutubeState, youtubeReducer } from './Reducers/youtubeReducer';
import type { YoutubeCreateTokenResponse } from './types/youtubeTypes';

export default function useYoutubeAuth() {
  const [state, dispatch] = useReducer(youtubeReducer, initialYoutubeState);

  const initiateYoutubeConnect = useCallback(async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({ type: 'SET_ERROR', payload: null });
    dispatch({ type: 'SET_AUTH_URL', payload: null });
    dispatch({ type: 'SET_SUCCESS', payload: false });

    try {
      const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
      if (!token) {
        throw new Error('You must be logged in to connect YouTube');
      }

      const res = await api.post<YoutubeCreateTokenResponse>(
        '/youtube/create-token',
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (DEBUG_LOGS) console.log('📺 YouTube create-token response:', res.data);

      const authUrl = res.data?.data?.auth_url;
      if (res.data.success && authUrl) {
        dispatch({ type: 'SET_AUTH_URL', payload: authUrl });
        dispatch({ type: 'SET_SUCCESS', payload: true });

        const popupWidth = 640;
        const popupHeight = 780;
        const left = Math.max(0, (window.screenX || window.screenLeft || 0) + (window.outerWidth - popupWidth) / 2);
        const top = Math.max(0, (window.screenY || window.screenTop || 0) + (window.outerHeight - popupHeight) / 2);
        const features = `popup=yes,toolbar=no,menubar=no,location=yes,status=no,scrollbars=yes,resizable=yes,width=${popupWidth},height=${popupHeight},left=${left},top=${top}`;

        const popup = window.open(authUrl, 'youtube_oauth_popup', features);
        if (!popup || popup.closed || typeof popup.closed === 'undefined') {
          if (DEBUG_LOGS) console.warn('Popup blocked; redirecting current tab to YouTube');
          window.location.href = authUrl;
        } else {
          try { popup.focus(); } catch {}
        }
      } else {
        throw new Error(res.data?.message || 'Failed to get YouTube auth URL');
      }
    } catch (err: any) {
      const message = err?.message || 'Failed to initiate YouTube auth';
      dispatch({ type: 'SET_ERROR', payload: message });
      if (DEBUG_LOGS) console.error('❌ YouTube connect error:', err);
      throw err;
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, []);

  return {
    ...state,
    initiateYoutubeConnect,
  };
}
