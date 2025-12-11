import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FHIR from 'fhirclient';

const smartLaunch = () => {
  // Authorize application
  FHIR.oauth2
    .init({
      clientId: 'a57d90e3-5f69-4b92-aa2e-2992180863c1',
      scope: "launch openid fhirUser online_access patient/Patient.ru"
    })
    .then(client => {
      ReactDOM.createRoot(document.getElementById('root')).render(<App client={client} />);
    });
};

smartLaunch();
