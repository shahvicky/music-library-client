import Proxy from './Proxy';

class AddMusicProxy extends Proxy {
  /**
   * The constructor for the ArtistProxy.
   *
   * @param {Object} parameters The query parameters.
   */
  constructor(parameters = {}) {
    super('api', parameters);
  }


  /**
   * Search music from the last.fm 
   */
  searchTracks(searchKey) {
    let baseURL = process.env.VUE_APP_LAST_FM_URL_ROOT
    let apiKey = process.env.VUE_APP_LAST_FM_API_KEY;
    let uri = `${baseURL}/2.0/?method=track.search&track=${searchKey}&api_key=${apiKey}&format=json`
    return this.submit('get', uri);
  }
}

export default AddMusicProxy;
