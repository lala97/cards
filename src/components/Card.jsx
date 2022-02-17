import moment from 'moment'
import React from 'react'
import { Grid, Menu, Button } from 'semantic-ui-react'


const CardDetail = ({ card }) => {
    return (
        <div >
            <Grid textAlign='center' columns={3} className="marginTop">
                <Grid.Row>
                    <Grid.Column>
                        <Menu fluid vertical>
                            <Menu.Item className='header'>Id</Menu.Item>
                            <Menu.Item>Account</Menu.Item>
                            <Menu.Item>Masked CardNumber</Menu.Item>
                            <Menu.Item>Balance</Menu.Item>
                            <Menu.Item>Currency</Menu.Item>
                            <Menu.Item>Status</Menu.Item>
                            <Menu.Item>Expire Date</Menu.Item>
                        </Menu>
                    </Grid.Column>
                    <Grid.Column>
                        <Menu fluid vertical>
                            <Menu.Item className='header'>{card.id}</Menu.Item>
                            <Menu.Item>{card.cardAccount}</Menu.Item>
                            <Menu.Item>{card.maskedCardNumber}</Menu.Item>
                            <Menu.Item>{card.balance}</Menu.Item>
                            <Menu.Item>{card.currency}</Menu.Item>
                            <Menu.Item>{card.status == "active" ? (<Button color='green'>Active</Button>) : (<Button color='red'>Deactive</Button>)}</Menu.Item>
                            <Menu.Item>{moment(card.expireDate).format("DD.MM.YYYY")}</Menu.Item>
                        </Menu>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default CardDetail