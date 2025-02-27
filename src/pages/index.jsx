import Career from "../components/career";
import Navbar from "../components/nav-bar";
import ShowCase from "../components/showcase";
import Meet from "../components/meet";
import Course from "../components/course";
import Opportunity from "../components/opportunity";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <ShowCase />
      <Career />
      <Meet />
      <Course />
      <Opportunity />
      <Footer />
    </div>
  )
}