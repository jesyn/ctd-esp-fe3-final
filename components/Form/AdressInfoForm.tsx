import React from "react";
import InputCustom from "../InputCustom/InputCustom";
import { Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";

const AdressInfoForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Typography variant="h5" mb={2}>
        Dirección de entrega
      </Typography>

      <InputCustom
        name="adress"
        label="Dirección"
        type="text"
        control={control}
        defaultValue=""
        placeholder="eg: Av. Corrientes 1458"
        error={errors.name ? true : false}
        messageError={errors.name?.message}
      />

      <InputCustom
        name="department"
        label="Departamente"
        type="text"
        control={control}
        defaultValue=""
        placeholder="eg: 2 A"
        error={errors.name ? true : false}
        messageError={errors.name?.message}
      />

      <InputCustom
        name="province"
        label="Provincia"
        type="text"
        control={control}
        defaultValue=""
        placeholder="eg: Buenos Aires"
        error={errors.name ? true : false}
        messageError={errors.name?.message}
      />

      <InputCustom
        name="city"
        label="Ciudad"
        type="text"
        control={control}
        defaultValue=""
        placeholder="eg: La plata"
        error={errors.name ? true : false}
        messageError={errors.name?.message}
      />

      <InputCustom
        name="postalCode"
        label="Código postal"
        type="text"
        control={control}
        defaultValue=""
        placeholder="eg: CP1256"
        error={errors.name ? true : false}
        messageError={errors.name?.message}
      />
    </>
  );
};

export default AdressInfoForm;
