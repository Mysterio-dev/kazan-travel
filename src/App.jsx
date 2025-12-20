

import NavigationMenu from './components/layout/NavigationMenu/NavigationMenu';
import PersonalDataForm from './components/forms/PersonalDataForm/PersonalDataForm';
import OnboardAmenities from './components/blocks/OnboardAmenities/OnboardAmenities';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';



function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />





{/* Main content */}
<main className="flex-grow">
  <div className="max-w-[1390px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
    <NavigationMenu />

    <div className="mt-6 sm:mt-8 space-y-6 sm:space-y-8 lg:space-y-0 lg:grid lg:grid-cols-[1fr_380px] lg:gap-8">

      <div className="space-y-8">
        <PersonalDataForm />
       
      </div>

      <div className="space-y-8">
       <OnboardAmenities />
      </div>
      
    </div>
  </div>
</main>


{/* Main content */}



      <Footer />
    </div>
  )
}

export default App
