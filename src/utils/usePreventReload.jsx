import { useEffect } from 'react';

export const usePreventReload = () => {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const message = "Are you sure you want to leave?";
      event.returnValue = message; /* Standard for most browsers */
      console.log("Prevented reload:", event.returnValue)
      return message; /* For some older browsers */
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      // Cleanup: Remove the event listener when the component unmounts
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

};
