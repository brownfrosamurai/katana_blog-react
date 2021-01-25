import { Link } from 'react-router-dom';

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry Not Sorry</h2>
            <p>That Page cannot be Found</p>
            <Link to='/'> Back to home page ...</Link>
        </div>
    );
}
 
export default NotFound;