const {RESTDataSource} = require('apollo-datasource-rest');

class TrackAPI extends RESTDataSource {
    2
      constructor() {
    3
        super();
    4
        this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
    5
      }

      getTracksForHome() {
        return this.get('tracks');
      }

      getAuthor(authorId) {
        return this.get(`author/${authorId}`);
      }
    6
    }

    module.exports = TrackAPI;