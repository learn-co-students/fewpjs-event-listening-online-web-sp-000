
function addingEventListener() {
  //node that is listening for the click event is being stored in input
  const input = document.getElementById('input');
  //event name we are listening for, function callback
  input.addEventListener('click', function(event) {
    alert('I was clicked!');
  });
}
