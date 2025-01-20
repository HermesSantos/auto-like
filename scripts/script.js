//Verify if the 'primary' id exists every one second
setInterval (()=>checkBodyLoad(), 1000)

//if the 'primary' id existes it calls the click function
function checkBodyLoad () {
  let primary = document.getElementById('primary')
  if (primary){
    autoClick()
  }
}

//click on the like button function
function autoClick(){
  let likeButton = document.getElementsByClassName('yt-spec-button-shape-next yt-spec-button-shape-next--tonal yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-leading yt-spec-button-shape-next--segmented-start ')[0]
  //verifies if the like button is already clicked
  if(likeButton.ariaPressed === 'false'){
    //click action
    likeButton.click()
  }
}
