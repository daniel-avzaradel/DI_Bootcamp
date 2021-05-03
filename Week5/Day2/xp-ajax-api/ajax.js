// 1.
let xhr = new XMLHttpRequest();

// 2.
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

// 3.
xhr.send()

// 4. 
xhr.onload = function () {
    if (xhr.status != 200) {
        // analyze HTTP status of the response
        // e.g. 404: Not Found
        console.log(`Error ${xhr.status}: ${xhr.statusText}`);
    }  else { // show the result
        // response is the server response
        // console.log(`Done, got ${xhr.response.length} bytes`);
        console.log(xhr.response);
    }
}
xhr.onprogress = function(event) {
    if (event.lengthComputable) {
      console.log(`Received ${event.loaded} of ${event.total} bytes`);
    } else {
      console.log(`Received ${event.loaded} bytes`); // no Content-Length
    }
  };
  xhr.onerror = function() {
    console.log("Request failed");
  };