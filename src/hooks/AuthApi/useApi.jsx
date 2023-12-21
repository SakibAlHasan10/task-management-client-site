import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const useApi = () => {
    const all = useContext(AuthContext)
    return all
};

export default useApi;