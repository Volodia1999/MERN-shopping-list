import React from 'react';
import {Button, Container, Form, Input, Label, Modal, ModalBody, ModalHeader} from "reactstrap";
import {connect} from 'react-redux';
import {addItem} from '../actions/itemsAction';

class ItemModal extends React.Component {
    state = {
        modal: false,
        name: ''
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    saveItem = (e) => {
        e.preventDefault();

        const newItem = {
            name: this.state.name
        };

        //Add item via action
        this.props.addItem(newItem);

        //close Modal
        this.toggle();
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    };

    render() {
        return (
            <Container>
                <Button color='dark' className='mt-5' onClick={this.toggle}>
                    Add Item
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Add new Item
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.saveItem}>
                            <Label htmlFor='item'>Item</Label>
                            <Input
                                type='text'
                                id='item'
                                name='name'
                                placeholder='Add new item'
                                onChange={this.onChange}
                            />
                            <Button
                                color='dark'
                                className='mt-3'
                                block>Add item</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </Container>
        )
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {addItem})(ItemModal);
