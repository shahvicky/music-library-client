/* ============
 * Mutations for the add music module
 * ============
 *
 * The mutations that are available on the
 * add music module.
 */
import {SEARCH, TRACK} from './mutation-types';

/* eslint-disable no-param-reassign */
export default {
  [SEARCH](state, response) {
    state.searchTrackResults = response.data.results.trackmatches.track;
  },
  [TRACK](state, response) {
    state.trackInfo = response;
    console.log(state.trackInfo);
  }
};
