import {BrowserRouter, Route} from 'react-router-dom';
import Home from '../pages/home';
import MovieDescription from '../pages/movieDescription';

const Router = () => (
    <BrowserRouter>
        <Route path='/' component={Home} exact />
        <Route path='/movies/:id' component={MovieDescription} />
    </BrowserRouter>
);

export default Router;