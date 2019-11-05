import { useContext } from 'react';
import { SocketContext } from 'contexts/socket';

const useSocket = () => useContext(SocketContext);

export default useSocket;
