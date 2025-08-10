import './App.css'
import { CallSchedulerProvider } from './context/CallSchedulerContext';
import CallScheduler from './pages/CallScheduler'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import "react-loading-skeleton/dist/skeleton.css";
import { Route, Routes } from 'react-router-dom';
import NutritionFunnelRoutes from './routes/NutritionFunnelRoutes';
import ScrollToTop from './components/ScrollToTop';
import {Toaster} from "react-hot-toast"

function App() {
 

  return (
      <CallSchedulerProvider>
        <ScrollToTop />
        <Toaster position='top-right'  />
        <Routes>
          <Route path="/" element={<CallScheduler />} />
        </Routes>
        <NutritionFunnelRoutes />
      </CallSchedulerProvider>
  )
}

export default App
