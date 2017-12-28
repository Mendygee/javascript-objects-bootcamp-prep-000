/*var playlist = {'Paul Simon': 'American Tune'};

function updatePlaylist(playlist, artistName, song) {
  playlist[artistName] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
delete playlist[artistName]
return playlist;
}
*/
var playlist = {artistName: 'playlist'}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}
