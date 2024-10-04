import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, set, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings = {
    databaseURL: "https://parkinggarage-404c8-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)

// Function to handle floor selection for cars and apply button highlighting
function selectFloor(car, floor) {
    // Create a reference in the Firebase Realtime Database
    const carRef = ref(database, `cars/${car}`);
    
    // Push the selected floor data to Firebase
    set(carRef, { floor: floor })
        .then(() => {
            console.log(`Floor ${floor} selected for ${car}`);

            // Highlight the clicked button
            const selectedButton = document.getElementById(`${car}-floor${floor}`);
            // Remove 'selected' class from all buttons for the specific car
            const carButtons = document.querySelectorAll(`#${car}-floors button`);
            carButtons.forEach(button => button.classList.remove('selected'));

            // Add 'selected' class to the clicked button
            selectedButton.classList.add('selected');

             // Show success popup message
             showPopupMessage(`Floor ${floor} selected for ${car}`);
        })
        .catch(error => {
            console.error('Error writing to Firebase', error);
        });
}

// Function to show a popup message similar to an iPhone notification
function showPopupMessage(message) {
    // Create a div for the popup
    const popup = document.createElement('div');
    popup.innerText = message;
    
    // Popup styling to resemble iPhone notification
    popup.style.position = 'fixed';
    popup.style.top = '20px'; // At the top of the screen
    popup.style.left = '50%';
    popup.style.transform = 'translateX(-50%)';
    popup.style.backgroundColor = '#333333'; // Dark background
    popup.style.color = '#ffffff'; // White text
    popup.style.padding = '15px 20px';
    popup.style.borderRadius = '15px'; // Rounded corners like an iPhone notification
    popup.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.2)';
    popup.style.fontSize = '16px';
    popup.style.zIndex = '1000';
    popup.style.transition = 'opacity 0.5s ease';

    // Start popup visible
    popup.style.opacity = '1';

    // Append the popup to the body
    document.body.appendChild(popup);

    // After 2 seconds, fade out and remove the popup
    setTimeout(() => {
        popup.style.opacity = '0'; // Fade out effect
        setTimeout(() => {
            popup.remove(); // Remove from DOM after fade out
        }, 500); // Allow fade out to complete before removal
    }, 2000); // Show for 2 seconds
}

// Add event listeners for buttons
document.getElementById('car1-floor1').addEventListener('click', () => selectFloor('car1', 1));
document.getElementById('car1-floor2').addEventListener('click', () => selectFloor('car1', 2));
document.getElementById('car1-floor3').addEventListener('click', () => selectFloor('car1', 3));
document.getElementById('car1-floor4').addEventListener('click', () => selectFloor('car1', 4));
document.getElementById('car1-floor5').addEventListener('click', () => selectFloor('car1', 5));
document.getElementById('car1-floor6').addEventListener('click', () => selectFloor('car1', 6));
document.getElementById('car1-floor7').addEventListener('click', () => selectFloor('car1', 7));

document.getElementById('car2-floor1').addEventListener('click', () => selectFloor('car2', 1));
document.getElementById('car2-floor2').addEventListener('click', () => selectFloor('car2', 2));
document.getElementById('car2-floor3').addEventListener('click', () => selectFloor('car2', 3));
document.getElementById('car2-floor4').addEventListener('click', () => selectFloor('car2', 4));
document.getElementById('car2-floor5').addEventListener('click', () => selectFloor('car2', 5));
document.getElementById('car2-floor6').addEventListener('click', () => selectFloor('car2', 6));
document.getElementById('car2-floor7').addEventListener('click', () => selectFloor('car2', 7));
