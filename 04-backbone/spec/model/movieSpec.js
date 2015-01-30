define(['js/model/Movie', 'js/model/People'], function (MovieModel, PeopleModel) {
  describe("Movie Model Spec", function () {

    var movie = new MovieModel({
      name: 'Lord of War',
      year: '2005',
      gener: 'Thriller',
      description: 'An arms dealer confronts the morality of his work ...',
      plot: 'http://ia.media-imdb.com/images/M/some.jpg',
      image: 'http://ia.media-imdb.com/images/M/some.jpg',
      ranking: 7,
    });

    var director = new PeopleModel({
      firstName: 'Andrew',
      lastName: 'Niccol',
      role: 'Director'
    });

    it('Check generate model', function () {
      expect(movie.isValid()).toBe(true);
    });

    it('Add people model to movie model', function () {
      movie.set('director', director);
      expect(movie.isValid()).toBe(true);
      expect(movie.get('director').get('role')).toEqual('Director');
    });

    it('Check model year invalid', function () {
      movie.set({year: 999});
      expect(movie.isValid()).toBe(false);
    });
    
    it('Check rankin invalid', function () {
      movie.set({ranking: 11});
      expect(movie.isValid()).toBe(false);
    });
    
  });
});