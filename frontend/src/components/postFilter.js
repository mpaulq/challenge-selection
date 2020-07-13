import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import { Form, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class PostFilter extends Component {
    state = {
        filter: ''
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.filterPosts(this.state.filter)
    }

    render() {
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Row>
                    <Col>
                        <Form.Control name="filter" className="mb-2" placeholder="Filtro" onChange={this.handleInputChange}/>
                    </Col>
                    <Col>
                        <Button type="submit" className="float-right mb-2">
                            Buscar
                        </Button>
                    </Col>
                </Form.Row>
            </Form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        filterPosts: actionCreators.filterPosts
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(PostFilter);