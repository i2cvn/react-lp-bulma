import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Slider from "react-slick";
import BlogGrid from "./components/blog/BlogGrid";
import JumboHeader from "./components/landing/JumboHeader";
import MainSlider from "./components/landing/MainSlider";
import HighlightStats from "./components/landing/HighlightStats";
import OurServices from "./components/business/OurServices";
import OurTechs from "./components/business/OurTechs";
import AboutUs from "./components/business/AboutUs";
import Footer from "./components/layout/Footer";
import NavBar from "./components/layout/NavBar";
import PromoLetCollab from "./components/landing/PromoLetCollab";
import Testimonial from "./components/business/Testimonial";
import myTestimonials from "./data/myTestimonials";

export default function App() {
  return (
    <div>
      <Router>
        <NavBar />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Home />
          </Route>
          {/* <Route path="/blogs">
            <Blogs />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
function getTestimonial(groupIndex) {
  const testimonialData = myTestimonials[groupIndex - 1];
  return (
    <Testimonial
      text={testimonialData.say.text}
      cite={
        testimonialData.person.name +
        " " +
        testimonialData.person.role +
        " " +
        testimonialData.person.org
      }
    />
  );
}
function Home() {
  return (
    <>
      <JumboHeader
        more={<MainSlider style={{ paddingTop: "1rem" }} />}
        footer={
          <div className="container" style={{ margin: "auto", width: "80%" }}>
            <HighlightStats style={{ height: "60px" }} />
          </div>
          // <OurTechs/>
        }
      />
      {/* <AboutMe /> */}

      <OurServices startEachGroup={getTestimonial} />

      <ExtraSections />
      {/* <ContactMe/> */}
    </>
  );
}
function ExtraSections() {
  return (
    <>
      <PromoLetCollab />
      {/* <MyHighlightCircleBlock/> */}
    </>
  );
}
// function Blogs() {
//   return (
//     <div>
//       <h2>Blogs</h2>
//       <BlogGrid blogs={blogsData} />
//     </div>
//   );
// }
function About() {
  return (
    <>
      <AboutUs />
    </>
  );
}
