import { ThemeProvider } from "styled-components";
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import theme from "./components/Theme";
import GlobalStyle from './components/GlobalStyle'
import Customer from './pages/Customer'
import Home from './pages/Home';
import Summary from './pages/Summary';
import Recruit from './pages/Recruit';
import Partners from "./pages/Partners";
import ScrollToTop from "./components/ScrollToTop";
import ContactTab from "./components/Contact/ContactTab";
import PlatForm from "./pages/PlatForm"
import Invest from "./pages/Invest";
import Apply from "./pages/Apply";
import Corporation from './pages/Corporation';
import Inherit from './pages/Inherit';
import Faq from "./pages/Faq";
import HelpDesk from "./pages/HelpDesk";

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <BrowserRouter>
          <ScrollToTop />
          <Route exact path="/" component={Home} />
          <Route exact path="/intro/summary" component={Summary}/>
          <Route exact path="/intro/summary?veiw=:id" component={Summary} />
          <Route exact path="/intro/partners" component={Partners} />
          <Route exact path="/intro/recruit" component={Recruit} />
          <Route exact path="/intro/recruit?system" component={Recruit} />
          <Route exact path="/intro/recruit?fp" component={Recruit} />
          <Route exact path="/intro/recruit?perment" component={Recruit} />
          <Route exact path="/intro/contact" component={ContactTab} />
          <Route exact path="/business/platform" component={PlatForm} />
          <Route exact path="/business/platform/:pagename" component={PlatForm} />
          <Route exact path="/business/invest" component={Invest} />
          <Route exact path="/business/invest/story/:id" component={Invest} />
          <Route exact path="/business/invest/:id" component={Invest} />
          <Route exact path="/business/apply" component={Apply} />
          <Route exact path="/business/apply?2" component={Apply} />
          <Route exact path="/business/apply?3" component={Apply} />
          <Route exact path="/corporation/apply" component={Apply} />
          <Route exact path="/inherit/apply" component={Apply} />
          <Route exact path="/corporation" component={Corporation} />
          <Route exact path="/corporation/:pagename" component={Corporation} />
          <Route exact path="/inherit" component={Inherit} />
          <Route exact path="/inherit/:pagename" component={Inherit} />
          <Route exact path="/customer" component={Customer} />
          <Route exact path="/customer/:id" component={Customer} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/faq?id" component={Faq} />
          <Route exact path="/helpdesk" component={HelpDesk} />
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
