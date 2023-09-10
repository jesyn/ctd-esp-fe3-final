import { Box, Paper, Button } from "@mui/material";
import React, { useState } from "react";
import confetti from "canvas-confetti";
import { useFormContext } from "react-hook-form";
import Stepper from "../Stepper/Stepper";
import PersonalInfoForm from "./PersonalInfoForm";
//import AdressInfoForm from "./AdressInfoForm";
//import PaymentInfoForm from "./PaymentInfoForm";

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
          <Stepper />
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <PersonalInfoForm />
          {/* <AdressInfoForm /> */}
          {/*    <PaymentInfoForm /> */}

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="outlined">Anterior</Button>
            <Button variant="outlined">Siguiente</Button>
            {/* <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Enviar
            </Button> */}
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default Forms;
