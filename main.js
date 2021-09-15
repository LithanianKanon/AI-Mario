function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump= loadSound("jump.wav");
	mario_coin= loadSound("coin.wav");
	game_over= loadSound("gameover.wav");
	killing= loadSound("kick.wav");
mario_die= loadSound("mariodie.wav");   
	
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	video= createCapture(VIDEO);
	video.size(600,400);
	video.parent('game_console');
	instializeInSetup(mario);
	poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);	
}

function modelLoaded() {
console.log("Model Loaded! :D :D :D");
}

function gotPoses(results) {
if (results.length > 0) {
	console.log(results);
noseX= results[0].pose.nose.x;
noseY= results[0].pose.nose.y;
console.log("nosex- "+noseX+" and nosey- "+noseY);
}

}


function draw() {
	game()
}






