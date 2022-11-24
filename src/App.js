import './App.css';
import Banner from './components/banner';
import FormLoan from './components/form';
import Menu from './components/menu';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import AdvantagesSection from './components/sections/advantages';
import WhyUs from './components/sections/whyUs';
import StepSection from './components/sections/step';
import HaveQuestionSection from './components/sections/haveQuestion';
function App() {
  const [dataForm, setDataForm] = useState({
    email: "",
    amount: "",
    ssn: ""
  })
  const navigate = useNavigate();
  const goToPosts = () => {
    navigate({
      pathname: '/form',
      search: `apply?manual=1&=&requested_amount=${dataForm.amount}&email=${dataForm.email}&last4ssn=${dataForm.ssn}`,
    });
    window.location.reload();
  }
  const onChangeDataForm = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    })
    console.log(dataForm)
  }
  return (
    <div className='!pb-10'>
      {/* <Menu /> */}
      <Banner />
      <div className='absolute w-full top-0 z-50'>
        <Menu />
        <div className=' myContainer grid grid-cols-2'>
          <div></div>
          <div>
            <div className='text-[2.875rem] font-black text-center w-[75%] mx-auto my-10'>
              Get Your Personal Loan Up To $5000
            </div>
            <div>
              <FormLoan
                onChangeDataForm={onChangeDataForm}
                goToPosts={goToPosts}
                dataForm={dataForm}
              />
            </div>
          </div>
        </div>
      </div>
      <AdvantagesSection />
      <WhyUs />
      <StepSection />
      <HaveQuestionSection/>
    </div>
  );
}

export default App;
