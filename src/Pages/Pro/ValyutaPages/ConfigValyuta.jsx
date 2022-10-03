import React from 'react'
import  Money  from '../Money'
import { Outlet } from 'react-router-dom';

const ConfigValyuta = () => {
    return (
        <div>
            <Money />
            <main>
                <Outlet />
            </main>
            
        </div>
    );
}

export default ConfigValyuta;