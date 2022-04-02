const queryParams = new URLSearchParams(window.location.search)
const albumId = queryParams.get("album")
const album = albums.find(album => album.id === +albumId)

const $title = document.querySelector(".album-title")
const $artist = document.querySelector(".album-artist")
const $albumArt = document.querySelector(".album-art")
const $tracks = document.querySelector(".tracks")
const $mediaPlayer = document.querySelector(".media-player")
const $playButton = document.querySelector("button")

$mediaPlayer.src = `assets/tracks/${album.tracks[0].file_name}`

$title.textContent = album.title
$artist.textContent = album.artist
$albumArt.src = `assets/cover-images/${album.cover_image}`
$albumArt.alt = album.title

album.tracks.map(track => {
  const $track = document.createElement("li")
  $track.classList.add("track-listing")
  $track.dataset.trackId = track.id
  $track.textContent = track.title
  $track.addEventListener("click", () => {
    $mediaPlayer.src = `assets/tracks/${track.file_name}` 
    $mediaPlayer.play()
  })
  return $track
}).forEach($track => {
  $tracks.append($track)
})

$playButton.addEventListener("click", () => {
  toggleMedia()
})

document.addEventListener("keydown", event => {
  if (event.keyCode === 32) {
    toggleMedia()
  }
})

$mediaPlayer.addEventListener("play", () => {
  $playButton.innerHTML = `<i class="fas fa-pause"></i>`
})
$mediaPlayer.addEventListener("pause", () => {
  $playButton.innerHTML = `<i class="fas fa-play"></i>`
})
$mediaPlayer.addEventListener("ended", () => {
  $playButton.innerHTML = `<i class="fas fa-play"></i>`
})

function isPlaying() {
  const { currentTime, paused, ended } = $mediaPlayer

  return currentTime > 0 && !paused && !ended
}

function toggleMedia() {
  if (isPlaying()) {
    $mediaPlayer.pause()
  } else {
    $mediaPlayer.play()
  }
}
