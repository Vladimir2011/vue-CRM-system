/* eslint-disable no-debugger, no-console */
import firebase from 'firebase/app'

export default {
  actions: {
    async login({dispatch, commit}, {email, password}) {  // {email, password} - это payload
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (e) {
        throw e
      }
    }
  }
}
