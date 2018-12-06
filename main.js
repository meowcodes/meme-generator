var imgUrl = document.getElementById("img-url");
var topText = document.getElementById("top-text");
var botText = document.getElementById("bottom-text");
var submit = document.getElementById("submit-button");
var remove = document.getElementsByClassName("remove-button");
var memeBox = document.getElementById("meme-box");

function createMeme(){
  memeBox.insertAdjacentHTML('beforeend', '<div class="meme p-3"><div class="top-text"><h1 id="text-top">' + topText.value + '</h1></div><div><img class="img-fluid" id="url" src="' + imgUrl.value + '"></div><div class="bottom-text"><h1 id="text-bottom">' + botText.value + '</h1></div><div><input onclick="removeMeme(this)" class="btn remove-button" type="submit" value="REMOVE"></div></div>');

  imgUrl.value = "";
  topText.value = "";
  botText.value = "";
}

function removeMeme(button){
  console.log(button);
  button.parentElement.parentElement.remove();
}

