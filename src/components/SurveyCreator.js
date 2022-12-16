import { useState } from "react";
import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";


const creatorOptions = {
  showLogicTab: true,
  isAutoSave: true,
  readOnly: false ,
  allowChangeThemeInPreview: true,
  allowEditExpressionsInTextEditor: false,
  allowModifyPages: false,
  pageEditMode: "single"};

export default function SurveyCreatorWidget(props) {
  let [creator, setCreator] = useState();

  if (creator === undefined) {
      const creatorOptions = {
    questionTypes: ["text", "checkbox", "radiogroup"]
  };
    creator = new SurveyCreator(creatorOptions);
    creator.saveSurveyFunc = (no, callback) => {
      console.log(JSON.stringify(creator.JSON));
      window.localStorage.setItem("survey-json", creator.text);

      callback(no, true);

      console.log(localStorage);
    };

    // creator.tabs().push({
    //   name: "survey-templates",
    //   title: "My Custom Tab",
    //   template: "custom-tab-survey-templates",
    //   action: () => {
    //     this.creator.makeNewViewActive("survey-templates");
    //   },
    //   data: {},
    // });

    // //this is for a webservice
    // saveSurveyJson(
    //     "https://your-web-service.com/",
    //     creator.JSON,
    //     saveNo,
    //     callback
    // );

    

    //this file is saved in localstorage
    // console.log(localStorage);

    setCreator(creator);
  }

  creator.JSON = props.json;

  return (
    <div style={{ height: "calc(100% - 70px)" }}>
      {/* <script type="text/html" id="custom-tab-survey-templates">
          {`<div id="test">TEST</div>`}
        </script> */}
      <SurveyCreatorComponent creator={creator} />
    </div>
  );
}



// function saveSurveyJson(url, json, saveNo, callback) {
//   const request = new XMLHttpRequest();
//   request.open('POST', url);
//   request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
//   request.addEventListener('load', () => {
//       callback(saveNo, true);
//   });
//   request.addEventListener('error', () => {
//       callback(saveNo, false);
//   });
//   request.send(JSON.stringify(json));
// }
