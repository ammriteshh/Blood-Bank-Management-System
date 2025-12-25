// API Configuration
// Uses environment variable for API URL, falls back to localhost for development
// On Vercel, if VITE_API_URL is not set, uses relative URLs (same domain)

const getApiBaseUrl = () => {
  // If explicit API URL is provided, use it
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  
  // In production on Vercel, use relative URLs (same domain)
  if (import.meta.env.PROD) {
    return ''; // Empty string means same origin
  }
  
  // Development fallback
  return 'http://localhost:5000';
};

const API_BASE_URL = getApiBaseUrl();

export const API_ENDPOINTS = {
  AUTH: `${API_BASE_URL}/api/auth`,
  DONOR: `${API_BASE_URL}/api/donor`,
  FACILITY: `${API_BASE_URL}/api/facility`,
  HOSPITAL: `${API_BASE_URL}/api/hospital`,
  BLOOD_LAB: `${API_BASE_URL}/api/blood-lab`,
  ADMIN: `${API_BASE_URL}/api/admin`,
};

export default API_BASE_URL;

