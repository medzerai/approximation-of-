var pt = [];
//var top = width*height;
var nb =0;
var res;
var cer = 0;
var rec = 0;
var k = 5 ;
var s;
function setup() {
	createCanvas(600 , 600);
	//frameRate(500);
	for(var i =0 ;i <nb ;i++){
		pt[i] = new Object();
		pt[i].x=random(width);
		pt[i].y=random(height);
	}
	s= createSlider(0 , 255 ,5);
}

function draw() {
	background(s.value());
	stroke("red");
	strokeWeight(2);
	fill(s.value());
	ellipse(width/2 , height/2 ,width , height);
	//console.log("nb = "+ nb);
	//for(var j=0 ;j < k ;j++){
		nb = ajout(pt , nb);
		//console.log("num = "+j);
	//}
	for(var i =0 ;i <nb ;i++){
		if(cercle(pt[i])){
			cer++; 
		}else{
			rec++; 
		}
	}
	if(rec == 0){
		res = cer;
	}else{
		res = cer / rec ;
	}
	console.log("PI = "+res);
	show();
    //noLoop();
}
function cercle(p ){
	var d = dist(width/2 , height/2 , p.x , p.y);
	if(d < width/2){
		return true;
	}else{
		return false;
	}
}
function show(){
	for(var i =0 ;i <nb ;i++){
		if(cercle(pt[i])){
			var c =createVector(0,255,0); 
		}else{
			var c =createVector(30,144,255); 
		}
		stroke(c.x , c.y ,c.z , 100);
		strokeWeight(10);
		point(pt[i].x ,pt[i].y);
	}
}
function ajout( pt , nb){
	nb++;
	pt[nb - 1] = new Object();
	pt[nb - 1].x=random(width);
	pt[nb - 1].y=random(height);
	return nb ;
}