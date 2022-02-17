import React from 'react'
import { useLocation } from 'react-router-dom';
import { Breadcrumb } from 'semantic-ui-react'


const Breadcrumbs = () => {
    const { pathname } = useLocation();
    const pathNameArray = pathname.split("/").filter((p) => p);
    const sections = pathNameArray.reduce(
        (previousValue, currentValue, currentIndex, arr) => {
            previousValue.push({
                key: currentIndex,
                href: "/" + arr.slice(0, currentIndex + 1).join('/'),
                content: currentValue.toUpperCase()
            })
            return previousValue;
        }, [{
            "key": "/",
            "href": "/",
            "content": "HOME"
        }]);
    return (
        sections.length > 1 
            ? <Breadcrumb size="large" icon='right angle' sections={sections} /> 
            : ''
    )
}

export default Breadcrumbs