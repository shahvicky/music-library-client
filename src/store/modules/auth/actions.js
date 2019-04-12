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

export const register = async ({ commit }, payload) => {
  
  let err, response;
  [err, response] = await to(new AuthProxy().register(payload));
  if(err) {
    console.log(err);
    console.log('Registration failed!!!');
  } else if(!response.success) {
    console('Could not register');
  } else {
    commit(types.REGISTER, response);
    Vue.router.push({
      name: 'login.index',
    });
  }

};

export const login = async (context, payload) => {
  let err, user;
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
