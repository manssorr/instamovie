import {createContext, useContext, useState, useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';

const ConnectionContext = createContext({isConnected: true});

const ConnectionProvider = ({children}) => {
  const [isConnected, setIsConnected] = useState(true);
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    // Subscribe to network state updates
    const unsubscribe = NetInfo.addEventListener(state => {
      const connected = state.isConnected && state.isInternetReachable;
      // Check if the connection status changed from false to true
      if (!isConnected && connected) {
        setShowNotice(true); // Show the notice

        // Hide the notice after 5 seconds
        setTimeout(() => setShowNotice(false), 5000);
      }
      setIsConnected(connected);
    });

    return () => unsubscribe(); // Cleanup subscription
  }, [isConnected]);

  return (
    <ConnectionContext.Provider value={{isConnected, showNotice}}>
      {children}
    </ConnectionContext.Provider>
  );
};

export const useConnectionStatus = () => {
  const context = useContext(ConnectionContext);

  if (context === undefined) {
    throw new Error(
      'useConnectionStatus must be used within a ConnectionProvider',
    );
  }

  return context;
};

export {ConnectionContext, ConnectionProvider};
