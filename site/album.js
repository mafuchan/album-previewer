const queryParams = new URLSearchParams(window.location.search)
const albumId = queryParams.get("album")
const album = albums.find(album => album.id === +albumId)

const $title = document.querySelector(".album-title")
const $artist = document.querySelector(".album-artist")
const $albumArt = document.querySelector(".album-art")
const $tracks = document.querySelector(".tracks")
const $mediaPlayer = document.querySelector(".media-player")
const $playButton = document.querySelector("button")

$title.textContent = album.title
$artist.textContent = album.artist
$albumArt.src = `assets/cover-images/${album.cover_image}`
$albumArt.alt = album.title

album.tracks.map(track => {
  const $track = document.createElement("li")
  $track.innerHTML = `
    <li class="track-listing" data-track-id="${track.id}">
      ${track.title}
    </li>
  `
  return $track
}).forEach($track => {
  $tracks.append($track)
})
console.log(album)

$playButton.addEventListener("click", () => {
  $mediaPlayer.src = `assets/tracks/${album.tracks[0].file_name}`
  $mediaPlayer.play()
})
