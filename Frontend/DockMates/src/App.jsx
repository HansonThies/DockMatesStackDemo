import { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    // Making a GET request to the backend endpoint url
    fetch('http://localhost:8080/api/users') 
      .then(response => response.json())  
      .then(data => {
        // Print user data in console
        console.log('User Data:', data);  
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

  }, []);

  return (
    <div>
      <h1>Welcome to the DockMates App!!!</h1>
    </div>
  );
}

export default App;

