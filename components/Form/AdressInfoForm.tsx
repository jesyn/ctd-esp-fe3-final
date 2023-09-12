import React from "react";
import InputCustom from "../InputCustom/InputCustom";
import { Container, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";

const AdressInfoForm = () => {
  const {
    control,
    formState: { errors },
    trigger,
  } = useFormContext();

  return (
    <>
      <Typography variant="h5" mb={2} textAlign={"center"}>
        Dirección de entrega
      </Typography>

      <Container>
        <InputCustom
          name="adress"
          label="Dirección"
          type="text"
          control={control}
          defaultValue=""
          placeholder="eg: Av. Corrientes 1458"
          error={!!errors.adress}
          messageError={errors.adress?.message as string}
          onChange={async () => {
            trigger("adress");
          }}
        />

        <InputCustom
          name="department"
          label="Departamente"
          type="text"
          control={control}
          defaultValue=""
          placeholder="eg: 2 A"
          error={!!errors.department}
          messageError={errors.department?.message as string}
          onChange={async () => {
            trigger("department");
          }}
        />

        <InputCustom
          name="province"
          label="Provincia"
          type="text"
          control={control}
          defaultValue=""
          placeholder="eg: Buenos Aires"
          error={!!errors.province}
          messageError={errors.province?.message as string}
          onChange={async () => {
            trigger("province");
          }}
        />

        <InputCustom
          name="city"
          label="Ciudad"
          type="text"
          control={control}
          defaultValue=""
          placeholder="eg: La plata"
          error={!!errors.city}
          messageError={errors.city?.message as string}
          onChange={async () => {
            trigger("city");
          }}
        />

        <InputCustom
          name="postalCode"
          label="Código postal"
          type="text"
          control={control}
          defaultValue=""
          placeholder="eg: CP1256"
          error={!!errors.postalCode}
          messageError={errors.postalCode?.message as string}
          onChange={async () => {
            trigger("postalCode");
          }}
        />
      </Container>
    </>
  );
};

export default AdressInfoForm;
