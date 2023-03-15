console.log('test');
var h1 = document.querySelector("h1");
var button = document.querySelector('button');
var darkmodeActive = false;
var body = document.body;
var ul = document.querySelector('ul');
console.log(button.addEventListener);

h1.textContent = 'JS Next Level';

function  toggleDarkMode(builtInMethods){
    builtInMethods.stopPropagation();
    // idk what this shit actually does but you can target properties of the eventlistener function
    if (darkmodeActive === false) {
        body.classList.add('darkmode');
        button.innerText = 'Light Mode';
        darkmodeActive = true;
    } else {
        body.classList.remove('darkmode');
        button.innerText = 'Dark Mode'
        darkmodeActive = false;
    }

};



button.addEventListener("click", toggleDarkMode);

var h3 = document.querySelector('h3');
var count = 10;

function countdown() {
var timer = setInterval(function () {
    count--;
    h3.innerText = 'Count: ' + count;
    if (count === 0) {
        clearInterval(timer);
        alert('Time is up!')
    }
    
}, 1000);
};

function init () {
    countdown();
}
var link = document.querySelector('#link');
// stop default behavior of the link
link.addEventListener("click", function (wait) {
    wait.preventDefault ();
    console.log('wait!');
})

ul.addEventListener("click", function (event) {
    var li = event.target;
    console.log(li.dataset)
})


// // FOR/OF loop - represents each item of the array
// -------------------------------------------------
// var list = document.querySelectorAll('li');

// for (var li of list) {
// li.addEventListener('click', function (event) {
//     console.log(event.target,innerText)
//     // event.target or this will work
//     console.log('peepeepoopoo')
// })
// };
// init();


