import React, { Component } from 'react';
import Styled from 'styled-components';
import Card from './Card'
import { loadData } from '../utils/loadData';

const List = Styled.ul`
    list-style: none;
    margin: 1rem auto;
    padding: 16px;
    border: 1px dotted red;
`;

class CardList extends Component {
    state = {
        users: []
    }

    async componentDidMount() {
        const url = `https://randomuser.me/api/?results=2`;
        const data = await loadData(url);
        const users = data.results;
        this.setState({
            users
        })
    }

    render() {
        const {users} = this.state;
        return ( 
            <List>
                {users.map(user => (
                    <li key={user.login.uuid}>
                        <Card user={ user }/>
                    </li>
                ))}
            </List>
        );
    }
}

export default CardList;