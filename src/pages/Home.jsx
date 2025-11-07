import HeroSection from "../components/HeroSection";
import 'bootstrap/dist/css/bootstrap.min.css';
import SecondContent from "../components/SecondContent";
import ThirdContent from "../components/ThirdContent";
import FourthContent from "../components/FourthContent";
import FifthContent from "../components/FifthContent";
import SixthContent from "../components/SixthContent";
import SeventhContent from "../components/SeventhContent";
import EightComponent from "../components/EightComponent";
import NinethComponent from "../components/NinethComponent";


function Home(){
  return(
    <div className="container-fluid " style={{margin:"0px", padding:"0px"}}>
      <HeroSection/>
      <SecondContent/>
      <ThirdContent/>
      <FourthContent />
      <FifthContent />
      <SixthContent />
      <SeventhContent />
      <EightComponent />
      <NinethComponent />
     
    </div>
  )
}
export default Home;