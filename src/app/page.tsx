import React from "react";
import Hero from "./components/hero";
import FirstHero from "./components/firsthero";
import Sechero from "./components/secondhero";
import ThirdSec from "./components/thirdhero";
import ForthHero from "./components/forthhero";
import FifthHero from "./components/fifthhero";
import SixHero from "./components/sixthhero";
import SevenHero from "./components/sevenhero";
import EightHero from "./components/eighthero";
import NineHero from "./components/ninthhero";
import SearchProducts from "./components/searchbar/searchproduct";
import SanityChefData from "./components/Sanitychef";
import SanityHomeData from "./components/Sanityfood";
export default function Home() {
  return (
    <div>
      
      <Hero/>
      <SanityHomeData/>
  <SanityChefData/>
      <FirstHero/>

      <SearchProducts/>

<Sechero/>
<ThirdSec/>
<ForthHero/>
<FifthHero/>
<SixHero/>
<SevenHero/>
<EightHero/>
<NineHero/>







    </div>
  );
}