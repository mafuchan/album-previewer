const $albums = document.querySelector(".albums")

albums.map(({ id, cover_image, title, artist }) => {
  const $album = document.createElement("a")
  $album.href = `album.html?album=${id}`
  $album.classList.add("album")
  $album.innerHTML = `
    <img src="assets/cover-images/${cover_image}" alt="${title}" />
    <p>${artist} - ${title}</p>
  `
  return $album
}).forEach($album => {
  $albums.append($album)
})
