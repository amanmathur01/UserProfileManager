
function handleResponse(){
fetch('http://localhost:8080/enrollment', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/'
  },
  body: JSON.stringify(/* your data to be saved */)
})
.then(response => {
  // Check if the response status is OK
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  // Parse the JSON response
  return response.json();
})
.then(data => {
  // Handle the JSON data
  console.log('Response data:', data);
  // Assuming the response data is the same as what was sent, you can work with it here
  // For example, you can update UI or perform additional actions
})
.catch(error => {
  // Handle any errors
  console.error('There was a problem with the fetch operation:', error);
});
}