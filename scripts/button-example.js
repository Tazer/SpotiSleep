require([
  '$api/models',
  '$views/buttons'
], function(models, buttons) {
  'use strict';
  console.log($);

  var timerMintues = 0;
  var timerMintuesNow = function(){
     return timerMintues;
  }
  var doPlayButtonForAlbum = function() {
    var album = models.Album.fromURI('spotify:album:2mCuMNdJkoyiXFhsQCLLqw');
    var button = buttons.Button.withLabel("20 minuter");
    $(button.node).on('click',function(){ timerMintues = 20;})
    document.getElementById('buttonContainer').appendChild(button.node);
  };

  var doShareButtonForArtist = function() {
    var artist = models.Artist.fromURI('spotify:artist:0gxyHStUsqpMadRV0Di1Qt');
    var button = buttons.Button.withLabel("30 minuter");
    $(button.node).on('click',function(){ timerMintues = 30;})
    document.getElementById('buttonContainer').appendChild(button.node);

  };

    var doShareButtonForArtist2 = function() {
    var artist = models.Artist.fromURI('spotify:artist:0gxyHStUsqpMadRV0Di1Qt');
    var button = buttons.Button.withLabel("10 sekunder");
    $(button.node).on('click',function(){ timerMintues = 0.1;})
    document.getElementById('buttonContainer').appendChild(button.node);

  };
  exports.timerMintuesNow = timerMintuesNow;
  exports.doPlayButtonForAlbum = doPlayButtonForAlbum;
  exports.doShareButtonForArtist = doShareButtonForArtist;
  exports.doShareButtonForArtist2 = doShareButtonForArtist2;
});
