import logo from './logo.svg';
import './App.css';
import BloodbankRegistrationForm from './componenet/BloodBank/BloodbankRegistrationForm';
import HospitalRegistrationForm from './componenet/Hospital/HospitalRegistrationForm';
import DonorRegistrationForm from'./componenet/Donor/DonorRegistrationForm';
import LoginForm from './componenet/Login/LoginForm'
import { Footer } from './componenet/Frontpage/Footer';
import { Header } from './componenet/Frontpage/Header';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './componenet/Frontpage/Home';
import SignUp from './componenet/Frontpage/SignUp';
import Menubar from './componenet/Frontpage/Menubar';
import BloodBankHome from './componenet/BloodBank/BloodBankHome';
import HospitalHome from './componenet/Hospital/HospitalHome';
import Faq from './componenet/Frontpage/faq';
import ContactUs from './componenet/Frontpage/contactUs';
import BloodBankProfile from './componenet/BloodBank/BloodBankProfile';
import BloodBankStock from './componenet/BloodBank/BloodBankStock';
import BloodRequest from './componenet/BloodBank/BloodRequest';
import DonorRequest from './componenet/BloodBank/DonorRequest';
import DonorHome from './componenet/Donor/DonorHome';
import BloodStockForm from './componenet/BloodBank/BloodStockForm';
import AdminHome from './componenet/Admin/AdminHome';
import DonateRequest from './componenet/Donor/DonateRequest';
import RequestStatus from './componenet/BloodBank/RequestStatus';
import ApprovedDonorRequest from './componenet/BloodBank/ApprovedDonorRequest';
import RejectedDonorRequest from './componenet/BloodBank/RejectedDonorRequest';
import PendingDonorRequest from './componenet/BloodBank/PendingDonorRequest';
import HospitalProfile from './componenet/Hospital/HospitalProfile';
import PatientProfile from './componenet/Patient/PatientProfile';
import PatientList from './componenet/Patient/PatientList';
import HosRequestStatus from './componenet/HospitalRequest/HosRequestStatus';
import PendingHospitalRequest from './componenet/HospitalRequest/PendingHospitalRequest';
import ApprovedHospRequest from './componenet/Patient/AceptHosRequest';
import AllRequest from './componenet/HospitalRequest/AllRequest';
import AcceptedHospRequest from './componenet/HospitalRequest/AcceptedRequest';
import RejectedHospitalRequest from './componenet/HospitalRequest/RejectedRequest';
import RequestToBlood from './componenet/Patient/RequestToBlood';
import PatientRegistration from './componenet/Patient/PatientRegistation';

function App() {
  return (
    <div className="App">
       <Header/>
       <Menubar/>
       <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/bloodbankreg" element={<BloodbankRegistrationForm/>}/>
       <Route exact path="/hospitalreg" element={<HospitalRegistrationForm/>}/>
       <Route exact path="/donorreg" element={<DonorRegistrationForm/>}/>
       <Route exact path="/signIn" element={<LoginForm/>}/>
       <Route exact path="/bloodbankhome" element={<BloodBankHome/>}/>
       <Route exact path="/hospitalhome" element={<HospitalHome/>}/>
       <Route exact path="/faq" element={<Faq/>}/>
       <Route exact path='/contactUs'element={<ContactUs/>}/>
       <Route exact path="/bloodbankprofile" element={<BloodBankProfile/>}/>
       <Route exact path="/bloodstock" element={<BloodBankStock/>}/>
       <Route exact path="/bloodrequest" element={<BloodRequest/>}/>
       <Route exact path="/donorrequest" element={<DonorRequest/>}/>
       <Route exact path='/donorhome' element={<DonorHome/>}/>
       <Route exact path='/bloodstockform' element={<BloodStockForm/>}/>
       <Route exact path='/adminhome' element={<AdminHome/>}/>
       <Route exact path='/donaterequest' element={<DonateRequest/>}/>
       <Route exact path='/requestpage' element={<RequestStatus/>}/>
       <Route exact path='/pendingdonorrequest' element={<PendingDonorRequest/>}/>
       <Route exact path='/accepteddonorrequest' element={<ApprovedDonorRequest/>}/>
       <Route exact path='/rejecteddonorrequest' element={<RejectedDonorRequest/>}/>
       <Route exact path='/hospitalProfile' element={<HospitalProfile/>}/>
       <Route exact path="/PatientList" element={<PatientList/>}/>
       <Route exact path="/PatientProfile/:patient_id" element={<PatientProfile/>}/> 
       <Route exact path="/RequestToBlood/:patient_id" element={<RequestToBlood/>}/>
       <Route exact path="/PatientRegistation" element={<PatientRegistration/>}/>
       <Route exact path="/RequestStatus" element={<HosRequestStatus/>}/>
       <Route exact path="/PendingHospitalRequest" element={<PendingHospitalRequest/>}/> 
      <Route exact path="/ApprovedHospRequest" element={<ApprovedHospRequest/>}/> 
      <Route exact path="/AllRequest" element={<AllRequest/>}/> 
      <Route exact path="/AcceptedHospitalRequest" element={<AcceptedHospRequest/>}/> 
      <Route exact path="/RejectedHospitalRequest" element={<RejectedHospitalRequest/>}/> 
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
