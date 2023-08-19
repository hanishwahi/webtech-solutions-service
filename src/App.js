import './App.css';
import './Style/Style.css'
import './Style/Responsive.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import OurTeam from './Pages/Our Team/OurTeam';
import About from './Pages/About/About';
import DigitalMarketing from './Pages/DigitalMarketing/DigitalMarketing';
import WebDevelopment from './Pages/Web Development/WebDevelopment';
import GraphicDesign from './Pages/Graphic Design/GraphicDesign';
import Service from './Pages/Service/AllService';
import ScrollToTop from './Pages/ScrollToTop';
import PageNotFound from './Pages/PageNotFound';
import ContactForm from './Pages/ContactForm/Contact';
import AppDevelopment from './Pages/App Development/AppDevelopment'
import LetsWorkTogether from './Pages/LetsWorkTogether';
import Clients from './Pages/Clients/Clients';
import LandingPage from './Pages/Landing Page/LandingPage';
import Seo from './Pages/Seo/Seo';
import Career from './Pages/Career/Career';
import ThankYou from './Pages/Landing Page/ThankYou';
import PrivacyPolicy from './Pages/Privacy-Policy/PrivacyPolicy';
import PPC from './Pages/PPC/PPC';
import ContentMarketing from './Pages/Content Marketing/ContentMarketing';
import SMO from './Pages/SMO/SMO';
import ORM from './Pages/ORM/ORM';
import SMM from './Pages/SMM/SMM';
import BlogDetails from './Pages/Blog/BlogDetails';
// import Blogs from './Pages/Blog/Blogs';
import BlogCategory from './Pages/Blog/BlogCategory';
import Training from './Pages/Training/Training';
import BlogPage from './Pages/Blog-New/BlogPage';
import Blog1 from './Pages/Blog-New/blog-detail/blog-1';
import Blog2 from './Pages/Blog-New/blog-detail/Blog-2';
import Blog3 from './Pages/Blog-New/blog-detail/Blog-3';
import Portfolio from './Pages/Portfolio/Portfolio';
 

function App() {
   
  
  return (
    <>
       
          <>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/team' element={<OurTeam />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact-us' element={<ContactForm />} />
              {/* <Route path='/blogs' element={<Blogs />} /> */}
              <Route path='/blog/:title' element={<BlogDetails />} />
              <Route path='/blog/category/:category' element={<BlogCategory />} />
              <Route path='/services' element={<Service />} />
              <Route path='/clients' element={<Clients />} />
              <Route index path='/digital-marketing-service' element={<LandingPage />} />
              <Route path='/digital-marketing' element={<DigitalMarketing />} />
              <Route path='/web-development' element={<WebDevelopment />} />
              <Route path='/app-development' element={<AppDevelopment />} />
              <Route path='/graphic-design' element={<GraphicDesign />} />
              <Route path='/seo-service' element={<Seo />} />
              <Route path='/career' element={<Career />} />
              <Route path='/thankyou' element={<ThankYou />} />
              <Route path='/privacy-policy' element={<PrivacyPolicy />} />
              <Route path='/ppc-service' element={<PPC />} />
              <Route path='/content-marketing' element={<ContentMarketing />} />
              <Route path='/smo-service' element={<SMO />} />
              <Route path='/orm-service' element={<ORM />} />
              <Route path='/smm-service' element={<SMM />} />
              <Route path='/training-development' element={<Training />} />
              <Route path='*' element={<PageNotFound />} />
              <Route path='/portfolio' element={<Portfolio/>} />
              <Route path='/blogs' element={<BlogPage/>} />
              <Route path='/blogs/Golden-Rules-for-Elevating-Your-Creative-Vision' element={<Blog1/>} />
              <Route path='/blogs/How-to-Improve-Your-Website-Visibility' element={<Blog2/>} />
              <Route path='/blogs/Exploring-the-Future-of-Website-Development' element={<Blog3/>} />

            </Routes>
            <LetsWorkTogether />
            <ScrollToTop /></>
        
    </>
  );
}

export default App;
