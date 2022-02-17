import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { transactions } from "../api/transaction.js"
import { Transaction,Header} from '../components';

const TransactionDetail = () => {

    const [transaction, setTransaction] = useState(0)
    const { transactionId } = useParams();
    useEffect(() => {
        setTransaction(transactions.find(item => item.id === transactionId))
    }, [])
    return (
        <div >
            <Header title="Transaction Details" />
             <Transaction transaction={transaction}/>
        </div>
    )
}

export default TransactionDetail;