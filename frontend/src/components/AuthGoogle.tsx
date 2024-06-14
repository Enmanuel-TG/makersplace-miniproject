import { authWithGoogleRequest } from '../services/auth.service';

const LoginComponent = () => {
  const handleGoogleLogin = async () => {
    try {
      const response = await authWithGoogleRequest();
      console.log(response);
    } catch (error) {
      console.error('Error to login with Google', error);
    }
  };

  return (
    <div>
      <button onClick={handleGoogleLogin}>Button</button>
      <a href="http://localhost:3000/api/authGoogle/google">Login</a>
    </div>
  );
};

export default LoginComponent;
