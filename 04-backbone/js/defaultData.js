define([
  'model/People',
  'model/Movie',
  'collection/Movies',
], function (People, MovieModel, MovieCollection) {

  var DATA_DEFAULT_KEY = 'data-default-load';
  
  /**
   * mark default data load in local storage
   */ 
  function markDefaultLoad() {
     window.localStorage.setItem(DATA_DEFAULT_KEY, true);
  }

  return {
    
    /**
     * Retrun true if default load already load
     * @return {boolean}
     */ 
    isDefaultLoad: function() {
      return window.localStorage.getItem(DATA_DEFAULT_KEY) == 'true';
    },
    
    /**
     * Create default movies data
     * and save into localstorage
     * @param {MovieCollection} movieCollection
     */ 
    makeData: function (movieCollection) {
    
      /* INCEPTION */
      
      // Create director
      var christopherNolan = new People({
        firstName: 'Christopher',
        lastName: 'Nolan',
        role: 'Director'
      });
      
      var inception = new MovieModel({
        name: 'Inception',
        year: '2010',
        gener: 'Sci-Fi',
        description: 'A thief who steals corporate secrets through use of dream-sharing technology is ' 
          + 'given the inverse task of planting an idea into the mind of a CEO.',
        plot: 'http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX214_AL_.jpg',
        image: 'http://ia.media-imdb.com/images/M/MV5BMTY3MzMzMDgyMF5BMl5BanBnXkFtZTcwMzY0OTk1Mw@@._V1__SX640_SY720_.jpg',
        ranking: 7,
        director: christopherNolan,
      });
  
      /* LORD OF WAR */
      
      var andrewNiccol = new People({
        firstName: 'Andrew',
        lastName: 'Niccol',
        role: 'Director'
      });
      
      var lorOfWar = new MovieModel({
        name: 'Lord of War',
        year: '2005',
        gener: 'Thriller',
        description: 'An arms dealer confronts the morality of his work as he is being chased ' 
          + 'by an Interpol agent.',
        plot: 'http://ia.media-imdb.com/images/M/MV5BMjEzNDM2OTgzN15BMl5BanBnXkFtZTcwMzU3MTIzMQ@@._V1_SX214_AL_.jpg',
        image: 'http://ia.media-imdb.com/images/M/MV5BNTYyNTAwOTAyMF5BMl5BanBnXkFtZTcwMTIyNzkwNQ@@._V1__SX640_SY720_.jpg',
        ranking: 7,
        director: andrewNiccol,
      });
    
      /* IRONMAN */
      
      var jonFavreau = new People({
        firstName: 'Jon',
        lastName: 'Favreau',
        role: 'Director'
      });
      
      var ironman = new MovieModel({
        name: 'Ironman',
        year: '2008',
        gener: 'Sc-Fi',
        description: 'After being held captive in an Afghan cave, an industrialist creates a unique weaponized ' + 'suit of armor to fight against evil. This leads him to conflict within his own company.',
        plot: 'http://ia.media-imdb.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX214_AL_.jpg',
        image: 'http://ia.media-imdb.com/images/M/MV5BMTUzODkyNDE2OV5BMl5BanBnXkFtZTcwMzEzNTIzMw@@._V1__SX640_SY720_.jpg',
        ranking: 8,
        director: jonFavreau,
      });
    
      /* IRCONMAN 2 */

      var ironman2 = new MovieModel({
        name: 'Ironman 2',
        year: '2010',
        gener: 'Sc-Fi',
        description: 'With the world now aware of his identity as Iron Man, Tony Stark must contend with both ' 
          + 'his declining health and a vengeful mad man with ties to his fathers legacy.',
        plot: 'http://ia.media-imdb.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_SX214_AL_.jpg',
        image: 'http://ia.media-imdb.com/images/M/MV5BMTY4MzgzMjEwNl5BMl5BanBnXkFtZTcwNTgwODYzMw@@._V1__SX640_SY720_.jpg',
        ranking: 6,
        director: jonFavreau,
      });

      /* MAKE COLLECTION */

      movieCollection.add([ironman, ironman2, lorOfWar, inception]);
      ironman.save();
      ironman2.save();
      lorOfWar.save();
      inception.save();
      markDefaultLoad();
    }
  }
});