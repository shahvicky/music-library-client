import Proxy from './Proxy';

class DashBoardProxy extends Proxy {
  /**
   * The constructor for the DashBoardProxy.
   *
   * @param {Object} parameters The query parameters.
   */
  constructor(parameters = {}) {
    super('api', parameters);
  }

/**
 * Get the tracks to display when the user logs in
 */
  getTracks() {
    return this.submit('get', `${this.endpoint}/dashboard/tracks`);
  }

}

export default DashBoardProxy;
