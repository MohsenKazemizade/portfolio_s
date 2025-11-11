import { Fragment } from "react";
import Header from "@/components/Header";
import ScrollBar from "@/components/ScrollBar";
import Separator from "@/components/Separator";
import useRevealAnimations from "@/hooks/useRevealAnimations";
import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import Facts from "@/components/sections/Facts";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Clients from "@/components/sections/Clients";
import Blog from "@/components/sections/Blog";
import Copyright from "@/components/sections/Copyright";
export default function HomePage() {
  useRevealAnimations();
  return (
    <Fragment>
      <div className="page-content">
        <Header />
        <div id="wrapper">
          <main className="flex-column-mobile">
            <Home />
            <About />
            <Separator type="down" />
            <Facts />
            <Separator type="up" />
            <Portfolio />
            <Separator type="down" />
            <Testimonials />
            <Separator type="up" />
            <Contact />
            <Separator type="down" />
            <Clients />
            <Separator type="up" />
            <Blog />
            <Separator type="down" />
            <Copyright />
          </main>
        </div>
        <ScrollBar />
      </div>
    </Fragment>
  );
}
