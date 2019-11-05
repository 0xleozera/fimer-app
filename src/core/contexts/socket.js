import React, { useEffect, useState, createContext } from 'react';
import Ws from 'websocket-adonis-meditel';

import { useSelector } from 'react-redux';

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [status, setStatus] = useState(false);
  const ws = Ws('ws://192.168.0.102:3333');
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    ws.withJwtToken(token).connect();

    ws.on('open', () => {
      setStatus(true);
    });

    ws.on('close', () => {
      setStatus(false);
    });

    return () => ws.close();
    // eslint-disable-next-line
  }, []);

  return (
    <SocketContext.Provider value={{ ws, status }}>
      {children}
    </SocketContext.Provider>
  );
};
