import React from "react";
import { Box } from "@mui/material";
import { Card } from "@mui/material";
import { Button } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardHeader } from "@mui/material";
import { CardMedia } from "@mui/material";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Select } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import { IComic } from "contracts/comics.contract";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";

interface PropsDetail {
  //comic: IComic;
  onBuyClick: () => void;
}

const ComicDetail = ({ onBuyClick }: PropsDetail) => {
  //const isOutOfStock = comic?.stock === 0;

  return (
    <Card>
      <CardContent
        sx={{
          position: "relative",
        }}
      >
        <Link href="/">
          <ArrowBackIcon
            fontSize="large"
            color="secondary"
            sx={{
              cursor: "pointer",
              position: "absolute",
            }}
          />
        </Link>
        <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CardMedia
              component="img"
              alt="imagen" /* {comic.title} */
              height="350"
              image="/fondo-comics.jpg" /* {comic.image} */
              title="titulo" /* {comic.title} */
            />
          </Grid>

          <Grid
            item
            xs={12}
            md={8}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <Box sx={{ marginBottom: "10px" }}>
              <Typography variant="h6">Comic</Typography>
              <Typography
                variant="h3"
                color="secondary"
                sx={{
                  "@media (max-width: 768px)": {
                    fontSize: "24px",
                  },
                }}
              >
                nombre del producto {/*  title={comic.title} */}
              </Typography>
            </Box>

            <Box sx={{ marginBottom: "10px" }}>
              <Typography variant="h6" color="success">
                Precio:
              </Typography>
              {/*  {previousPrice && (
          <Typography variant="body2" color="secondary">
            Precio anterior: ${previousPrice}
          </Typography>
        )} */}
              <Typography mb={2} variant="h4">
                $100 {/* {comic.price} */}
              </Typography>
              <Typography variant="h6">Stock Disponible:</Typography>
              <Typography>
                sin stock {/* {isOutOfStock ? "Sin stock" : comic.stock} */}
              </Typography>
            </Box>

            <Typography variant="h6">Detalles:</Typography>
            <hr
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "#ccc",
                margin: "5px 0",
              }}
            />
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              sequi cumque, magni consequatur aliquam, temporibus sed modi quasi
              neque animi excepturi et commodi saepe eligendi. Non commodi amet
              esse explicabo? {/* {comic.description} */}
            </Typography>

            {/* <FormControl fullWidth>
                <InputLabel>Selecciona un personaje: </InputLabel>
                <Select disabled={isOutOfStock}>
                    {comic.characters.map((character, index) => (
                    <MenuItem value={index}> key={index}>{character}</MenuItem>
                ))}
                </Select>
            </FormControl>  */}

            <Box
              mt={2}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={onBuyClick}
                //disabled={isOutOfStock}
                sx={{
                  width: "150px",
                  "@media (max-width: 768px)": {
                    width: "100%",
                  },
                }}
              >
                comprar
                {/* {isOutOfStock ? "Sin stock" : "Comprar"} */}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ComicDetail;
