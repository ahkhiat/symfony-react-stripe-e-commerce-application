// import React, { useState } from "react";
import * as React from 'react';

import Header from "./Header";
import { Box, Button, Grid, Paper, Stack, Typography, Modal } from "@mui/material";
import useProducts from "../hooks/useProducts";
import { formatPrice } from "../../utils";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ProductModal from "./ProductModal";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function ProductGrid() {
    const products = useProducts();
    const [open, setOpen] = React.useState(undefined);
    
    const handleClose = () => setOpen(undefined);
    const handleShow = (id) => setOpen(id);
    // const toggleModal = () => {
    //     setOpen(!open)
    // }
    // toggleModal n'a pas besoin des proprietes open et close
    
    return (
        <div>
        <Grid container marginTop={5}>
            {products?.map((product) => (
                <Grid item key={product.id} xs={4}>
                    <Box sx={{ width: 300, m: 2 }} >
                        <Paper elevation={3} sx={{ p:2 }} onClick={()=>handleShow(product.id)}>
                            <Stack direction ="column" spacing={2}  >
                               <Box 
                                component="img"
                                sx={{width: '100%', height: 'auto'}}
                                src={`/images/products/${product.imageName}`}
                                />
                                <Typography variant="h6" gutterBottom>
                                    {product.name}
                                </Typography>

                                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                    <Typography variant="h6" color="secondary">
                                        {formatPrice(product.price)}
                                    </Typography>
                                </Box>
                                <Button 
                                    variant="outlined"
                                    color="primary"
                                    endIcon={<ShoppingBasketIcon />}>
                                        Réserver
                                </Button> 

                            {products?.map(({ id, name, price, description, imageName }) => (
                            <Modal
                                open={open === id }
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                                key={id}
                            >
                                <Box sx={style}>
                                    <Box 
                                    component="img"
                                    sx={{width: '500px', height: 'auto'}}
                                    src={`/images/products/${imageName}`}
                                    />
                                    <Typography variant="h4" gutterBottom>
                                        {name}
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        {description}
                                    </Typography>
                                    <Typography variant="h6" color="secondary">
                                        {formatPrice(price)}
                                    </Typography>

                                </Box>
                            </Modal>
                            ))}

                            </Stack>
                        </Paper>
                    </Box>
                </Grid>                    
            ))}
        </Grid>
        </div>
    )
}

