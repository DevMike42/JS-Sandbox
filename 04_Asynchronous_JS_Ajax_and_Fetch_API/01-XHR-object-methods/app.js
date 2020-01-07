// Event Listener (Listening for button click)
document.getElementById('button').addEventListener('click', loadData);

// Calls this function when Event Listener is triggered
function loadData() {
  // Create an instance of the XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN (Read the file) *note: true parameter sets it as asynchronous
  xhr.open('GET', 'data.txt', true);

  // Optional - Used for spinners/loaders
  xhr.onprogress = function () {
    console.log('READYSTATE', xhr.readyState);
  }

  // Once response is loaded, checks if status is OK
  xhr.onload = function () {
    if (this.status === 200) {
      // Console logs response (text from file)
      console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h4>${this.responseText}</h4>`;
    }
  }

  // Check for loading errors
  xhr.onerror = function () {
    console.log('Request error...');
  }

  // Sends the XHR request
  xhr.send();

  // HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"

  // readyState Values
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: resuest finished and response is ready
}