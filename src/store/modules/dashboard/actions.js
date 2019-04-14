/* ============
 * Actions for the dashboard module
 * ============
 *
 * The actions that are available on the
 * dashboard module.
 */

import * as types from './mutation-types';
import { to } from '../../../utils/global_functions';
import DashBoardProxy from '../../../proxies/DashboardProxy';

const getTracks = async ({commit}) => {
  let err, tracks;
  [err, tracks] = await to(new DashBoardProxy().getTracks())
  if(err) {
    console.log(err);
  } else if(!tracks) {
    console.log('No tracks in user library');
  } else {
    commit(types.LIBRARY, tracks);
  }
}

 export default {
   getTracks
 }