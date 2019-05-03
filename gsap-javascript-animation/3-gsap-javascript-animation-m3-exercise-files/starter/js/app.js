$(document).ready(function(){
    init();
});


function init(){
    var toolTimeline = new TimelineLite();
    var duration = 1;
    toolTimeline.add(TweenLite.to('#toolBox',duration,{y:-100, ease:Linear.easeInOut}));
    toolTimeline.add(TweenLite.to('#weightLifter',duration,{y:-100, ease:Linear.easeInOut}));
    toolTimeline.add(TweenLite.to('#crazy',duration,{y:-100, ease:Linear.easeInOut}));
    toolTimeline.add(TweenLite.to('#leaf',duration,{y:-100, ease:Linear.easeInOut}));


    $("#start").click(function(){
        toolTimeline.play();
    });

    $("#pause").click(function(){
        toolTimeline.play();
    });

}