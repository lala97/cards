import moment from 'moment';
import React from 'react'
import { Card, Segment } from 'semantic-ui-react';

const CardList = ({ list }) => {

    return (
        <Card.Group>
            {
                list.map(card =>
                    <Card color="orange" key={card.id} >
                        <Card.Content header={`ID :${card.cardId}`} />
                        <Card.Description>
                            <p>Account : <span>{card.cardAccount}</span></p>
                            <p>Amount : {card.balance} {card.currency}</p>
                            <p>Date : {moment(card.expireDate).format("DD.MM.YYYY")}</p>
                        </Card.Description>
                        <Card.Content>
                            <Segment.Group horizontal>
                                <Segment color="red">
                                    <a href={`/cards/${card.id}/transactions`}>Transactions</a>
                                </Segment>
                                <Segment color="green">
                                    <p> <a href={`/cards/${card.id}`}>
                                        Details
                                    </a></p>
                                </Segment>
                            </Segment.Group>
                        </Card.Content>
                    </Card>
                )
            }
        </Card.Group>
    )
}

export default CardList