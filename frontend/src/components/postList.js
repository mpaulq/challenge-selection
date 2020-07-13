import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import * as actionCreators from '../actions';

class PostList extends Component {

    componentDidMount() {
        this.props.getAllPosts()
    }

    handleDelete = (id) => {
        if(window.confirm('¿Está seguro que quiere eliminar el post?'))
            this.props.deletePost(id)
    }

    render() {
        const { loading, posts, filterField } = this.props;
        const regex = new RegExp(`^${filterField}`, 'i')
        const filteredPosts = posts.filter(post => regex.test(post.name))
        return(
            <Table responsive striped bordered hover >
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    { loading && filteredPosts.length === 0 && <tr><td colSpan="3">Cargando...</td></tr>}
                    { !loading && filteredPosts.length === 0 && <tr><td colSpan="3">No hay posts que mostrar</td></tr> }
                    { filteredPosts.length !== 0 && filteredPosts.map((post) => {
                        return(
                            <tr key={post.id}>
                                <td>{post.name}</td>
                                <td>{post.description}</td>
                                <td><Button onClick={() => this.handleDelete(post.id)}>Eliminar</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        )
    }
}

const mapStateToProps = state => {
    return {...state}
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getAllPosts: actionCreators.fetchPosts,
        deletePost: actionCreators.delPost 
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);