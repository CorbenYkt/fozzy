import React from 'react';
import './css/style.css';
import './css/myown.css';

import Home from './pages/Home';

function App() {
    return (
        <Home />
    );
}

export default App;

//git add dist -f
//git commit -m "deploy"
//git subtree push --prefix dist origin gh-pages