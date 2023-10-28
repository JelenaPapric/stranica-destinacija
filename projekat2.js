document.getElementById("login-btn").addEventListener("click", function() {
    alert("Please login to access your account.");
 });

 const destinations = ['Hawaii', 'Maldives', 'Bora-Bora', 'Bahamas'];
 let  dest= prompt(`Enter the destination you want to go:`)

 if(dest===`Hawaii`){
  alert(`You want to visit Hawaii? We have the best hotels for you!`)
 }
 else if(dest===`Maldives`){
  alert(`You want to visit Maldives? We have the best hotels for you!`)
 }

 else if(dest===`Bora-Bora`){
  alert(`You want to visit Bora-Bora? We have the best hotels for you!`)
 }

 else if(dest===`Bahamas`){
  alert(`You want to visit Bahamas? We have the best hotels for you!`)
 }
 else{
  alert(`Unfortunately we do not have the desired destination.`)
 }
let offer="";
 for(let i=0;i<destinations.length;i++){
  offer+=destinations[i];
  console.log("Destinations we offer:" +offer);
 }



 function generateDestinationHTML(destination) {
   return `<li>${destination}</li>`;
 }
 

 function displayDestinations() {
   const DestinationList = document.getElementById('destination-list');
   DestinationList.innerHTML = "";
 
   destinations.forEach(function(destination) {
    destinationList.innerHTML += generateDestinationHTML(destination);
   });
 }

 
 function addDestination() {
   const destinationInput = document.getElementById('destination-input');
   const newDestination = destinationInput.value;
 
   if(newDestination !== "") {
    destinations.push(newDestination);
     displayDestinations();
     destinationInput.value = "";
   }
 }
 
 const addButton = document.getElementById('add-button');
 addButton.addEventListener('click', addDestination);
 

 const destinationList = document.getElementById('destination-list');
 destinationList.style.listStyle = "none";
 destinationList.style.textAlign = "left";
 

 
 const contactForm = document.getElementById('contact-form');
 contactForm.addEventListener('submit', function(event) {
 event.preventDefault();
 
 const formName = contactForm.elements['name'].value;
 const formEmail = contactForm.elements['email'].value;
 const formMessage = contactForm.elements['message'].value;
 
 console.log(`Name: ${formName}\nEmail: ${formEmail}\nMessage: ${formMessage}`);
 
  contactForm.reset();
});

 const greeting = "Hello, world!";
 console.log(greeting.toUpperCase());
 console.log(greeting.toLowerCase());
 console.log(greeting.includes("world"));
 console.log(greeting.substring(0, 5));
 

 const numbers = [1, 3, 2, 5, 4];
 console.log(numbers.sort());
 console.log(numbers.reverse());
 console.log(numbers.join(", "));
 console.log(numbers.indexOf(5));

