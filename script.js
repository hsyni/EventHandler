///////////////EVENT HANDLERS///////////////////////

// var button = document.querySelector('#btn1');
// var title = document.querySelector('#title');

// button.addEventListener('click', function() {
//     console.log('The button is clicked');
//     title.style.backgroundColor = 'red';
// });

// var listParent = document.querySelector('ul');
// console.log(listParent);

// listParent.addEventListener('click', function() {
//     console.log('You clicked the ul');
//     listParent.style.backgroundColor = 'blue';
// });


// var childrenArray = Array.prototype.slice.call(listParent.children);

// childrenArray.forEach(element => {
//     element.addEventListener('click', function() {
//         element.style.backgroundColor = 'white';
//     });
// });

var gorevBtn = document.querySelector('button');
var gorevListesi = document.querySelector('ul');
var inputText = document.querySelector('input');
var listItems = document.querySelectorAll('li');

function addWithEnter() {
    inputText.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            var yeniGorev = document.createElement('li');
            yeniGorev.innerHTML = inputText.value;
            gorevListesi.appendChild(yeniGorev);
            inputText.value = '';
        }
    });
}

function addWithButton() {
    gorevBtn.addEventListener('click', function() {
        var yeniGorev = document.createElement('li');
        yeniGorev.innerHTML = inputText.value;
        gorevListesi.appendChild(yeniGorev);
        inputText.value = '';
    });
}

function hoverForLi() {
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener('mouseover', function() {
            this.style.backgroundColor = 'blue';
            this.style.color = 'white';
        });

        listItems[i].addEventListener('mouseout', function() {
            this.style.backgroundColor = 'white';
            this.style.color = 'black';
        });
    }
}


addWithEnter();
addWithButton();
hoverForLi();