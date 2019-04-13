/* ============
 * Mutations for the add music module
 * ============
 *
 * The mutations that are available on the
 * add music module.
 */
import {SEARCH} from './mutation-types';

/* eslint-disable no-param-reassign */
export default {
  [SEARCH](state, response) {
    state.searchTrackResults = response.results.trackmatches.track;
  }
};
