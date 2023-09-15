import React from "react";

import DefaultHoc from './HOC/DefaultHoc.js';
import HomePage from './pages/Homepage';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
return(

<div>
<DefaultHoc path="/" exact component={HomePage}/>
</div>

  );
}
export default App;
