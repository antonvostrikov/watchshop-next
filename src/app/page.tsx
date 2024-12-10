import Showcase from "@/components/Showcase/Showcase";
import smartWatch from '../../public/images/smart-watch.jpg'
import rolex from '../../public/images/rolex.jpg'
import casio from '../../public/images/casio.jpg'
import clockBig from '../../public/images/clock-big.jpg'
import clockPurple from '../../public/images/clock-purple.jpg'
import clockOld from '../../public/images/clock-old.jpg'
import Tiles from "@/components/Tiles/Tiles";
import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Menu from "@/components/Header/Menu";

export default function Home() {
  return (
    <>
      <Header />
      <Menu />
      <Showcase pictureBig={smartWatch.src} pictureTop={rolex.src} pictureBottom={casio.src} />
      <Tiles />
      <Showcase pictureBig={clockBig.src} pictureTop={clockPurple.src} pictureBottom={clockOld.src} />
      <About />
      <Footer />
    </>
  );
}
