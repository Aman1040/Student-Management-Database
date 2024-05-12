import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "Frontend Data Input:",
    description: `The frontend of the website contains a form where users can input their data. This data is stored in the state of the frontend application, typically using a framework like React.js. The form may include fields such as name, email, phone number, etc.`,
  },
  {
    label: "Fetching College Data",
    description:
      "Within the form, there's a dropdown/select option for choosing a college. This list of colleges is populated by fetching data from a MySQL database using Node.js on the backend. Specifically, it queries a table named college in the database to get the list of colleges available.",
  },
  {
    label: "Backend Processing with Node.js:",
    description:
      "Node.js is used on the backend to handle the logic for receiving data from the frontend. It uses HTTP methods like POST and GET to interact with the frontend. When the form is submitted, Node.js processes the data and performs operations such as validation, database updates, etc.",
  },
  {
    label: "Fetching College Name and ID",
    description:
      "When the user selects a college from the dropdown list, the frontend receives both the name of the college and its corresponding ID from the database. This ensures that the data sent to the backend includes accurate information about the chosen college",
  },
  {
    label: "Storing College ID in State",
    description: `Along with other user input, such as name and contact details, the frontend also stores the selected college's ID in its state. This is important for maintaining data integrity and ensuring that the correct college information is associated with the user's data`,
  },
  {
    label: "Updating MERN Database",
    description: `Finally, when the user submits the form, all the collected data, including the college ID, is sent to the MERN (MongoDB, Express.js, React.js, Node.js) stack database. The backend processes this data, validates it, and then updates the database accordingly, creating or updating a record for the user with their details and chosen college`,
  },
];

export default function Description() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>
            In summary, this project involves a seamless flow of data from the
            frontend to the backend and ultimately to the database, ensuring
            that user inputs are accurately captured, processed, and stored for
            future use.
          </Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
