import { Typography } from "@mui/material";
import React, { useState, ChangeEvent, FocusEvent } from "react";
import Cards from "react-credit-cards-2";
import InputCustom from "../InputCustom/InputCustom";
import { useFormContext } from "react-hook-form";

interface cardState {
  cardNumber: string;
  expiry: string;
  cvc: string;
  name: string;
  focus: string;
}

const PaymentInfoForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const [state, setState] = useState<cardState>({
    cardNumber: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (e: FocusEvent<HTMLInputElement>) => {
    setState((prev) => ({ ...prev, focus: e.target.name }));
  };

  return (
    <div>
      <Typography variant="h5" mb={2}>
        Datos de pago
      </Typography>

      <Cards
        number={state.cardNumber}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />

      <form>
        <input
          type="number"
          name="cardNumber"
          placeholder="Card Number"
          value={state.cardNumber}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
      </form>

      <InputCustom
        name="cardNumber"
        label="Número de la tarjeta"
        type="text"
        control={control}
        defaultValue=""
        placeholder="eg: 4242424242424242"
        error={errors.name ? true : false}
        //messageError={errors.name?.message}
        //value={state.cardNumber}
        //onChange={handleInputChange}
        //onFocus={handleInputFocus}
      />

      <InputCustom
        name="cardHolderName"
        label="Nombre del titular"
        type="text"
        control={control}
        defaultValue=""
        placeholder="eg: Laura Martinez"
        error={errors.name ? true : false}
        //messageError={errors.name?.message}
      />
      <InputCustom
        name="expirationDate"
        label="Fecha de expiración"
        type="text"
        control={control}
        defaultValue=""
        placeholder="eg: 12/26"
        error={errors.name ? true : false}
        //messageError={errors.name?.message}
      />

      <InputCustom
        name="securityCode"
        label="código de seguridad"
        type="password"
        control={control}
        defaultValue=""
        placeholder="eg: 123"
        error={errors.name ? true : false}
        //messageError={errors.name?.message}
      />
    </div>
  );
};

export default PaymentInfoForm;
