function init() {
    
    const copy1F1 = document.getElementById('copy1F1');


    const copy2F1 = document.getElementById('copy2F1');
    const logoF1 = document.getElementById('logoF1');

    const logoF2 = document.getElementById('logoF2');

    const CTA = document.getElementById('CTA');


    setTimeout(() => {
        // 1st text frame hide 
        disappearCopyF1(copy1F1);
    }, "2500");
    setTimeout(() => {
        // disappear copys 1st frame 
        copy2F1.classList.remove("delay3");
        disappearCopyF1(copy2F1);
    
        logoF1.classList.remove("delay3");
        disappearCopyF1(logoF1);
    }, "5500");
    setTimeout(() => {
        // appear copys endframe 
        appearCopyF2(logoF2)
    
        CTA.classList.add("delay")
        CTA.classList.add("pulse");
    }, "5700"); // +200
}

function addAnimation(element, animation) {
    element.classList.add('animate');
    element.classList.add(animation);
}

function appearCopyF1(copy) {   
    copy.classList.add('fade');
}

function disappearCopyF1(copy) {
    if (copy.id == "logoF1") {
        copy.classList.remove('pulse');
    } else {
        copy.classList.remove('fade');
    }
    copy.classList.add('fadeOut');
}

function disappearCopyF2(copy) {
    copy.classList.add('animate');
    copy.classList.add('fadeOut');          
}

function resetCopyF2(copy) {
    copy.classList.remove('fadeOut');      
}

function appearCopyF2(copy) {
    copy.classList.add('animate');
    copy.classList.add('delay');
    copy.classList.add('fade');       
}

function initArrowAnimation(arrow) {
    arrow.classList.remove('delay');
    arrow.classList.remove('animate');
    arrow.classList.remove('arrow-slow');
    arrow.classList.remove('slideRight');

    arrow.classList.add('arrow-fast');
    arrow.classList.add('animate-infinite');
    arrow.classList.add('pointingRight');
}

function resetArrow(arrow) {
    arrow.classList.remove('arrow-fast');
    arrow.classList.remove('animate-infinite');
    arrow.classList.remove('pointingRight');
    arrow.classList.add('delay');
}