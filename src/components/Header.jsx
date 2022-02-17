import React from 'react'
import { Breadcrumb } from '../elements';

const Header = ({ title }) => {
    return (
        <div>
            <h1>{title}</h1>
            <Breadcrumb />
        </div>

    );
}

export default Header