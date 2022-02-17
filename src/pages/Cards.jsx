import React, { useState } from 'react'
import { CardFilter, Pagination } from "../elements"
import { CardList, Header } from '../components';
import { cards } from "../api/card.js"
import { Grid } from 'semantic-ui-react';
import { useReducer } from 'react';

const Cards = () => {
    const [activePage, setActivePage] = useState(1);
    const [filterInput, setFilterInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            cardId: "",
            cardAccount: "",
            amount: "",
            currency: "",
            status : ""
        }
    );

    const handleChange = (event, selectValue,type) => {
        const { name, value } = event.target;
        setFilterInput({ [name]: value });
        if (type=="currency") setFilterInput({ 'currency': selectValue });
        else if (type="status") setFilterInput({ 'status': selectValue });
    };

    const handlePageChange = (activePage) => {
        setActivePage(activePage)
    }
    
    const filterCards = list => {
        return list.filter(item => {
            return (
                item.cardId.toLowerCase().includes(filterInput.cardId.toLowerCase()) &&
                item.cardAccount.toLowerCase().includes(filterInput.cardAccount.toLowerCase()) &&
                item.balance.startsWith(filterInput.amount) &&
                item.currency.toLowerCase().includes(filterInput.currency.toLowerCase()) &&
                item.status.toLowerCase().includes(filterInput.status.toLowerCase())
            );
        });
    };

    const list = filterCards(cards)
    const currentList = list.slice((activePage - 1) * 10, activePage * 10);

    return (
        <>
            <Header title="Card List" />
            <CardFilter searchValue={filterInput} handleChange={handleChange} />

            <Grid.Row className="marginTop">
                <CardList list={currentList} />
            </Grid.Row>

            <Grid.Row className="marginTop">
                <Pagination
                    list={list}
                    handlePageChange={handlePageChange}
                />
            </Grid.Row>

        </>
    )
}

export default Cards