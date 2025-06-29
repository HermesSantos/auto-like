setInterval (()=>checkBodyLoad(), 1000)

function checkBodyLoad () {
  let primary = document.getElementById('primary')
  if (primary){
    autoClick()
  }
}

function autoClick(){
  let likeButton = document.querySelectorAll('#top-level-buttons-computed > segmented-like-dislike-button-view-model > yt-smartimation > div > div > like-button-view-model > toggle-button-view-model > button-view-model > button > yt-touch-feedback-shape > div')[0]
  let mainDiv = document.querySelectorAll("#top-level-buttons-computed > segmented-like-dislike-button-view-model > yt-smartimation > div > div > like-button-view-model > toggle-button-view-model > button-view-model > button")[0]
  if(mainDiv.title !== 'Remover "Gostei"'){
    likeButton.click()
  }
}
