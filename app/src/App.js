import React from 'react';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import './assets/css/App.css';
// import Header from './components/Header';
import Header from "./containers/headers/headerOne";
// import ScrollToTop from "./helpers/ScrollToTop";
import LayoutOne from "./layouts";
import HomePage from "./pages/HomePage";
// import HomeOne from "./pages/HomeOne";
// import HomeTwo from "./pages/HomeTwo";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogLeftSidebar from "./pages/BlogLeftSidebar";
import BlogPost from "./pages/BlogPost";
import BlogPostLeftSidebar from "./pages/BlogPostLeftsSidebar";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import ServiceDetails from "./pages/ServiceDetails";
import ServiceDetailsLeftSidebar from "./pages/ServiceDetailsLeftSidebar";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <Router>
      {/* <ScrollToTop> */}
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/"}`}
            component={HomePage} />
          <Route
            path={`${process.env.PUBLIC_URL + "/home-one"}`}
            component={HomePage} />
          <Route
            path={`${process.env.PUBLIC_URL + "/about"}`}
            component={About} />
          <Route
            path={`${process.env.PUBLIC_URL + "/blog"}`}
            component={Blog} />
          <Route
            path={`${process.env.PUBLIC_URL + "/blog-left-sidebar"}`}
            component={BlogLeftSidebar} />
          <Route
            path={`${process.env.PUBLIC_URL + "/blog-post"}`}
            component={BlogPost} />
          <Route
            path={`${process.env.PUBLIC_URL + "/blog-post-left-sidebar"}`}
            component={BlogPostLeftSidebar} />
          <Route
            path={`${process.env.PUBLIC_URL + "/contact"}`}
            component={Contact} />
          <Route
            path={`${process.env.PUBLIC_URL + "/service"}`}
            component={Service} />
          <Route
            path={`${process.env.PUBLIC_URL + "/service-details"}`}
            component={ServiceDetails} />
          <Route
            path={`${process.env.PUBLIC_URL + "/service-details-left-sidebar"}`}
            component={ServiceDetailsLeftSidebar} />
          <Route
            path={process.env.PUBLIC_URL + "/not-found"}
            component={NotFound} />
          <Route exact component={NotFound} />
        </Switch>
      {/* </ScrollToTop> */}
    </Router>
  );
}

export default App;
