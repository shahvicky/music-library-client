/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */

import Vue from 'vue';
import store from '@/store';
import * as types from './mutation-types';
import AuthProxy from './../../../proxies/AuthProxy';
import { to } from './../../../utils/global_functions';

export const check = ({ commit }) => {
  commit(types.CHECK);
};

export const register = ({ commit }) => {
  /*
   * Normally you would use a proxy to register the user:
   *
   * new Proxy()
   *  .register(payload)
   *  .then((response) => {
   *    commit(types.REGISTER, response);
   *  })
   *  .catch(() => {
   *    console.log('Request failed...');
   *  });
   */


  commit(types.LOGIN, 'RandomGeneratedToken');
  Vue.router.push({
    name: 'home.index',
  });
};

export const login = async (context, payload) => {
  /*
   * Normally you would use a proxy to log the user in:
   *
   * new Proxy()
   *  .login(payload)
   *  .then((response) => {
   *    commit(types.LOGIN, response);
   *    store.dispatch('account/find');
   *    Vue.router.push({
   *      name: 'home.index',
   *    });
   *  })
   *  .catch(() => {
   *    console.log('Request failed...');
   *  });
   */
  let err,
    user;
  [err, user] = await to(new AuthProxy().login(payload));
  if (err) {
    console.log(err);
    console.log('Request failed!!!');
  } else if (!user) {
    console.log('No user');
  } else {
    context.commit(types.LOGIN, user);
    Vue.router.push({
      name: 'home.index',
    });
  }

  // commit(types.LOGIN, 'RandomGeneratedToken');
  // store.dispatch('account/find');
  // Vue.router.push({
  //   name: 'home.index',
  // });
};

export const logout = ({ commit }) => {
  commit(types.LOGOUT);
  Vue.router.push({
    name: 'login.index',
  });
};

export default {
  check,
  register,
  login,
  logout,
};
