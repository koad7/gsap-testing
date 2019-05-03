/**
 * Created by trshelto on 3/30/16.
 */


var titleText = new SplitText(".title"),
tl = new AnimationTimeline(),
numWords = titleText.chars.length,
gameContainer = $(".gameBoard"),
dropTargets = $(".target"),
totalTarget = 6,
totalHit = 0;

function initTitle(){
    for(var i=0; i< numWords; i++){
        tl.form(titleText.chars[i], .5,{
            force3D: true,
            opacity: 0,
            x: -500,
            transformOrigin: "0 50%",
            ease: Back.easeOut
        }, Math.random());
    }
}
initTitle();