import React from "react";
import Header from "./Header";
import { Box, Grid, Paper } from "@mui/material";
import useProducts from "../hooks/useProducts";


export default function ProductGrid() {
    const products = useProducts();
    
    return (
        <Grid container marginTop={5}>
            {products?.map((product) => (
                <Grid item key={product.id} xs={4}>
                    <Box sx={{ width: 300, m: 2 }}>
                        <Paper elevation={3} sx={{ p:2 }}>
                            <Box 
                                component="img"
                                sx={{width: '100%', height: 'auto'}}
                                src={`/images/products/${product.imageName}`}
                            />
                        </Paper>
                    </Box>
                </Grid>                    
            ))}
        </Grid>
    )
}