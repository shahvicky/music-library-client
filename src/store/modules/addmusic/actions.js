/* ============
 * Actions for the add music module
 * ============
 *
 * The actions that are available on the
 * add music module.
 */

import * as types from './mutation-types';
import AddMusicProxy from './../../../proxies/AddMusicProxy';

export const searchMusic = async ({commit}, {searchKey}) => {
  new AddMusicProxy()
    .searchTracks(searchKey)
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
export const addToAcc = async ({commit}, payload) => {
  new AddMusicProxy()
    .addTrack(payload)
    .then(res => {
      if(!res) {
        console.log('Track record not present');
      } else {
        commit(types.TRACK, res);
      }
    })
    .catch(err => {
      console.log(err);
    })
}

export default {
  searchMusic,
  addToAcc
};
