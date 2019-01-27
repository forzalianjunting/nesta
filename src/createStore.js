import produce from 'immer'
import types from './utils/types'

export default function createStore(initState) {
  let currentState = initState
  const listeners = []

  function getState() {
    return currentState
  }

  function subscribe(listener) {
    if (!types.isFunction(listener)) {
      throw new Error('Expected listener to be a function.')
    }

    let isSubscribed = true

    listeners.push(listener)

    return function unsubscribe() {
      if (!isSubscribed) {
        return
      }

      isSubscribed = false
      const index = listeners.indexOf(listener)
      listeners.splice(index, 1)
    }
  }

  function put(action) {
    if (!types.isFunction(action)) {
      throw new Error('Expected action to be a function.')
    }

    currentState = produce(currentState, action)
    listeners.forEach(listener => listener())
  }

  return {
    getState,
    subscribe,
    put,
  }
}
