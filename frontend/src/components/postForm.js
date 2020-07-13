import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Col, Button } from 'react-bootstrap';
import * as actionCreators from '../actions';

class PostForm extends Component {
    state = {
        name: '',
        description: ''
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createPost(this.state)
        this.setState({
            name: '',
            description: ''
        })
    }
    
    render() {
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Row>
                        <Col>
                            <Form.Control name="name" className="mb-2" placeholder="Nombre" onChange={this.handleInputChange} value={this.state.name}/>
                        </Col>
                        <Col>
                            <Button type="submit" className="float-right mb-2">
                                Crear
                            </Button>
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Form.Group>
                <Form.Control name="description" as="textarea" placeholder="Descripción" onChange={this.handleInputChange} value={this.state.description}/>
                </Form.Group>
            </Form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        createPost: actionCreators.createPost
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(PostForm);