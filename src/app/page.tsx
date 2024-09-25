import Header from "@/components/Header/Header";
import Showcase from "@/components/Showcase/Showcase";

import smartWatch from '../../public/images/smart-watch.jpg'
import rolex from '../../public/images/rolex.jpg'
import casio from '../../public/images/casio.jpg'

export default function Home() {
  return (
    <div>
      <Header />
      <Showcase pictureBig={smartWatch.src} pictureTop={rolex.src} pictureBottom={casio.src} />
    </div>
  );
}
