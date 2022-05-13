
let mainMenu = document.getElementById('main_menu');
let mainBtn = document.getElementById('main_btn');
let dropMenu = document.getElementById('drop_menu');
let dropBtn = document.getElementById('drop_btn');

function drop(btn,menu){
  btn.addEventListener('click', function() {
    menu.classList.toggle('d-none');
 });
}
drop(mainBtn,mainMenu)
drop(dropBtn,dropMenu)
// scroll button
// captcha
var onloadCallback = function() {};
    let getRe = document.getElementById("rc-anchor-alert")
    console.log(getRe)
    if (getRe){
      getRe.classList.add('d-none')
    }
// captcha

function topScroll(){
  window.scrollTo(0,0)
}
// scroll button end
// range start
let progressBar1 = document.querySelector('.progressBar1')
  let progressBar2 = document.querySelector('.progressBar2')
  let myRange1 = document.querySelector('#myRange1')
  let myRange2 = document.querySelector('#myRange2')
  
function allRange(myRange,progressBar){
  myRange.oninput = function(){
    progressBar.style.width = myRange.value + '%'
  }
}

allRange(myRange1,progressBar1)
allRange(myRange2,progressBar2)
// range end


// chart js
nv.addGraph(function() {
   var chart = nv.models.lineChart()
     .useInteractiveGuideline(true)
     ;
 
   chart.xAxis
     .axisLabel('Time (ms)')
     .tickFormat(d3.format(',r'))
     ;
 
   chart.yAxis
     .axisLabel('Voltage (v)')
     .tickFormat(d3.format('.02f'))
     ;
 
   d3.select('#chart svg')
     .datum(data())
     .transition().duration(500)
     .call(chart)
     ;
 
   nv.utils.windowResize(chart.update);
 
   return chart;
 });
 
 var data =function() {
   var sin = [],
       cos = [];
       cot = [];
 
   for (var i = 0; i < 100; i++) {
     sin.push({x: i, y: Math.sin(i/10)});
     cos.push({x: i, y: .5 * Math.cos(i/10)});
     cot.push({x: i, y: .8 * Math.cos(i/10)});
   }
 
   return [
     {
       values: sin,
       key: 'Sine Wave',
       color: '#ff7f0e'
     },
     {
       values: cos,
       key: 'Cosine Wave',
       color: '#2ca02c'
     },
     {
      values: cot,
      key: 'cot Wave',
      color: '#000'
    }
   ];
 }
