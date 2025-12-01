import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FHIR from 'fhirclient';

const rootElement = document.getElementById('root');

const smartLaunch = () => {
  // Authorize application
  FHIR.oauth2
    .init({
      fhirServiceUrl: 'https://r4.ontoserver.csiro.au/fhir',
      clientId: 'a57d90e3-5f69-4b92-aa2e-2992180863c1',
      scope: "launch openid fhirUser online_access patient/AllergyIntolerance.cs patient/Condition.cs patient/Encounter.r patient/Immunization.cs patient/Medication.r patient/MedicationStatement.cs patient/Observation.cs patient/Patient.r patient/QuestionnaireResponse.crus user/Practitioner.r launch/questionnaire?role=http://ns.electronichealth.net.au/smart/role/new"
    })
    .then(client => {
      ReactDOM.render(<App client={client} />, rootElement);
    });
};

smartLaunch();