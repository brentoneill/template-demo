var createPage = {
  init: function() {
    createPage.initStyling();
    createPage.initEvents();
  },
  initStyling: function() {
    console.log("styling init!");
    createPage.renderAllPuppies(puppies);
    createPage.renderAllPuppies(cats);
  },
  initEvents: function() {
    console.log("events init!");
    //bind link
    $('body').on('click', function(event) {
      event.preventDefault();
      $('section').remove();
    })
  },
  renderPuppy: function(puppy, index, array) {
    var compiled = _.template(templates.puppies);
    console.log(compiled);
    $('section').append(compiled(puppy));
    console.log("Puppy rendered");
  },
  renderAllPuppies: function(data) {
    _.each(data, createPage.renderPuppy);
  }

};





$(document).ready(function() {
  //run this code when page starts
  createPage.init();
});
