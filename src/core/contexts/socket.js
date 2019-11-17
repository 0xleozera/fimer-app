import React, { useEffect, useState, createContext } from 'react';
import Ws from 'websocket-adonis-meditel';

import { useSelector } from 'react-redux';

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [status, setStatus] = useState(false);
  const ws = Ws('ws:fimer.herokuapp.com');
  const token = useSelector(state => state.auth.token);
  const userId = useSelector(state => state.auth.user.id);

  useEffect(() => {
    ws.withJwtToken(token).connect();

    ws.on('open', () => {
      setStatus(true);
    });

    ws.on('close', () => {
      setStatus(false);
    });
    // eslint-disable-next-line
  }, [userId]);

  return (
    <SocketContext.Provider value={{ ws, status }}>
      {children}
    </SocketContext.Provider>
  );
};
