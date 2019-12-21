var MouseRecorder = {
    points: [],
    startRecording: function(){
        document.addEventListener('mousemove', MouseRecorder.trackMovement);
    },
    stopRecording: function(){
        document.addEventListener('mousemove', MouseRecorder.trackMovement);
    },
    trackMovement: function(event){
        var point = {
            x: event.pageX,
            y: event.pageY
        };
        MouseRecorder.points.push(point);
        console.log(MouseRecorder.points);
    },
    playRecorded: function(){
        var circle = document.getElementById('circle');
        circle.style.display = 'block';
        for(let i=0; i < MouseRecorder.points.length; i++){
            setTimeout(function(){
                circle.style.left = MouseRecorder.points[i].x + 'px';
                circle.style.top = MouseRecorder.points[i].y + 'px';

                if (i === MouseRecorder.points.length - 1) {
                    circle.style.display = 'none';
                }

            }, 40 * i);
        }
    },
    init: function(){
        var startBtn = document.getElementById('start-record');
        var stopBtn = document.getElementById('stop-record');
        var playBtn = document.getElementById('play-recorded');

        startBtn.addEventListener('click', function(){
            MouseRecorder.startRecording();
        });
        stopBtn.addEventListener('click', function(){
            MouseRecorder.stopRecording();
        });
        playBtn.addEventListener('click', function () {
            MouseRecorder.playRecorded();
        });
    }
}
window.addEventListener('load', function () {
    MouseRecorder.init();
});