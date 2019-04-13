/* ============
 * Actions for the add music module
 * ============
 *
 * The actions that are available on the
 * add music module.
 */

import * as types from './mutation-types';
import AddMusicProxy from './../../../proxies/AddMusicProxy';

export const searchMusic = async ({commit}, payload) => {
  new AddMusicProxy()
    .searchTracks(payload)
    .then(res => {
      if(!res) {
        console.log('No tracks for the search key');
      } else {
        // console.log(res);
        commit(types.SEARCH, res);
      }
    })
    .catch(err => {
      console.log(err);
    })
}

export default {
  searchMusic
};
