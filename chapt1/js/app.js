$(document).ready(function(){
    alert('Ready');

    startTween();
});

function startTween(){
    TweenLite.to($("#toolBox"),2, {x:200, y:225,
    rotation:90, alpha:.2});

}