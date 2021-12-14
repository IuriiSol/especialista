import Header from "./components/Header/Header";
import MainScreen from "./components/MainScreen/MainScreen";
import Categories from "./components/Categories/Categories";
import AboutUs from "./components/AboutUs/AboutUs";
import AddNewProfile from "./state/addNewProfile";
import OnModeration from "./state/onModeration";
import Mechanics from "./components/Categories/Category/Mechanic"
import Beauty from "./components/Categories/Category/Beauty"
import IT from "./components/Categories/Category/IT"
import Imobiliario from "./components/Categories/Category/Imobiliario"
import Medicine from "./components/Categories/Category/Medicine"
import Photographer from "./components/Categories/Category/Photographer"
import Tattoo from "./components/Categories/Category/Tattoo"
import Insurance from "./components/Categories/Category/Insurance"
import ElectronicRepair from "./components/Categories/Category/ElectronicRepair"
import BabySitter from "./components/Categories/Category/BabySitter"
import Sauna from "./components/Categories/Category/Sauna"
import Transportation from "./components/Categories/Category/Transportation"
import Cafe from "./components/Categories/Category/Cafe"
import ClothingRepair from "./components/Categories/Category/ClothingRepair"
import Cleaning from "./components/Categories/Category/Cleaning"
import HomeRepair from "./components/Categories/Category/HomeRepair"
import PastryChef from "./components/Categories/Category/PastryChef"
import Guide from "./components/Categories/Category/Guide"
import Teacher from "./components/Categories/Category/Teacher"
import Ferms from "./components/Categories/Category/Ferms"
import Translator from "./components/Categories/Category/Translator"
import Sport from "./components/Categories/Category/Sport"
import Handmade from "./components/Categories/Category/Handmade"
import Other from "./components/Categories/Category/Other"
import Search from "./components/SearchComponent/Search";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import StoreContext from "./StoreContext";
import { useUserContext } from "./context/userContext";
import Auth from "./components/auth";
import Footer from "./components/Footer/Footer";


function App() {
  const { user } = useUserContext();
  return (
    <StoreContext.Consumer>
    {Data => (
      <>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" name="MainScreen"><MainScreen props={Data}/></Route>
          <Route path="/searchResult" name="Search"><Search props={Data}/></Route>
          <Route path="/categories" name="Categories" component={Categories} />
          <Route path="/aboutUs" name="AboutUs"><AboutUs props={Data}/></Route>
          <Route path="/addProfile" name="AddProfile" component={AddNewProfile} />
          <Route path="/admin" name="OnModeration"> {user ? <OnModeration /> : <Auth />} </Route>
          {/*/////////////////////////////////////////// Categories ///////////////////////////////////////////*/}
          <Route path="/it" name="IT"><IT props={Data}/></Route>
          <Route path="/carRepair" name="Mechanics"><Mechanics props={Data}/></Route>
          <Route path="/beauty" name="Beauty"><Beauty props={Data}/></Route>
          <Route path="/imobiliario" name="Imobiliario"><Imobiliario props={Data}/></Route>
          <Route path="/medicine" name="Medicine"><Medicine props={Data}/></Route>
          <Route path="/sauna" name="Sauna"><Sauna props={Data}/></Route>
          <Route path="/photographer" name="Photographer"><Photographer props={Data}/></Route>
          <Route path="/tattoo" name="Tattoo"><Tattoo props={Data}/></Route>
          <Route path="/insurance" name="Insurance"><Insurance props={Data}/></Route>
          <Route path="/electronicRepair" name="ElectronicRepair"><ElectronicRepair props={Data}/></Route>
          <Route path="/babySitter" name="BabySitter"><BabySitter props={Data}/></Route>
          <Route path="/transportation" name="Transportation"><Transportation props={Data}/></Route>
          <Route path="/cafe" name="Cafe"><Cafe props={Data}/></Route>
          <Route path="/сlothingRepair" name="ClothingRepair"><ClothingRepair props={Data}/></Route>
          <Route path="/сleaning" name="Cleaning"><Cleaning props={Data}/></Route>
          <Route path="/homeRepair" name="HomeRepair"><HomeRepair props={Data}/></Route>
          <Route path="/pastryChef" name="PastryChef"><PastryChef props={Data}/></Route>
          <Route path="/guide" name="Guide"><Guide props={Data}/></Route>
          <Route path="/teacher" name="Teacher"><Teacher props={Data}/></Route>
          <Route path="/ferms" name="Ferms"><Ferms props={Data}/></Route>
          <Route path="/translator" name="Translator"><Translator props={Data}/></Route>
          <Route path="/sport" name="Sport"><Sport props={Data}/></Route>
          <Route path="/handmade" name="Handmade"><Handmade props={Data}/></Route>
          <Route path="/other" name="Other"><Other props={Data}/></Route>
          <Footer/>
        </div>
    </BrowserRouter>
      </>
    )}
    </StoreContext.Consumer>
  );
}

export default App;
