import React from 'react';
import SectionHeader from './Sections/SectionHeader/SectionHeader';
import SectionHeader2 from './Sections/SectionHeader2/SectionHeader2';
import SectionFeature from './Sections/SectionFeature/SectionFeature';
import SectionFeatureTwo from './Sections/SectionFeatureTwo/SectionFeatureTwo'
import SectionPricing from './Sections/SectionPricing/SectionPricing';
import SectionTestimonials from './Sections/SectionTestimony/SectionTestimony';
import SectionContact from './Sections/SectionContact/SectionContact';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <>
        <SectionHeader2 />
        <SectionFeature />
        <SectionFeatureTwo />
        <SectionPricing />
        <SectionTestimonials />
        <SectionContact />
      </>
    )
  }
}

export default App;
