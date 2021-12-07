import React from "react";
import "./style.css";
import MedicalTreatmentList from './MedicalTreatmentList';

export default function App() {

  const medicalTreatmentListAsJson =
  '[ {"treatId": "000", "treatCourseId":"214367", "type": "long term", "category": "dementia", "name": "kamyar kumar", "startDate": "01-01-2020"} ,' +
    '{"treatId": "001", "treatCourseId":"214368", "type": "short term", "category": "knee injury", "name": "Angelina aryal", "startDate": "25-01-2020"} ,' +
    '{"treatId": "002", "treatCourseId":"214369", "type": "long term", "category": "epilepsy", "name": " BJ Mohhamed", "startDate": "21-03-2021"} ,' +
    '{"treatId": "003", "treatCourseId":"214370", "type": "long term", "category": "heart patient", "name": "jazzy singh", "startDate": "13-08-2016"} ,' +
    '{"treatId": "004", "treatCourseId":"214371", "type": "short term", "category": "hamstring injury", "name": "kenan ismail", "startDate": "11-11-2019"}]';

return (
    <div>
        <MedicalTreatmentList json={medicalTreatmentListAsJson} />
    </div>
  );
}
