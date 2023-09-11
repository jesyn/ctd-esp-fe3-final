import React, { useEffect } from "react";
import InputCustom from "../InputCustom/InputCustom";
import { Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";

const PersonalInfoForm = ({
  setHasErrors,
}: {
  setHasErrors: (value: boolean) => void;
}) => {
  const {
    control,
    formState: { errors },
    trigger,
  } = useFormContext();

  useEffect(() => {
    setHasErrors(!!Object.keys(errors).length);
  }, [errors.name, errors.lastName, errors.email, setHasErrors]);

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
        error={!!errors.name}
        messageError={errors.name?.message as string}
        onChange={async () => {
          trigger("name");
        }}
      />

      <InputCustom
        name="lastName"
        label="Apellido"
        type="text"
        control={control}
        defaultValue=""
        placeholder="eg: Martinez"
        error={!!errors.lastName}
        messageError={errors.lastName?.message as string}
        onChange={async () => {
          trigger("lastName");
        }}
      />

      <InputCustom
        name="email"
        label="Correo"
        type="email"
        control={control}
        defaultValue=""
        placeholder="eg: lauramartinez@gmail.com"
        error={!!errors.email}
        messageError={errors.email?.message as string}
        onChange={async () => {
          trigger("email");
        }}
      />
    </>
  );
};

export default PersonalInfoForm;
