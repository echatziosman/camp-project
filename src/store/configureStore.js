// Mağazayı (store) oluşturma

import { createStore } from 'redux';
import rootReducer from './rootReducer';
import { devToolsEnhancer } from 'redux-devtools-extension';

export function configureStore() {
  return createStore(rootReducer, devToolsEnhancer()); // Aynı zamanda -redux devtools'u- google chrome'a uzantı olarak ekledim
}
