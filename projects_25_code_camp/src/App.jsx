
import Accordion from "./components/accordion/Accordion";
import RandomColor from './components/random_color_generator/RandomColor'
import Rating from './components/start-rating/Rating'
import Sliding from './components/sliders/Sliding'
import ImageSlider from "./components/sliders/ImageSlider";
import LoadMoreProducts from './components/load-more/LoadMoreProducts'
import TreeView from './components/tree-recursive-menu/Menu'
import data from './components/tree-recursive-menu/data.jsx'
import QrCodeGeneration from  './components/qr-code-generation/qr-code.jsx'
import LightDarkMode from './components/light-dark-theme/theme.jsx'
import Themes from './components/light-dark-theme/theme-mode.jsx'
import ScrollIndicator from './components/scroll-indicator/scroll.jsx'
import TestingTabs from './components/custom-tabs/test-tabs.jsx'
import GitHubLoad from './components/git-hub-profile-finder/git-hub-load.jsx'
import SearchAutoComplete from './components/search-auto-complete/search-users.jsx'
import TicTacToe from './components/tic-tac-toe/game.jsx'
import UseFetchHook from './components/custom-hooks/testFetch.jsx'
import ShowHideData from './components/custom-hooks/test-outside-click.jsx'
import FeatureFlagGlobalState from "./components/feature-flags/context/create-context.jsx";
import FeatureFlags from "./components/feature-flags/main.jsx";

import Scroll from './components/scroll-top-to-bottom/scroll.jsx'
import ScrollParticularSection from './components/scroll-top-to-bottom/scroll-particular-section.jsx'

function App() 
{

  console.log("jsonData");
  
  return (
    <div className="flex flex-col gap-1 p-2">
      
      <Accordion />

      <RandomColor />

      <Rating  numStars='6' />

      <Sliding num='5' />

      <ImageSlider />

      <LoadMoreProducts />
      
      <TreeView menu = {data} />

      <QrCodeGeneration />

      <LightDarkMode />

      <Themes />

      <ScrollIndicator />

      <TestingTabs  />

      <GitHubLoad />

      <SearchAutoComplete />

      <TicTacToe />

      <UseFetchHook />

      <ShowHideData />

      <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>

      <Scroll />
      <ScrollParticularSection />

    </div>
  )
}

export default App