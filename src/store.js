import { createStore } from 'redux'
import reducers from './reducers'

const store = createStore(reducers, {playerWinCount: 0, computerWinCount: 0}, window.devToolsExtension && window.devToolsExtension())

export default store
