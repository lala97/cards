import moment from 'moment';
import React from 'react'
import { Link } from "react-router-dom";
import { Grid, Menu } from 'semantic-ui-react'

const Transaction = ({ transaction }) => {

    return (
        <Grid textAlign='center' columns={3} className="marginTop">
            <Grid.Row>
                <Grid.Column>
                    <Menu fluid vertical>
                        <Menu.Item className='header'>Id</Menu.Item>
                        <Menu.Item>Card Account</Menu.Item>
                        <Menu.Item>cardID</Menu.Item>
                        <Menu.Item>Amount</Menu.Item>
                        <Menu.Item>Currency</Menu.Item>
                        <Menu.Item>Transaction Date</Menu.Item>
                        <Menu.Item>MerchantInfo</Menu.Item>
                    </Menu>
                </Grid.Column>
                <Grid.Column>
                    <Menu fluid vertical>
                        <Menu.Item className='header'>{transaction.id}</Menu.Item>
                        <Menu.Item>{transaction.cardAccount}</Menu.Item>
                        <Menu.Item><Link to={`/transactions/${transaction.id}/${transaction.cardId}`}>{transaction.cardId}</Link></Menu.Item>
                        <Menu.Item>{transaction.amount}</Menu.Item>
                        <Menu.Item>{transaction.currency}</Menu.Item>
                        <Menu.Item>{moment(transaction.transactionDate).format("DD.MM.YYYY")}</Menu.Item>
                        <Menu.Item>{transaction.merchantInfo}</Menu.Item>
                    </Menu>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default Transaction;