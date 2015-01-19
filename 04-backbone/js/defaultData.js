define([
  'model/People',
  'model/Movie',
  'collection/Movies',
  'collection/Actors'
], function (People, MovieModel, MovieCollection, ActorsCollection) {

  var DATA_DEFAULT_KEY = 'data-default-load';
  
  function markDefaultLoad() {
     window.localStorage.setItem(DATA_DEFAULT_KEY, true);
  }

  return {
    
    /**
     * Retrun true if default load already load
     */ 
    isDefaultLoad: function() {
      return window.localStorage.getItem(DATA_DEFAULT_KEY) == 'true';
    },
    
    getMovieCollection: function(){
      return /*TODO */
    },
    
    makeData: function () {
      
      // Create movie Collection
      var movieCollection = new MovieCollection();
      movieCollection.fetch();
    
      /* INCEPTION */
      
      // Create director
      var christopherNolan = new People({
        firstName: 'Christopher',
        lastName: 'Nolan',
        role: 'Director'
      });
      
      // Create Actors
      var leonardoDiCaprio = new People({
        firstName: 'Leonardo',
        lastName: 'DiCaprio',
        role: 'Actor'
      });
      
      var josephGordon = new People({
        firstName: 'Joseph',
        lastName: 'Gordon-Levitt',
        role: 'Actor'
      });
 
      var ellenPage = new People({
        firstName: 'Ellen',
        lastName: 'Page',
        role: 'Actress'
      });
      
      var inceptionActors = new ActorsCollection();
      inceptionActors.add([leonardoDiCaprio, josephGordon, ellenPage]);
      
      var inception = new MovieModel({
        name: 'Inception',
        year: '20010',
        gener: 'Sci-Fi',
        description: 'A thief who steals corporate secrets through use of dream-sharing technology is ' 
          + 'given the inverse task of planting an idea into the mind of a CEO.',
        plot: 'http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX214_AL_.jpg',
        image: 'http://ia.media-imdb.com/images/M/MV5BMTY3MzMzMDgyMF5BMl5BanBnXkFtZTcwMzY0OTk1Mw@@._V1__SX640_SY720_.jpg',
        raking: 7.6,
        director: christopherNolan,
        actors: inceptionActors,
      });
  
      /* LORD OF WAR */
      
      var andrewNiccol = new People({
        firstName: 'Andrew',
        lastName: 'Niccol',
        role: 'Director'
      });
      
      var nicolasCage = new People({
        firstName: 'Nicolas',
        lastName: 'Cage',
        role: 'Actor'
      });
      
      var bridgetMoynahan = new People({
        firstName: 'Bridget',
        lastName: 'Moynahan',
        role: 'Actress'
      });
      
      var lordOfWarActors = new ActorsCollection();
      lordOfWarActors.add([nicolasCage, bridgetMoynahan]);
      
      var lorOfWar = new MovieModel({
        name: 'Lord of War',
        year: '2005',
        gener: 'Thriller',
        description: 'An arms dealer confronts the morality of his work as he is being chased ' 
          + 'by an Interpol agent.',
        plot: 'http://ia.media-imdb.com/images/M/MV5BMjEzNDM2OTgzN15BMl5BanBnXkFtZTcwMzU3MTIzMQ@@._V1_SX214_AL_.jpg',
        image: 'http://ia.media-imdb.com/images/M/MV5BNTYyNTAwOTAyMF5BMl5BanBnXkFtZTcwMTIyNzkwNQ@@._V1__SX640_SY720_.jpg',
        raking: 7.6,
        director: andrewNiccol,
        actors: lordOfWarActors,
      });
    
      /* IRONMAN */
      
      var jonFavreau = new People({
        firstName: 'Jon',
        lastName: 'Favreau',
        role: 'Director'
      });
      
      var robertDowney = new People({
        firstName: 'Robert',
        lastName: 'Downey Jr',
        role: 'Actor'
      });
      
      var terrenceHoward = new People({
        firstName: 'Terrence',
        lastName: 'Howard',
        role: 'Actor'
      });
      
      var gwynethPaltrow = new People({
        firstName: 'Gwyneth',
        lastName: 'Paltrow',
        role: 'Actress'
      });
  
      var ironmanActors = new ActorsCollection();
      ironmanActors.add([robertDowney, gwynethPaltrow, terrenceHoward]);
      
      var ironman = new MovieModel({
        name: 'Ironman',
        year: '2008',
        gener: 'Sc-Fi',
        description: 'After being held captive in an Afghan cave, an industrialist creates a unique weaponized ' + 'suit of armor to fight against evil. This leads him to conflict within his own company.',
        plot: 'http://ia.media-imdb.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX214_AL_.jpg',
        image: 'http://ia.media-imdb.com/images/M/MV5BMTUzODkyNDE2OV5BMl5BanBnXkFtZTcwMzEzNTIzMw@@._V1__SX640_SY720_.jpg',
        raking: 7.9,
        director: jonFavreau,
        actors: ironmanActors,
      });
    
      /* IRCONMAN 2 */
      
      var donCheadle = new People({
        firstName: 'Don',
        lastName: 'Cheadle',
        role: 'Actor'
      });

      var ironman2Actors = new ActorsCollection();
      ironman2Actors.add([robertDowney, donCheadle, terrenceHoward]);

      var ironman2 = new MovieModel({
        name: 'Ironman 2',
        year: '2010',
        gener: 'Sc-Fi',
        description: 'With the world now aware of his identity as Iron Man, Tony Stark must contend with both ' 
          + 'his declining health and a vengeful mad man with ties to his fathers legacy.',
        plot: 'http://ia.media-imdb.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_SX214_AL_.jpg',
        image: 'http://ia.media-imdb.com/images/M/MV5BMTY4MzgzMjEwNl5BMl5BanBnXkFtZTcwNTgwODYzMw@@._V1__SX640_SY720_.jpg',
        raking: 7.1,
        director: jonFavreau,
        actors: ironman2Actors,
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