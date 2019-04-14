/* ============
 * Mutations for the dashboard module
 * ============
 *
 * The mutations that are available on the
 * dashboard module.
 */

import Vue from 'vue';
import {
  LIBRARY
} from './mutation-types';

 export default {
  [LIBRARY](state, response) {
    state.tracks = response.data;
  }
 }