import { useContext } from 'react';
import { NavigationContext } from 'react-navigation';

const useNavigation = () => useContext(NavigationContext);

export default useNavigation;
