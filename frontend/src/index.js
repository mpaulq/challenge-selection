import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Jumbotron } from 'react-bootstrap';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import postReducer from './reducers';
import PostFilter from './components/postFilter';
import PostList from './components/postList';
import PostForm from './components/postForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(postReducer, composeEnhancer(applyMiddleware(thunk)));

class App extends React.Component{
  render() {
    return(
      <Container>
        <h1>Aplicación Posts</h1>
        <Jumbotron>
          <PostFilter></PostFilter>
          <PostList></PostList>
          <hr />
          <PostForm></PostForm>
        </Jumbotron>
      </Container>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
