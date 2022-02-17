import React from 'react'
import { Table } from 'semantic-ui-react'
import { Link, useLocation } from 'react-router-dom';
import moment from 'moment';

const TransactionList = ({ list }) => {
    const { pathname } = useLocation();

    return (
        <Table basic>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.HeaderCell>Transaction ID</Table.HeaderCell>
                    <Table.HeaderCell>Card Id</Table.HeaderCell>
                    <Table.HeaderCell>Card Account</Table.HeaderCell>
                    <Table.HeaderCell>Amount</Table.HeaderCell>
                    <Table.HeaderCell>Currency</Table.HeaderCell>
                    <Table.HeaderCell>Transaction Date</Table.HeaderCell>
                    <Table.HeaderCell>Action</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {
                    list.map(transaction => {
                        return (
                            <Table.Row key={transaction.id}>
                                <Table.Cell>{transaction.id}</Table.Cell>
                                <Table.Cell>{transaction.transactionId}</Table.Cell>
                                <Table.Cell><Link to={`/transactions/${transaction.id}/${transaction.cardId}`}>{transaction.cardId}</Link></Table.Cell>
                                <Table.Cell>{transaction.cardAccount}</Table.Cell>
                                <Table.Cell>{transaction.amount}</Table.Cell>
                                <Table.Cell>{transaction.currency}</Table.Cell>
                                <Table.Cell>{moment(transaction.transactionDate).format("DD.MM.YYYY")}</Table.Cell>
                                <Table.Cell><Link to={`${pathname}/${transaction.id}`}>Detail</Link></Table.Cell>
                            </Table.Row>
                        )
                    })
                }
            </Table.Body>
        </Table>
    );
}

export default TransactionList