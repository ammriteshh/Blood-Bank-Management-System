// API Configuration
// Uses environment variable for API URL, falls back to localhost for development

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const API_ENDPOINTS = {
  AUTH: `${API_BASE_URL}/api/auth`,
  DONOR: `${API_BASE_URL}/api/donor`,
  FACILITY: `${API_BASE_URL}/api/facility`,
  HOSPITAL: `${API_BASE_URL}/api/hospital`,
  BLOOD_LAB: `${API_BASE_URL}/api/blood-lab`,
  ADMIN: `${API_BASE_URL}/api/admin`,
};

export default API_BASE_URL;

