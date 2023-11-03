const squares = document.getElementsByClassName("square");
let player = 'X';
let clicked = 0;

function playing(event) {
    const square = event.currentTarget;
    if (square.innerHTML === '') {
        square.style.backgroundColor = 'blue';
        square.innerHTML = player;
        clicked++;
    }
    if (checkWin()) {
        document.getElementById("winner").style.display = "block";
        document.getElementById("winner").innerText = 'player ' + player + ' won';
        removeAllEventListeners();
    } else if (clicked === 9) {
        document.getElementById("winner").style.display = "block";
        document.getElementById("winner").innerText = 'Noone won';
    }

    if (player === 'X') {
        player = 'O';
    } else {
        player = 'X';
    }
    
    
}

function checkWin() {
    if (squares[0].innerHTML === player && squares[1].innerHTML === player && squares[2].innerHTML === player) {
        squares[0].style.backgroundColor = 'red';
        squares[1].style.backgroundColor = 'red';
        squares[2].style.backgroundColor = 'red';
        return true;

    } else if (squares[3].innerHTML === player && squares[4].innerHTML === player && squares[5].innerHTML === player) {
        squares[3].style.backgroundColor = 'red';
        squares[4].style.backgroundColor = 'red';
        squares[5].style.backgroundColor = 'red';
        return true;

    }
    else if (squares[6].innerHTML === player && squares[7].innerHTML === player && squares[8].innerHTML === player) {
        squares[6].style.backgroundColor = 'red';
        squares[7].style.backgroundColor = 'red';
        squares[8].style.backgroundColor = 'red';
        return true;

    }
    else if (squares[0].innerHTML === player && squares[3].innerHTML === player && squares[6].innerHTML === player) {
        squares[0].style.backgroundColor = 'red';
        squares[3].style.backgroundColor = 'red';
        squares[6].style.backgroundColor = 'red';
        return true;

    }
    else if (squares[1].innerHTML === player && squares[4].innerHTML === player && squares[7].innerHTML === player) {
        squares[1].style.backgroundColor = 'red';
        squares[4].style.backgroundColor = 'red';
        squares[7].style.backgroundColor = 'red';
        return true;

    }
    else if (squares[2].innerHTML === player && squares[5].innerHTML === player && squares[8].innerHTML === player) {
        squares[2].style.backgroundColor = 'red';
        squares[5].style.backgroundColor = 'red';
        squares[8].style.backgroundColor = 'red';
        return true;

    }
    else if (squares[0].innerHTML === player && squares[4].innerHTML === player && squares[8].innerHTML === player) {
        squares[0].style.backgroundColor = 'red';
        squares[4].style.backgroundColor = 'red';
        squares[8].style.backgroundColor = 'red';
        return true;

    }
    else if (squares[2].innerHTML === player && squares[4].innerHTML === player && squares[6].innerHTML === player) {
        squares[2].style.backgroundColor = 'red';
        squares[4].style.backgroundColor = 'red';
        squares[6].style.backgroundColor = 'red';
        return true;

    }
    else {
        return false;
    }
}

function removeAllEventListeners() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].removeEventListener('click', playing);
    }
}

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', playing);
}