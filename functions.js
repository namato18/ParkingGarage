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
        })
        .catch(error => {
            console.error('Error writing to Firebase', error);
        });
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
