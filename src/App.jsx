import React, { lazy } from "react";
import { Route } from "react-router-dom";

import * as routes from "constants/routes";

import "./assets/styles/index.scss";

// Lazy Pages
const Homepage = lazy(() => import("./pages/homepage"));
const FavoritePropertyPage = lazy(() => import("./pages/favoritePropertyPage"));

const App = () => {
  return (
    <React.Suspense fallback={<></>}>
      {/* ROUTES */}
      <Route exact path={routes.HOMEPAGE} component={Homepage} />
      <Route
        exact
        path={routes.FAVORITE_PAGE}
        component={FavoritePropertyPage}
      />
    </React.Suspense>
  );
};

export default App;
