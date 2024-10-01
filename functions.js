import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, set, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings = {
    databaseURL: "https://parkinggarage-404c8-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)

// Function to handle floor selection for cars
function selectFloor(car, floor) {
    // Create a reference in the Firebase Realtime Database
    const carRef = ref(database, `cars/${car}`);
    
    // Push the selected floor data to Firebase
    set(carRef, {
        floor: floor
    }).then(() => {
        console.log(`Floor ${floor} selected for ${car}`);
    }).catch(error => {
        console.error('Error writing to Firebase', error);
    });
}

// Add event listeners for buttons
document.getElementById('car1-floor1').addEventListener('click', () => selectFloor('car1', 1));
document.getElementById('car1-floor2').addEventListener('click', () => selectFloor('car1', 2));
document.getElementById('car1-floor3').addEventListener('click', () => selectFloor('car1', 3));
