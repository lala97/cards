import React from 'react'
import CardDetail from './pages/CardDetail';
import Cards from './pages/Cards';
import TransactionList from './pages/Transactions';
import { Routes, Route } from 'react-router-dom';
import TransactionDetail from './pages/TransactionDetail';
import Home from './components/Home';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="transactions" element={<TransactionList />} />
            <Route path="transactions/:transactionId" element={<TransactionDetail />} />
            <Route path="cards" element={<Cards />} />
            <Route path="cards/:id" element={<CardDetail />} />
            <Route path="transactions/:id/:cardId"  element={<CardDetail />} />
            <Route path="cards/:cardId/transactions" element={<TransactionList />} />
            <Route path="cards/:cardId/transactions/:transactionId" element={<TransactionDetail/>} />
        </Routes>
    )
}