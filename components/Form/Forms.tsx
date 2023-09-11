import { Box, Paper, Button } from "@mui/material";
import React, { useCallback, useMemo, useState } from "react";
import confetti from "canvas-confetti";
import { useFormContext } from "react-hook-form";
import PersonalInfoForm from "./PersonalInfoForm";
import StepperForm from "../Stepper/Stepper";
import AdressInfoForm from "./AdressInfoForm";
import PaymentInfoForm from "./PaymentInfoForm";

const initialData = {
  personalData: {
    name: "",
    lastName: "",
    email: "",
  },
  addressData: {
    address: "",
    department: "",
    city: "",
    province: "",
    postalCode: "",
  },
  paymentData: {
    cardNumber: "",
    cardHolderName: "",
    expirationDate: "",
    securityCode: "",
  },
};

const Forms = () => {
  const { handleSubmit } = useFormContext();

  const [data, setData] = useState(initialData);

  const [currentStep, setCurrentStep] = useState(1);

  const [hasErrors, setHasErrors] = useState(false);

  const onNextStep = () => {
    if (currentStep === 3 || hasErrors) {
      return;
    } else {
      setCurrentStep(currentStep + 1);
      setHasErrors(false);
    }
  };

  const onPreviousStep = () => {
    if (currentStep === 1) {
      return;
    } else {
      setCurrentStep(currentStep - 1);
      setHasErrors(false);
    }
  };

  const onSubmit = (data: any) => {
    console.log(data);
    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };

  return (
    <Box sx={{ maxWidth: "500px" }}>
      <Paper
        elevation={1}
        sx={{ p: "32px", display: "flex", flexDirection: "column", gap: 3 }}
      >
        <Box>
          <StepperForm activeStep={currentStep - 1} />
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          {currentStep === 1 && (
            <PersonalInfoForm setHasErrors={setHasErrors} />
          )}
          {currentStep === 2 && <AdressInfoForm setHasErrors={setHasErrors} />}
          {currentStep === 3 && <PaymentInfoForm setHasErrors={setHasErrors} />}

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="outlined"
              sx={{ opacity: currentStep === 1 ? 0 : 100 }}
              onClick={onPreviousStep}
            >
              Anterior
            </Button>

            <Button
              variant="outlined"
              sx={{ opacity: currentStep === 3 ? 0 : 100 }}
              onClick={onNextStep}
            >
              Siguiente
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ display: currentStep === 3 ? "block" : "none" }}
            >
              Enviar
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default Forms;
