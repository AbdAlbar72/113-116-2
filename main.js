let video; 
let poseNet; 
let noseX, noseY; 

function setup() {
    createCanvas(640, 480); 
    video = createCapture(VIDEO); 
    video.hide(); 

    poseNet = ml5.poseNet(video, modelLoaded); 
    poseNet.on('pose', gotPoses); 
}

function draw() {
    background(255); 
    image(video, 0, 0, width, height); 

    
    fill(255, 0, 0);
    ellipse(noseX, noseY, 20, 20);
}

function modelLoaded() {
    console.log('PoseNet Model Loaded!');
}

function gotPoses(poses) {
    if (poses.length > 0) {
        let pose = poses[0].pose; 
        noseX = pose.keypoints[0].position.x; 
        noseY = pose.keypoints[0].position.y; 

        console.log('Nose Coordinates:', noseX, noseY);
    }
}



