import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState } from 'store/reducers/index'

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector
