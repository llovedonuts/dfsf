
function printName()  {
  const name = document.getElementById('name').value;
  document.getElementById("result").innerText = name;
}

var Links={
  SetColor: function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i<alist.length){
      alist[i].style.color = color;
      i = i + 1;
  }
    //$('a').css('color', color);
  }
}
var Body= {
SetColor: function (color){
  document.querySelector('body').style.color = color;
  //$('body').css('color',color);
},
SetBackgroundColor: function (color){
   document.querySelector('body').style.backgroundColor = color;
    //$('body').css('backgroundColor',color);
}
}
var Title1={
  SetColor: function (color){
    document.querySelector('h1').style.color = color;
  }
}
var Title2={
  SetColor: function (color){
    document.querySelector('h4').style.color = color;
  //  style.border-bottom = 1px solid '#4a64aa';
}
}

function backgroundHandler(self){
  var target = document.querySelector('body');
    if(self.value === 'change background'){
    alert("Do you want forest version? change!");
    Body.SetBackgroundColor('#b7d3d4');
    Body.SetColor('#006666');
    Title1.SetColor('#006666');
    Title2.SetColor('#3e8a8c');
    self.value = 'Original';
    Links.SetColor('#4a64aa');
} else {
    alert("Original is the best! change!");
    Body.SetBackgroundColor('white');
    Body.SetColor('darksalmon');
    Title1.SetColor('tomato');
    Title2.SetColor('tomato');
    self.value = 'change background';
    Links.SetColor('darksalmon');
}
}
