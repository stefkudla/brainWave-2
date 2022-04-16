import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default async function handleLogout() {
    const { logout } = useAuth();
    const navigate = useNavigate;
    // setError('');

    try {
        await logout();
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}
