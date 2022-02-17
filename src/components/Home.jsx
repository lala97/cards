import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Container } from 'semantic-ui-react'
import Header from './Header'

const Home = () => {

    return (
        <Container className="marginTop">
            <Header title="Home"/>
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column className="padding">
                        <Link to="transactions"><h3>Transactions</h3></Link>
                    </Grid.Column>
                    <Grid.Column className="padding">
                    <Link to="cards"><h3>Cards</h3></Link>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default Home