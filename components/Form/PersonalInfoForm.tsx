import React from "react";
import InputCustom from "../InputCustom/InputCustom";
import { Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
//import { ErrorMessage } from "@hookform/error-message";

const PersonalInfoForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Typography variant="h5" mb={2}>
        Datos personales
      </Typography>

      <InputCustom
        name="name"
        label="Nombre"
        type="text"
        control={control}
        defaultValue=""
        placeholder="eg: Laura"
        error={errors.name ? true : false}
        messageError={errors.name?.message}
      />

      {/*  <Typography variant="caption" color="error">
        <ErrorMessage errors={errors} name="name" />
      </Typography> */}

      <InputCustom
        name="lastName"
        label="Apellido"
        type="text"
        control={control}
        defaultValue=""
        placeholder="eg: Martinez"
        error={errors.name ? true : false}
        messageError={errors.name?.message}
      />

      {/*  <Typography variant="caption" color="red">
        <ErrorMessage errors={errors} name="lastName" />
      </Typography> */}

      <InputCustom
        name="email"
        label="Correo"
        type="email"
        control={control}
        defaultValue=""
        placeholder="eg: lauramartinez@gmail.com"
        error={errors.name ? true : false}
        messageError={errors.name?.message}
      />

      {/* <Typography variant="caption" color="red">
        <ErrorMessage errors={errors} name="email" />
      </Typography> */}
    </>
  );
};

export default PersonalInfoForm;
