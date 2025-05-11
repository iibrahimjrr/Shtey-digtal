document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
  
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const age = document.getElementById('age').value;
      const password = document.getElementById('password').value;
  
      // Simulate registration - In a real app, this would make an API call
      // eslint-disable-next-line no-undef
      login({
        id: '1',
        username: username,
        email: email,
        age: parseInt(age),
        gender: 'Not specified',
        dateOfBirth: '',
        vitals: {
          bloodPressure: '120/80',
          heartRate: '72',
          temperature: '36.6',
          oxygenLevel: '98'
        },
        patientHistory: {
          conditions: [],
          medications: [],
          allergies: [],
          vaccines: [
            'COVID-19 Vaccine',
            'Flu Shot 2024',
            'Tetanus Booster'
          ],
          lastVisit: new Date().toISOString(),
          bloodType: 'A+',
          height: '175',
          weight: '70',
          medicalEvents: [
            {
              date: new Date().toISOString(),
              title: 'Initial Check-up',
              description: 'General health assessment and registration'
            }
          ]
        }
      });
    });
  });