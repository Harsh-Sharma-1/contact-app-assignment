import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useContactDispatch: () => AppDispatch = useDispatch
export const useContactSelector: TypedUseSelectorHook<RootState> = useSelector