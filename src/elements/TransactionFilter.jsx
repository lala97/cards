import React from 'react'
import { Form, Input, Select, Container } from 'semantic-ui-react'

const TransactionFilter = ({ searchValue, handleChange}) => {
    const currencyOptions = [
        { key: 1, text: 'AZN', value: 'azn' },
        { key: 2, text: 'EUR', value: 'eur' },
        { key: 3, text: 'USD', value: 'usd' },
    ]

    return (
        
        <div>
            <Container>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Field
                            id='form-input-control-first-name'
                            control={Input}
                            name="cardId"
                            label='Card Id'
                            placeholder='Card Id'
                            onChange={e => handleChange(e)}
                            value={searchValue.cardId}
                        />
                        <Form.Field
                            id='form-input-control-first-name'
                            name="cardAccount"
                            control={Input}
                            label='Card Account'
                            placeholder='Card Account'
                            onChange={e => handleChange(e)}
                            value={searchValue.cardAccount}

                        />
                        <Form.Field
                            id='form-input-control-last-name'
                            control={Input}
                            name="amount"
                            label='Amount'
                            placeholder='Amount'
                            onChange={e => handleChange(e)}
                            value={searchValue.amount}
                        />
                        
                        <Form.Field
                            control={Select}
                            options={currencyOptions}
                            label='Currency'
                            name="currency"
                            placeholder='Currency'
                            search
                            clearable
                            searchInput={{ id: 'form-select-control-currency' }}
                            onChange={(e, { value },type="currency") => handleChange(e, value?.toString(),type)}
                            value={searchValue.currency}
                        />
                    </Form.Group>
                </Form>
            </Container>
        </div>
    )
}

export default TransactionFilter