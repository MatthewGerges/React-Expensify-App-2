import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        404! - <Link to = "/">Go home</Link>
    </div>
);

//difference between link and href: link uses client side routing
//anchor tag uses server side routing and causes whole page to refresh
//use link for internal links and anchor for external links that need refresh anyway

export default NotFoundPage;