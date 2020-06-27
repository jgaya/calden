import React, { useRef, useEffect, useContext } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';

import { Context } from "./components/Wrapper";

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {
  const context = useContext(Context);
  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    
    

    <ScrollReveal
      ref={childRef}
      children={() => (
        <div>
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />

        </Switch>
        <select value={context.locale} onChange={context.selectLang}>
          <option value="en-US">English</option>
          <option value="es-ES">Español</option>
        </select>
        </div>
      )} />
    
  );
}

export default App;
