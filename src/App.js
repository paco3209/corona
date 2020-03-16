import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from './components/views/NavBar/NavBar';
import LandingPage from './components/views/LandingPage/LandingPage';
import Footer from './components/views/Footer/Footer';
import DetailPage from "./components/views/DetailPage/DetailPage";

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/paises" component={DetailPage} />
          
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
