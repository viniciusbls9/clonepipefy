import React from 'react';

import Card from '../Card';
import more from '../../assets/more.png';
import { Container } from './styles';

function List({ data, index: listIndex }) {
    return (
        <Container done={data.done}>
            <header>
                <h2>{data.title}</h2>
                {data.creatable &&
                    <button type="button">
                        <img src={more} alt="" />
                    </button>
                }
            </header>

            <ul>
                {data.cards.map((card, index) => <Card key={card.id} index={index} listIndex={listIndex} data={card} />)}
            </ul>
        </Container>
    );
}

export default List;