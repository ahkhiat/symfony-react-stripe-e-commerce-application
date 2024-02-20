import React from "react";
import { AppBar, Toolbar, Grid, IconButton, Badge } from "@mui/material";
import StoreIcon from '@mui/icons-material/Store';
import HomeIcon from '@mui/icons-material/Home';
import { visit } from "../../utils";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

export default function Header() :React.JSX.Element {

    const showHome = () : void => {
        visit('/');
    }

    const showShoppingCart = () => {
        visit('/shopping-cart');
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container justifyContent="space-between" alignItems="center" style={{ width: '100%' }}>
                    <Grid item>
                        <IconButton color="inherit" onClick={showHome}>
                            <HomeIcon />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton color="inherit" onClick={showShoppingCart}>
                            <Badge badgeContent={1} color="secondary">

                            </Badge>
                            <ShoppingBasketIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}