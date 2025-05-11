import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Activity, Camera, Edit, ClipboardList, Ruler, Calendar, Pill, AlertCircle, Syringe } from 'lucide-react';

// Helper functions
const calculateBMI = (heightCm, weightKg) => {
  const height = parseFloat(heightCm);
  const weight = parseFloat(weightKg);
  if (!height || !weight) return 0;
  
  const heightM = height / 100;
  return weight / (heightM * heightM);
};

const getBMIStatus = (bmi) => {
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 25) return 'Normal weight';
  if (bmi < 30) return 'Overweight';
  return 'Obese';
};

const ProfileHead = () => {
  const { currentUser, updateUser, logout } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    age: '',
    gender: '',
    dateOfBirth: '',
    bloodType: '',
    height: '',
    weight: ''
  });

  useEffect(() => {
    if (currentUser) {
      setFormData({
        name: currentUser.name || '',
        username: currentUser.username || '',
        email: currentUser.email || '',
        age: currentUser.age?.toString() || '',
        gender: currentUser.gender || '',
        dateOfBirth: currentUser.dateOfBirth || '',
        bloodType: currentUser.patientHistory.bloodType || '',
        height: currentUser.patientHistory.height || '',
        weight: currentUser.patientHistory.weight || ''
      });
    }
  }, [currentUser]);

  const handlePictureChange = (e) => {
    if (!e.target.files || !e.target.files[0] || !currentUser) return;
    
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (event) => {
      if (event.target && currentUser) {
        const updatedUser = {
          ...currentUser,
          profilePicture: event.target?.result
        };
        updateUser(updatedUser);
      }
    };
    
    reader.readAsDataURL(file);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    
    
    if (!currentUser) return;
    
    const updatedUser = {
      ...currentUser,
      name: formData.name,
      username: formData.username,
      email: formData.email,
      age: parseInt(formData.age),
      gender: formData.gender,
      dateOfBirth: formData.dateOfBirth,
      patientHistory: {
        ...currentUser.patientHistory,
        bloodType: formData.bloodType,
        height: formData.height,
        weight: formData.weight
      }
    };
    
    updateUser(updatedUser);
    setShowModal(false);
  };


  if (!currentUser) return <div>Loading...</div>;

  // Calculate BMI if height and weight are available
  const bmi = calculateBMI(
    currentUser.patientHistory.height || '0', 
    currentUser.patientHistory.weight || '0'
  );
  const bmiStatus = getBMIStatus(bmi);
  return (
    <>
      
      <main className="profile-container">
        <div className="profile-header">
          <div className="profile-picture-container">
            <img 
              id="profilePicture"
              src={currentUser.profilePicture || "img/profile-photo.webp"}
              loading='lazy'
              alt="Profile" 
              className="profile-picture"
            />
            <div className="profile-picture-overlay">
              <label htmlFor="pictureUpload" className="picture-upload-label">
                <Camera size={16} />
                Change Picture
              </label>
              <input 
                type="file" 
                id="pictureUpload" 
                accept="image/*" 
                style={{ display: 'none' }}
                onChange={handlePictureChange}
              />
            </div>
          </div>
          <div className="profile-title">
            <h3 id="profileName">{currentUser.name}</h3>
            <p>Personal health information and medical history</p>
            <button 
              onClick={() =>{
                setShowModal(true);
              }} 
              
              className="edit-button"
            >
              <Edit size={16} />
              Edit Profile
            </button>
          </div>
        </div>

        {/* Edit Profile Modal */}
        {showModal &&  ( 
            
          <div className={`model ${showModal ? "active" : ""}`}>
            <div className="modal-content">
              <div className="modal-header">
                <h4>Edit Profile</h4>
                <button className="close-button" onClick={() => setShowModal(false)}>&times;</button>
              </div>
              <form onSubmit={handleSubmit} className="edit-form">
              <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
              </div>
              <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    value={formData.username}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input 
                    type="number" 
                    id="age" 
                    name="age" 
                    value={formData.age}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <select 
                    id="gender" 
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="dateOfBirth">Date of Birth</label>
                  <input 
                    type="date" 
                    id="dateOfBirth" 
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="bloodType">Blood Type</label>
                  <select 
                    id="bloodType" 
                    name="bloodType"
                    value={formData.bloodType}
                    onChange={handleInputChange}
                  >
                    <option value="">Select blood type</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="height">Height (cm)</label>
                  <input 
                    type="number" 
                    id="height" 
                    name="height"
                    value={formData.height}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="weight">Weight (kg)</label>
                  <input 
                    type="number" 
                    id="weight" 
                    name="weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="submit-button-container">
                    <button type="submit" className="submit-button">Save Changes</button>
                </div>

              </form>
            </div>
          </div>
        )}

        <div className="profile-grid">
          <div className="profile-card">
            <h4>
              <ClipboardList size={18} />
              Personal Information
            </h4>
            <dl>
              <dt>Name</dt>
              <dd>{currentUser.name}</dd>
              <dt>Username</dt>
              <dd>{currentUser.username}</dd>
              <dt>Email</dt>
              <dd>{currentUser.email}</dd>
              <dt>Age</dt>
              <dd>{currentUser.age || 'Not specified'}</dd>
              <dt>Gender</dt>
              <dd>{currentUser.gender || 'Not specified'}</dd>
              <dt>Date of Birth</dt>
              <dd>{currentUser.dateOfBirth || 'Not specified'}</dd>
            </dl>
          </div>

          <div className="profile-card">
            <h4>
              <Activity size={18} />
              Vital Signs
            </h4>
            <div className="vital-signs">
              <div className="vital-sign">
                <div className="label">Blood Pressure</div>
                <div className="value">{currentUser.vitals?.bloodPressure || '--/--'}</div>
                <div className="label">mmHg</div>
              </div>
              <div className="vital-sign">
                <div className="label">Heart Rate</div>
                <div className="value">{currentUser.vitals?.heartRate || '--'}</div>
                <div className="label">bpm</div>
              </div>
              <div className="vital-sign">
                <div className="label">Temperature</div>
                <div className="value">{currentUser.vitals?.temperature || '--'}</div>
                <div className="label">°C</div>
              </div>
              <div className="vital-sign">
                <div className="label">Oxygen Level</div>
                <div className="value">{currentUser.vitals?.oxygenLevel || '--'}</div>
                <div className="label">%</div>
              </div>
            </div>
          </div>

          <div className="profile-card">
            <h4>
              <Ruler size={18} />
              Health Metrics
            </h4>
            <dl>
              <dt>Blood Type</dt>
              <dd>{currentUser.patientHistory.bloodType || 'Not specified'}</dd>
              <dt>Height</dt>
              <dd>{currentUser.patientHistory.height ? `${currentUser.patientHistory.height} cm` : 'Not specified'}</dd>
              <dt>Weight</dt>
              <dd>{currentUser.patientHistory.weight ? `${currentUser.patientHistory.weight} kg` : 'Not specified'}</dd>
              <dt>BMI</dt>
              <dd>{bmi ? bmi.toFixed(1) : 'Not available'}</dd>
              <dt>Last Visit</dt>
              <dd>{new Date(currentUser.patientHistory.lastVisit).toLocaleDateString()}</dd>
            </dl>
            <div className="health-status">
              <Activity size={18} />
              <span>{bmi ? bmiStatus : 'BMI cannot be calculated'}</span>
            </div>
          </div>

          <div className="profile-card wide">
            <h4>
              <Calendar size={18} />
              Recent Medical History
            </h4>
            <div className="timeline">
              {currentUser.patientHistory.medicalEvents && 
              currentUser.patientHistory.medicalEvents.length > 0 ? (
                currentUser.patientHistory.medicalEvents.map((event, index) => (
                  <div className="timeline-item" key={index}>
                    <div className="timeline-date">{new Date(event.date).toLocaleDateString()}</div>
                    <div className="timeline-title">{event.title}</div>
                    <div className="timeline-description">{event.description}</div>
                  </div>
                ))
              ) : (
                <div className="timeline-item">No medical events recorded</div>
              )}
            </div>
          </div>

          <div className="profile-card">
            <h4>
              <Pill size={18} />
              Current Medications
            </h4>
            <ul>
              {currentUser.patientHistory.medications.length > 0 ? (
                currentUser.patientHistory.medications.map((med, index) => (
                  <li key={index}>{med}</li>
                ))
              ) : (
                <li>No medications recorded</li>
              )}
            </ul>
          </div>

          <div className="profile-card">
            <h4>
              <AlertCircle size={18} />
              Allergies & Conditions
            </h4>
            <h5>Allergies</h5>
            <ul>
              {currentUser.patientHistory.allergies.length > 0 ? (
                currentUser.patientHistory.allergies.map((allergy, index) => (
                  <li key={index}>{allergy}</li>
                ))
              ) : (
                <li>No allergies recorded</li>
              )}
            </ul>
            <h5>Chronic Conditions</h5>
            <ul>
              {currentUser.patientHistory.conditions.length > 0 ? (
                currentUser.patientHistory.conditions.map((condition, index) => (
                  <li key={index}>{condition}</li>
                ))
              ) : (
                <li>No conditions recorded</li>
              )}
            </ul>
          </div>

          <div className="profile-card">
            <h4>
              <Syringe size={18} />
              Immunization Records
            </h4>
            <ul>
              {currentUser.patientHistory.vaccines && 
              currentUser.patientHistory.vaccines.length > 0 ? (
                currentUser.patientHistory.vaccines.map((vaccine, index) => (
                  <li key={index}>{vaccine}</li>
                ))
              ) : (
                <li>No vaccines recorded</li>
              )}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default ProfileHead;