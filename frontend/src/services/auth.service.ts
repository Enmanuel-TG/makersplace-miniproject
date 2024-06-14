import axios from '../utilities/axios.utility';
import { Account, User } from '../utilities/interfaces.utility';

export const registerRequest = async (user: User) => await axios.post('/auth/register', user);
export const logoutRequest = async () => await axios.post('/auth/logout');
export const loginRequest = async (user: Account) => await axios.post('/auth/login', user);
export const profileRequest = async () => await axios.post('/user/profile');

export const updatePhotoProfileRequest = async (photo:  File) => {
  const formData = new FormData();
  formData.append('photo', photo);

  return await axios.post('/user/update', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const authWithGoogleRequest = async () => {
  try {
    const response = await axios.get('/authGoogle/google');
    console.log(response.data);
  } catch (error) {
    console.error('error to auth with Google:', error);
    throw error;
  }
};

// export const authWithGoogleRequest = async () => fetch('http://localhost:3000/api/authGoogle/google');