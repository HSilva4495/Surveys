import React from "react";
import { Model, StylesManager } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.css";

import { json } from "../data/survey_json.js";
// import { json } from "localdata";


StylesManager.applyTheme("defaultV2");

function onValueChanged(_, options) {
  console.log("New value: " + options.value);
}

function onComplete(survey) {
  console.log("Survey complete! Results: " + JSON.stringify(survey.data)
  );
      const alertResults = useCallback((survey) => {
    const results = JSON.stringify(survey.data);
    alert(results);
    // saveSurveyResults(
    //   "https://your-web-service.com/" + SURVEY_ID,
    //   survey.data
    // )
  }, []);
}

export function SurveyPage() {
  const model = new Model(localStorage.getItem('survey-json'));
  return (
    <div className="container">
      <h1>Patient Survey</h1>
      <Survey
        model={model}
        onComplete={onComplete}
        onValueChanged={onValueChanged}
      />
    </div>
  );
}
