function addingEventListener() {

    const input = document.getElementById('input');
input.addEventListener('click', function(event) {
  alert('I was clicked!');
});

}


//takes in two arguments 
//name of the event, callback function 
//node that will listen: input constant 
//invoking addEventListener on the node will listen 
//first argument: event name to listen for 
//second argument: callback function, work that will be executed when the node hears the event 