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
  //TODO change this calls to backend
  searchTracks(searchKey) {
    return this.submit('get', `${this.endpoint}/addmusic/search/${searchKey}`);
  }

  /**
   * Get track info
   */
  //TODO change this call to backend
  addTrack(trackId) {
    return this.submit('get', `${this.endpoint}/addmusic/addToLib/${trackId}`);
  }
}

export default AddMusicProxy;
