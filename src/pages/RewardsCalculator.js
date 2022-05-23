import React, { useState, useEffect } from "react";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    Typography,
} from "@mui/material";
import { useStyles } from "../routers/styled";

const RewardsCalculator = (props) => {
    const classes = useStyles();

    return (
        <>
            <Box>
                <Box my={3}>
                    <Box sx={{ textAlign: "center", mb: 2 }}>
                        <Typography variant="h4" color="white">
                            Rewards Calculator
                        </Typography>
                    </Box>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} lg={4}>
                            <Card className={classes.calculateCard}>
                                <CardContent>
                                    <Typography className={classes.calculateCardTitle} gutterBottom>
                                        MLOKY Token Owned
                                    </Typography>
                                    <Typography
                                        className={classes.calculateCardDesc}
                                        color="text.secondary"
                                    >
                                        0
                                    </Typography>
                                </CardContent>
                            </Card>

                            <Card className={classes.calculateCard}>
                                <CardContent>
                                    <Typography className={classes.calculateCardTitle} gutterBottom>
                                        Cost of Token ($)
                                    </Typography>
                                    <Typography
                                        className={classes.calculateCardDesc}
                                        color="text.secondary"
                                    >
                                        0
                                    </Typography>
                                </CardContent>
                            </Card>

                            <Card className={classes.calculateCard}>
                                <CardContent>
                                    <Typography className={classes.calculateCardTitle} gutterBottom>
                                        Daily Trade Volume ($)
                                    </Typography>
                                    <Typography
                                        className={classes.calculateCardDesc}
                                        color="text.secondary"
                                    >
                                        0
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>

                <Box my={3}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} lg={3}>
                            <Card className={classes.cardRoot}>
                                <CardContent>
                                    <Typography className={classes.cardTitle} gutterBottom>
                                        Daily ($)
                                    </Typography>
                                    <Typography className={classes.cardDesc} color="text.secondary">
                                        0.00
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                            <Card className={classes.cardRoot}>
                                <CardContent>
                                    <Typography className={classes.cardTitle} gutterBottom>
                                        Weekly ($)
                                    </Typography>
                                    <Typography className={classes.cardDesc} color="text.secondary">
                                        0.00
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                            <Card className={classes.cardRoot}>
                                <CardContent>
                                    <Typography className={classes.cardTitle} gutterBottom>
                                        Monthly ($)
                                    </Typography>
                                    <Typography className={classes.cardDesc} color="text.secondary">
                                        0.00
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                            <Card className={classes.cardRoot}>
                                <CardContent>
                                    <Typography className={classes.cardTitle} gutterBottom>
                                        Yearly ($)
                                    </Typography>
                                    <Typography className={classes.cardDesc} color="text.secondary">
                                        0.00
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
                <Box mb={3} mt={5}>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} lg={7}>
                            <Card className={classes.cardRoot}>
                                <CardContent>
                                    <Typography className={classes.cardTitle} gutterBottom>
                                        $BUSD/$LUCHOW not claimed:
                                    </Typography>
                                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                                        <Typography
                                            className={classes.cardDesc}
                                            color="text.secondary"
                                        >
                                            0
                                        </Typography>
                                    </Box>
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth size="small">
                                        Claim Now
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>

                {/*  under claim - vol & price*/}
                <Box mb={10}>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} lg={7}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <Card className={classes.miniCard}>
                                        <CardContent>
                                            <Typography className={classes.miniCardTitle} gutterBottom>
                                                MLOKY Market Vol (USD):
                                            </Typography>
                                            <Box>
                                                <Typography
                                                    className={classes.miniCardDesc}
                                                    color="text.secondary"
                                                >
                                                    205000
                                                </Typography>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Card className={classes.miniCard}>
                                        <CardContent>
                                            <Typography className={classes.miniCardTitle} gutterBottom>
                                                MLOKY Current Price (USD):
                                            </Typography>
                                            <Box>
                                                <Typography
                                                    className={classes.miniCardDesc}
                                                    color="text.secondary"
                                                >
                                                    0
                                                </Typography>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
}

export default RewardsCalculator;
