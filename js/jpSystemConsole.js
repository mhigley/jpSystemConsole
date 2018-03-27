var consoleWindow = document.querySelector('.console'),
    osWindow = document.querySelector('.os'),
    chessWindow = document.querySelector('.chess');

// Ace Editor
var editor = ace.edit("editor");
editor.session.setMode("ace/mode/plain_text");
editor.getSession().removeAllListeners("guttermousedown");
editor.getSession().removeAllListeners("gutterclick");
editor.getSession().removeAllListeners("gutterdblclick");
editor.getSession().removeAllListeners("guttermousemove");
editor.renderer.setShowGutter(false);
editor.setOptions({
    // minLines: 25
    maxLines: Infinity
});

// Drag & Drop & Resize
interact(consoleWindow)
    .draggable({
        allowFrom: '.drag',
        restrict: {
            restriction: "html",
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        },
        onmove: dragListener,
        onend: function (event) {
            //stuff
        }
    }).resizable({
        edges: { right: true, bottom: true },
        restrictEdges: {
            outer: 'html'
        },
        restrictSize: {
            min: { width: 100, height: 50 },
        },
        onmove: resizeListener,
        onend: function (event) {
            //stuff
        }
    });

interact(osWindow)
    .draggable({
        allowFrom: '.drag',
        restrict: {
            restriction: "html",
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        },
        onmove: dragListener,
        onend: function (event) {
            //stuff
        }
    });

interact(chessWindow)
    .draggable({
        allowFrom: '.drag',
        restrict: {
            restriction: "html",
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        },
        onmove: dragListener,
        onend: function (event) {
            //stuff
        }
    }).resizable({
        edges: { right: true, bottom: true },
        restrictEdges: {
            outer: 'html'
        },
        restrictSize: {
            min: { width: 100, height: 50 },
        },
        onmove: resizeListener,
        onend: function (event) {
            //stuff
        }
    });

function resizeListener(event) {
    var target = event.target,
        x = (parseFloat(target.getAttribute('data-x')) || 0),
        y = (parseFloat(target.getAttribute('data-y')) || 0);

    target.style.width  = event.rect.width + 'px';
    target.style.height = event.rect.height + 'px';

    target.style.webkitTransform = target.style.transform = `translate(${x}px, ${y}px)`;

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}
function dragListener(event) {
    var target = event.target,
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    target.style.webkitTransform = target.style.transform = `translate(${x}px, ${y}px)`;

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}

var consoleBtn = document.querySelector('.consoleBtn'),
    osBtn = document.querySelector('.osBtn'),
    consoleMin = document.querySelector('.console .min'),
    osMin = document.querySelector('.os .min'),
    consoleMax = document.querySelector('.console .max'),
    osMax = document.querySelector('.os .max');

consoleBtn.addEventListener('dblclick', openConsole);
consoleMin.addEventListener('click', minWindow);
consoleMax.addEventListener('click', maxWindow);

osBtn.addEventListener('dblclick', openOs);
osMin.addEventListener('click', minWindow);
osMax.addEventListener('click', maxWindow);

function openConsole() {
    document.body.classList.add('consoleOn');
    consoleWindow.style.width = '50%';
    consoleWindow.style.height = '250px';
}
function openOs() {
    document.body.classList.add('osOn');
}
function maxWindow(e) {
    var el = e.target.closest('.window'),
        whichWindow = el.classList[1],
        thisWindow = document.querySelector(`.${whichWindow}`);

    // var stringy = JSON.stringify({"first":"Matt","last":"Higley"});
    // console.log(stringy);

    thisWindow.dataset.x = 0;
    thisWindow.dataset.y = 0;

    thisWindow.style.transform = 'translate(0, 0)';
    thisWindow.style.top = 0;
    thisWindow.style.left = 0;
    thisWindow.style.width = '100vw';
    thisWindow.style.height = '100vh';
}
function minWindow(e) {
    var el = e.target.closest('.window'),
        whichWindow = el.classList[1],
        thisWindow = document.querySelector(`.${whichWindow}`);

    var dataVals = thisWindow.data;
    console.log(dataVals);
    // var stringy = 

    document.body.classList.toggle(whichWindow + 'On');
    thisWindow.style.width = '50%';
    thisWindow.style.height = '250px';
}


// OS Animation
var progressBlue = document.querySelectorAll('.progress-blue');
var progressRed = document.querySelectorAll('.progress-red');
var progressLtBlue = document.querySelectorAll('.progress-ltblue');

function getRandomNum () {
    var pickBlueProgress, pickRedProgress, pickLtBlueProgress;

    setInterval(function(){
        pickBlueProgress = (Math.floor(Math.random() * progressBlue.length) + 0);
        pickRedProgress = (Math.floor(Math.random() * progressRed.length) + 0);
        pickLtBlueProgress = (Math.floor(Math.random() * progressLtBlue.length) + 0);
    }, 100);

    setInterval(function(){
        var blue = (Math.floor(Math.random() * 50) + 20),
            red = (Math.floor(Math.random() * 15) + 5),
            ltblue = (Math.floor(Math.random() * 25) + 5);
        progressBlue[pickBlueProgress].style.width = blue + '%';
        progressRed[pickRedProgress].style.width = (blue + red) + '%';
        progressLtBlue[pickLtBlueProgress].style.width = ltblue + '%';
    }, 500);
}
getRandomNum();