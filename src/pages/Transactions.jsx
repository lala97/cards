import React, { useEffect, useState } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import { Pagination, TransactionFilter } from "../elements"
import { useParams } from 'react-router-dom';
import { transactions } from "../api/transaction.js"
import { TransactionList, Header } from '../components';
import { useReducer } from 'react';

const Transactions = () => {
    const { cardId } = useParams()
    const [transactionList, setTransactionList] = useState(transactions)
    const [activePage, setActivePage] = useState(1);
    const [filterInput, setFilterInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            cardId: "",
            cardAccount: "",
            amount: "",
            currency: "",
        }
    );

    useEffect(() => {
        if (cardId > 0) {
            const list = transactionList.filter(item => item.cardId == cardId)
            setTransactionList(list)
        }
    }, [transactions])

    const handleChange = (event, selectValue) => {
        const { name, value } = event.target;
        setFilterInput({ [name]: value });
        if (selectValue) setFilterInput({ 'currency': selectValue });
    };

    const handlePageChange = (activePage) => {
        setActivePage(activePage)
    }

    const filterTransactions = list => {
        return list.filter(item => {
            return (
                item.cardId.toLowerCase().includes(filterInput.cardId.toLowerCase()) &&
                item.cardAccount.toLowerCase().includes(filterInput.cardAccount.toLowerCase()) &&
                item.amount.startsWith(filterInput.amount) &&
                item.currency.toLowerCase().includes(filterInput.currency.toLowerCase())
            );
        });
    };

    const list = filterTransactions(transactionList)
    const currentList = list.slice((activePage - 1) * 10, activePage * 10);

    return (
        <>
            <Header title="Transaction List" />
            <Container>
                <TransactionFilter searchValue={filterInput} handleChange={handleChange} />
                <Grid.Row className="marginTop">
                    <TransactionList list={currentList} />
                </Grid.Row>
            </Container>
            <Grid.Row className="marginTop">
                <Pagination
                    list={list}
                    handlePageChange={handlePageChange}
                />
            </Grid.Row>
        </>
    );
}

export default Transactions