require([
  '$api/models',
  'scripts/language-example',
  'scripts/cover-example',
  'scripts/button-example',
  'scripts/playlist-example'
], function(models, languageExample, coverExample, buttonExample, playlistExample) {
  'use strict';
models.player.addEventListener('change', function() {
    if(models.player.playing == true){
      setTimeout(function() {
        console.log(buttonExample.timerMintuesNow())
          models.player.pause();
      }, buttonExample.timerMintuesNow() * 60  * 1000);
    }

 });
  languageExample.doHelloWorld();
  //coverExample.doCoverForAlbum();
  buttonExample.doShareButtonForArtist2();
  buttonExample.doShareButtonForArtist();
  buttonExample.doPlayButtonForAlbum();
  playlistExample.doPlaylistForAlbum();

});
