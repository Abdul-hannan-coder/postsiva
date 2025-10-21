"use client";

import { useCallback, useReducer } from 'react';
import { api } from '@/lib/hooks/auth/authSimple/authApi';
import { STORAGE_KEYS } from '@/lib/hooks/auth/authSimple/authConstants';
import { DEBUG_LOGS } from '@/lib/config/appConfig';
import { initialPinterestState, pinterestReducer } from './Reducers/pinterestReducer';
import type { PinterestCreateTokenResponse } from './types/pinterestTypes';

export default function usePinterestAuth() {
  const [state, dispatch] = useReducer(pinterestReducer, initialPinterestState);

  const initiatePinterestConnect = useCallback(async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({ type: 'SET_ERROR', payload: null });
    dispatch({ type: 'SET_AUTH_URL', payload: null });
    dispatch({ type: 'SET_SUCCESS', payload: false });

    try {
      const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
      if (!token) {
        throw new Error('You must be logged in to connect Pinterest');
      }

      const res = await api.post<PinterestCreateTokenResponse>(
        '/pinterest/create-token',
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (DEBUG_LOGS) console.log('📌 Pinterest create-token response:', res.data);

      // Support both flat and nested shapes, prefer explicit fields when present
      const raw: any = res.data as any;
      const authUrl = raw?.auth_url || raw?.data?.auth_url;
      const success = (typeof raw?.success === 'boolean' ? raw.success : true) && !!authUrl;

      if (success) {
        dispatch({ type: 'SET_AUTH_URL', payload: authUrl });
        dispatch({ type: 'SET_SUCCESS', payload: true });

        const popupWidth = 640;
        const popupHeight = 780;
        const left = Math.max(0, (window.screenX || window.screenLeft || 0) + (window.outerWidth - popupWidth) / 2);
        const top = Math.max(0, (window.screenY || window.screenTop || 0) + (window.outerHeight - popupHeight) / 2);
        const features = `popup=yes,toolbar=no,menubar=no,location=yes,status=no,scrollbars=yes,resizable=yes,width=${popupWidth},height=${popupHeight},left=${left},top=${top}`;

        const popup = window.open(authUrl, 'pinterest_oauth_popup', features);
        if (!popup || popup.closed || typeof popup.closed === 'undefined') {
          if (DEBUG_LOGS) console.warn('Popup blocked; redirecting current tab to Pinterest');
          window.location.href = authUrl;
        } else {
          try { popup.focus(); } catch {}
        }
      } else {
        throw new Error(raw?.message || 'Failed to get Pinterest auth URL');
      }
    } catch (err: any) {
      const message = err?.message || 'Failed to initiate Pinterest auth';
      dispatch({ type: 'SET_ERROR', payload: message });
      if (DEBUG_LOGS) console.error('❌ Pinterest connect error:', err);
      throw err;
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, []);

  return {
    ...state,
    initiatePinterestConnect,
  };
}
