import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import LoginComponent from '../components/AuthGoogle';
const AuthPage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated]);

  return (
    <div className='flex justify-center border-solid border-2 border-black h-screen'>
      <LoginComponent/>
      <div className='flex flex-col border-solid, border-2 border-black w-2/3'>
        <h1>Auth Page</h1>
      </div>
      <div className='flex border-solid, border-2 border-black w-1/3 justify-end '>
        {/*Bottom Register*/}
        <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg   shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-24 h-10" onClick={() => navigate('/register')}>Register</button>
        {/*Bottom Login*/}
        <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-24 h-10 " onClick={() => navigate('/login')}>Login</button>
      </div>
    </div>
  );
};

export default AuthPage;