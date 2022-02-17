import React, { useState } from 'react'
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import { Pagination } from 'semantic-ui-react'

const Paginations = ({list,handlePageChange}) => {

    let [searchParams, setSearchParams] = useSearchParams();
    const [activePage, setActivePage] = useState(searchParams.get("pageSize") || 1);
    const navigate = useNavigate();
    const onPageChange = (event, data) => {
        navigate({
            search: `?${createSearchParams({
                pageSize: data.activePage
            })}`
        });
        setActivePage(data.activePage)
        handlePageChange(data.activePage)
    }
    
    return (
        <Pagination 
        activePage={activePage}
        totalPages={Math.ceil(list.length / 10)} 
        onPageChange={onPageChange}
        />
    )
}

export default Paginations