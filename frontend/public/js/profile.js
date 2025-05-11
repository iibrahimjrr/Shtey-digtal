if (typeof AUTH_KEY === 'undefined') {
  const AUTH_KEY = 'auth_key';
}

function getCurrentUser() {
  const user = localStorage.getItem(AUTH_KEY);
  return user ? JSON.parse(user) : null;
}

document.addEventListener('DOMContentLoaded', () => {
  const user = getCurrentUser();
  if (!user) return;

  // Profile Picture Upload
  const pictureUpload = document.getElementById('pictureUpload');
  pictureUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        document.getElementById('profilePicture').src = e.target.result;
        // In a real app, you would upload this to a server
        user.profilePicture = e.target.result;
        localStorage.setItem(AUTH_KEY, JSON.stringify(user));
      };
      reader.readAsDataURL(file);
    }
  });

  // Edit Profile Modal
  const modal = document.getElementById('editModal');
  const editBtn = document.getElementById('editProfileBtn');
  const closeBtn = document.getElementById('closeModal');
  const editForm = document.getElementById('editProfileForm');

  editBtn.addEventListener('click', () => {
    modal.classList.add('active');
    // Populate form with current user data
    document.getElementById('editUsername').value = user.username;
    document.getElementById('editEmail').value = user.email;
    document.getElementById('editAge').value = user.age;
    document.getElementById('editGender').value = user.gender || '';
    document.getElementById('editDob').value = user.dateOfBirth || '';
    document.getElementById('editBloodType').value = user.patientHistory.bloodType || '';
    document.getElementById('editHeight').value = user.patientHistory.height || '';
    document.getElementById('editWeight').value = user.patientHistory.weight || '';
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });



  editForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Update user data
    user.username = document.getElementById('editUsername').value;
    user.email = document.getElementById('editEmail').value;
    user.age = parseInt(document.getElementById('editAge').value);
    user.gender = document.getElementById('editGender').value;
    user.dateOfBirth = document.getElementById('editDob').value;
    user.patientHistory.bloodType = document.getElementById('editBloodType').value;
    user.patientHistory.height = document.getElementById('editHeight').value;
    user.patientHistory.weight = document.getElementById('editWeight').value;

    // Save updated user data
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    
    // Update display
    updateProfileDisplay(user);
    
    // Close modal
    modal.classList.remove('active');
  });

  // Initial profile display
  updateProfileDisplay(user);
});

function updateProfileDisplay(user) {
  // Update profile information
  document.getElementById('profileName').textContent = `${user.username}'s Profile`;
  document.getElementById('profileUsername').textContent = user.username;
  document.getElementById('profileEmail').textContent = user.email;
  document.getElementById('profileAge').textContent = user.age;
  document.getElementById('profileGender').textContent = user.gender || 'Not specified';
  document.getElementById('profileDob').textContent = user.dateOfBirth || 'Not specified';
  if (user.profilePicture) {
    document.getElementById('profilePicture').src = user.profilePicture;
  }
  document.getElementById('profileBP').textContent = user.vitals?.bloodPressure || '--/--';
  document.getElementById('profileHR').textContent = user.vitals?.heartRate || '--';
  document.getElementById('profileTemp').textContent = user.vitals?.temperature || '--';
  document.getElementById('profileO2').textContent = user.vitals?.oxygenLevel || '--';
  document.getElementById('profileBloodType').textContent = user.patientHistory.bloodType || 'Not specified';
  document.getElementById('profileHeight').textContent = user.patientHistory.height || 'Not specified';
  document.getElementById('profileWeight').textContent = user.patientHistory.weight || 'Not specified';
  const height = parseFloat(user.patientHistory.height);
  const weight = parseFloat(user.patientHistory.weight);
  if (height && weight) {
    const bmi = calculateBMI(height, weight);
    document.getElementById('profileBMI').textContent = bmi.toFixed(1);
    document.getElementById('bmiStatus').textContent = getBMIStatus(bmi);
  } else {
    document.getElementById('profileBMI').textContent = 'Not available';
    document.getElementById('bmiStatus').textContent = 'BMI cannot be calculated';
  }
  document.getElementById('profileLastVisit').textContent = new Date(user.patientHistory.lastVisit).toLocaleDateString();
  function updateList(id, items) {
    const element = document.getElementById(id);
    element.innerHTML = items.length > 0
      ? items.map(item => `<li>${item}</li>`).join('')
      : '<li>No records available</li>';
  }
  updateList('profileConditions', user.patientHistory.conditions);
  updateList('profileMedications', user.patientHistory.medications);
  updateList('profileAllergies', user.patientHistory.allergies);
  updateList('profileVaccines', user.patientHistory.vaccines || []);
  const timeline = document.getElementById('medicalTimeline');
  const events = user.patientHistory.medicalEvents || [];
  timeline.innerHTML = events.length > 0
    ? events.map(event => `
        <div class="timeline-item">
          <div class="timeline-date">${new Date(event.date).toLocaleDateString()}</div>
          <div class="timeline-title">${event.title}</div>
          <div class="timeline-description">${event.description}</div>
        </div>
      `).join('')
    : '<div class="timeline-item">No medical events recorded</div>';
}function calculateBMI(heightCm, weightKg) {
  const heightM = heightCm / 100;
  return weightKg / (heightM * heightM);
}function getBMIStatus(bmi) {
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 25) return 'Normal weight';
  if (bmi < 30) return 'Overweight';
  return 'Obese';
}

