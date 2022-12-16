import logo from "../logo.svg";

export function HomePage() {
  return (
    <div className="container">
      <div className="col-lg-3 centered">
        <img className="App-logo" src={logo} alt="AppSurvey"/>
      </div>
      <h1>Survey App</h1>
      <div className="col-lg-9 jumbotron">
        <p>
This app has been built using SurveyJS and React. This is a set of JavaScript components that allow the ability to build surveys / forms, store them in a database, and visualize survey results for data analysis.        </p>

        <ul>
          <li><a href="https://surveyjs.io/Documentation/Library?id=LibraryOverview" target="_blank">SurveyJS Library / Runner</a></li>
          <li><a href="https://surveyjs.io/Documentation/Survey-Creator?id=Survey-Creator-Overview" target="_blank">Survey Creator / Form Builder</a></li>
          <li><a href="https://surveyjs.io/Documentation/Pdf-Export?id=PdfExportOverview" target="_blank">PDF Export</a></li>
        </ul>
        <p></p>
        <h2>Form Maker</h2>
        <ul>
        <p>To create an Form go to 'Survey Creator' and make a survey using the creator tool.</p>
        <p>Make sure to save your form by clicking the save icon at the top right of the page. It should glow blue to reflect any unsaved changes but it autosaves changes if previewed.</p>
        </ul>
        <p></p>
        <h2>Patient Survey</h2>
        <ul>
        <p>To see the patient form I have created a standalone page called 'Survey for Patients'</p>
        <p>Due to the nature of the local app the responses are stored in the console. </p>
        </ul>
      </div>
    </div>
  );
  }
  