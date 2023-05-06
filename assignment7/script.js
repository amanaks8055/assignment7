var index = 0;

function changecolors(){
var colors = ["red","blue","orange","yellow","green","purple"];

document.getElementsByTagName("body")[0].
Style.background = colors[index++];

if(index > colors.length - 1)
index = 0;

}