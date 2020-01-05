import React from 'react';
import {Container, Button, ListGroup, ListGroupItem} from 'reactstrap';
import {connect} from "react-redux";
import {deleteItem, getAllItems} from '../actions/itemsAction';

class ShoppingList extends React.Component {
    componentDidMount() {
        this.props.getAllItems();
    }

    deleteAItem = (id) => {
        this.props.deleteItem(id)
    };

    render() {
        const {items} = this.props.item;
        return(
            <Container>
                <ListGroup className='mt-3'>
                    {items.map(({_id, name}) => ( // ({_id, name}) - destruction (item) = item._id, item.name
                        <ListGroupItem key={_id}>
                            <Button
                                color='danger'
                                className='mr-3'
                                size='sm'
                                onClick={() => this.deleteAItem(_id)}
                            >&times;</Button>
                            {name}
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    item: state.items
});

export default connect(mapStateToProps, {getAllItems, deleteItem})(ShoppingList);
