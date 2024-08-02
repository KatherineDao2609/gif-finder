const searchForm = document.getElementById ('search-form')
const searchInput = document.getElementById ('search-input')
const resultsEl = document.getElementById('results')

searchForm.addEventListener ('submit', function (event) {
  event.preventDefault()
  const q = searchInput.value
  search (q)
})


function search (q) {
  // API key
const apikey = 'KhDzwQ1C9GBZWU3rG381BV7dncHRM6ZP'
const path = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${q}`


//Using fetch function and json by instructor Mitchell Hudson from https://youtu.be/Ss2Lf54zyh4//
// GIF results showing on screen based on search data

fetch (path).then(function(res) {
  return res.json()
}).then(function(json) {
  console.log(json.data[0].images.fixed_width.url)
  let resultsHTML = ''
  
  json.data.forEach(function (obj) {
    console.log (obj) 
    const url = obj.images.fixed_width.url
    const width = obj.images.fixed_width.width
    const height = obj.images.fixed_width.height
    const title = obj.title
    resultsHTML += `<img 
      class="item"
      src="${url}" 
      width="${width}" 
      height="${height}"
      alt="${obj.title}"
      >`
  })
  resultsEl.innerHTML = resultsHTML
}).catch(function(err){
   console.log(err.message)
})
  
}

// Trending GIF on screen
function trending () {
  // API key
const apikey = 'KhDzwQ1C9GBZWU3rG381BV7dncHRM6ZP'
const path = `https://api.giphy.com/v1/gifs/trending?api_key=${apikey}`

  fetch (path).then(function(res) {
  return res.json()
}).then(function(json) {
  console.log(json.data[0].images.fixed_width.url)
  let resultsHTML = ''
    

    json.data.forEach(function (obj) {
    console.log (obj) 
    const url = obj.images.fixed_width.url
    const width = obj.images.fixed_width.width
    const height = obj.images.fixed_width.height
    const title = obj.title
    resultsHTML += `<img 
      class="item"
      src="${url}" 
      width="${width}" 
      height="${height}"
      alt="${obj.title}"
      >`
  })
  resultsEl.innerHTML = resultsHTML
}).catch(function(err){
   console.log(err.message)
})
  
}
trending()






    



