function addingEventListener() {
  const input = document.getElementById('input');
  //   event name to listen for, callback function 
  input.addEventListener('click', function(event) {
    alert('I was clicked!');
  });
}
