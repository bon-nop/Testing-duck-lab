import { useContext } from 'react';
import MembersContext from '../context/member';

function useMembersContext() {
    return useContext(MembersContext);
}

export default useMembersContext;