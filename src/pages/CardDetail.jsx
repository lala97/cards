import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { cards } from "../api/card.js"
import { Card,Header} from '../components';

const CardDetail = () => {
    const [cardItem, setCardItem] = useState([])
    const { id } = useParams();

    useEffect(() => {
        setCardItem(cards.find(card => card.id === id))
    }, [])

    return (
        <div >
            <Header title="Card Details" />
            <Card card={cardItem} />
        </div>
    )
}

export default CardDetail