import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const DisableBackwardNavigation = ({ isLoggedIn, children }) => {
  const navigate = useNavigate();
  // const isInitialMount = useRef(true);

  useEffect(() => {
    if (!isLoggedIn) {
      const handleNavigation = (e) => {
        e.preventDefault();
        // if (!isInitialMount.current) {
        //   toast.warning('Please log in.');
        // }
        toast.warning('Please log in.');
        navigate('/login');
      };

      window.history.pushState(null, null, window.location.href);
      window.addEventListener('popstate', handleNavigation);

      return () => {
        window.removeEventListener('popstate', handleNavigation);
      };
    } else {
      // isInitialMount.current = false;
    }
  }, [isLoggedIn, navigate]);

  return children;
};

export default DisableBackwardNavigation;
