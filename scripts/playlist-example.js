require([
  '$api/models',
  '$views/list#List',
  '$api/library#Library'
], function(models, List,Library) {
  'use strict';

  var doPlaylistForAlbum = function() {
     var UsersLibrary = Library.forCurrentUser();
     UsersLibrary.playlists.snapshot().done(function(snapshot){
     for (var i = 0, l = snapshot.length; i < l; i++) {
      var playlist = snapshot.get(i);
         var list = List.forPlaylist(playlist);
    document.getElementById('playlistContainer').appendChild(list.node);
    list.init(); 
     
        }
    
  });
    }

  exports.doPlaylistForAlbum = doPlaylistForAlbum;
});
