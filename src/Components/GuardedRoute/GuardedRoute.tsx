import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom'
import { Web3ModalContext } from '../Web3Modal/Web3Modal';

const GuardedRoute = ({ children }: { children: JSX.Element }) => {
    const { account, web3Modal } = useContext(Web3ModalContext);
    const location = useLocation();
    if (web3Modal.cachedProvider || account ) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace />;
}
export default GuardedRoute

