const input = document.getElementById('input');


function addingEventListener() {
    input.addEventListener('click', callback);
}

function callback() {
    alert('I was clicked')
}

