import React, { useState, useEffect } from "react";
import { useWeb3React } from '@web3-react/core';
import { Avatar, Box, Button, Card, CardActions, CardContent, Grid, Link, TextField, Typography } from "@mui/material";
import { useStyles } from "../routers/styled";
import LunachowImg from "../assets/images/lunachow.png";
import MlokyImg from "../assets/images/mloky.png";
import ChainhowImg from "../assets/images/chain.png";
import {
    getMLOKYBalance, getTotalShareBUSD, getTotalShareLUCHOW, getTotalDistributedBUSD,
    getTotalDistributedLUCHOW, getBUSDBalance, getLUCHOWBalance, getUnpaidEarningsBUSD,
    getUnpaidEarningsLUCHOW, claimBUSD, claimLUCHOW, toEth
} from '../utils/contracts';

const Home = (props) => {
    const classes = useStyles();
    const [ethAddress, setEthAddress] = useState("");
    const [mlokyBalance, setMlokyBalance] = useState(0);
    const [busdBalance, setBusdBalance] = useState(0);
    const [luchowBalance, setLuchowBalance] = useState(0);
    const [totalSharesBUSD, setTotalSharesBUSD] = useState(0);
    const [totalSharesLUCHOW, setTotalSharesLUCHOW] = useState(0);
    const [totalDistributedBUSD, setTotalDistributedBUSD] = useState(0);
    const [totalDistributedLUCHOW, setTotalDistributedLUCHOW] = useState(0);
    const [unpaidEarningsBUSD, setUnpaidEarningsBUSD] = useState(0);
    const [unpaidEarningsLUCHOW, setUnpaidEarningsLUCHOW] = useState(0);
    const [isClaimBUSD, setIsClaimBUSD] = useState(false);
    const [isClaimLUCHOW, setIsClaimLUCHOW] = useState(false);

    const { account, chainId, library } = useWeb3React();

    useEffect(() => {
        if (!!account && !!library) {
            setEthAddress(account);
            getMLOKYBalance(account, chainId, library.getSigner())
                .then((balance) => { setMlokyBalance(balance) }).catch();
            getBUSDBalance(account, chainId, library.getSigner())
                .then((balance) => { setBusdBalance(balance) }).catch()
            getLUCHOWBalance(account, chainId, library.getSigner())
                .then((balance) => { setLuchowBalance(balance) }).catch()
            getTotalShareBUSD(account, chainId, library.getSigner())
                .then((res) => {
                    if (res.totalRealised) {
                        setTotalSharesBUSD(toEth(res.totalRealised));
                    }
                }).catch();
            getTotalShareLUCHOW(account, chainId, library.getSigner())
                .then((res) => {
                    if (res.totalRealised) {
                        setTotalSharesLUCHOW(toEth(res.totalRealised));
                    }
                }).catch();
            getTotalDistributedBUSD(chainId, library.getSigner())
                .then((res) => {
                    if (res) setTotalDistributedBUSD(toEth(res));
                }).catch()
            getTotalDistributedLUCHOW(chainId, library.getSigner())
                .then((res) => {
                    if (res) setTotalDistributedLUCHOW(toEth(res));
                }).catch()
            getUnpaidEarningsBUSD(account, chainId, library.getSigner())
                .then((res) => {
                    if (res) setUnpaidEarningsBUSD(toEth(res));
                }).catch()
            getUnpaidEarningsLUCHOW(account, chainId, library.getSigner())
                .then((res) => {
                    if (res) setUnpaidEarningsLUCHOW(toEth(res));
                }).catch()
        }
    }, [account, chainId, library]);

    const bindClaimBUSD = async () => {
        if (isClaimBUSD) return;
        if (!!account && !!library) {
            setIsClaimBUSD(true);
            claimBUSD(chainId, library.getSigner())
                .then((res) => {
                    if (res) {
                        alert("You claimed BUSD successfully!");
                        setUnpaidEarningsBUSD(0);
                    }
                    else alert("You are failed to claime BUSD!");
                    setIsClaimBUSD(false);
                })
                .catch((e) => { console.log("Claim BUSD error:", e); setIsClaimBUSD(false); });
        } else {
            props.connectAccount();
        }
    }
    const bindClaimLUCHOW = async () => {
        if (isClaimLUCHOW) return;
        if (!!account && !!library) {
            setIsClaimLUCHOW(true);
            claimLUCHOW(chainId, library.getSigner())
                .then((res) => {
                    if (res) {
                        alert("You claimed LUCHOW successfully!");
                        setUnpaidEarningsLUCHOW(0);
                    }
                    else alert("You are failed to claim LUCHOW");
                    setIsClaimLUCHOW(false);
                })
                .catch((e) => { console.log("Claim LUCHOW error:", e); setIsClaimLUCHOW(false); });
        } else {
            props.connectAccount();
        }
    }

    return (
        <>
            <Box>

                <Box mt={0}>
                    <TextField
                        className={classes.textField}
                        fullWidth
                        id="outlined-basic"
                        label="Wallet Address"
                        variant="filled"
                        value={ethAddress}
                        readOnly={true}
                    />
                </Box>

                <Box my={3}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} lg={3}>
                            <Card className={classes.cardRoot}>
                                <CardContent>
                                    <Typography className={classes.cardTitle} gutterBottom>
                                        Your MLOKY Balance:
                                    </Typography>
                                    <Typography className={classes.cardDesc} color="text.secondary">
                                        {parseFloat(mlokyBalance).toFixed(6)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                            <Card className={classes.cardRoot}>
                                <CardContent>
                                    <Typography className={classes.cardTitle} gutterBottom>
                                        Your BUSD/LUCHOW Balance:
                                    </Typography>
                                    <Typography className={classes.cardDesc} color="text.secondary">
                                        BUSD: {parseFloat(busdBalance).toFixed(6)}
                                        <br />
                                        LUCHOW: {parseFloat(luchowBalance).toFixed(6)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                            <Card className={classes.cardRoot}>
                                <CardContent>
                                    <Typography className={classes.cardTitle} gutterBottom>
                                        Your Total Earnings:
                                    </Typography>
                                    <Typography className={classes.cardDesc} color="text.secondary">
                                        BUSD: {parseFloat(totalSharesBUSD).toFixed(6)}
                                        <br />
                                        LUCHOW: {parseFloat(totalSharesLUCHOW).toFixed(6)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                            <Card className={classes.cardRoot}>
                                <CardContent>
                                    <Typography className={classes.cardTitle} gutterBottom>
                                        Total Distributed:
                                    </Typography>
                                    <Typography className={classes.cardDesc} color="text.secondary">
                                        BUSD: {parseFloat(totalDistributedBUSD).toFixed(6)}
                                        <br />
                                        LUCHOW: {parseFloat(totalDistributedLUCHOW).toFixed(6)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    <Box mt={5} mb={3}>
                        <Grid container justifyContent="center">
                            <Grid item xs={12} md={4}>
                                <Card className={classes.cardRoot}>
                                    <CardContent>
                                        <Typography className={classes.cardTitle} gutterBottom>
                                            BUSD Not Claimed:
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Typography
                                                className={classes.cardDesc}
                                                color="text.secondary"
                                            >
                                                BUSD: {parseFloat(unpaidEarningsBUSD).toFixed(6)}
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                    <CardActions>
                                        <Button
                                            fullWidth
                                            size="small"
                                            onClick={() => bindClaimBUSD()}
                                        >
                                            {isClaimBUSD ? "Claiming ..." : "Claim Now"}
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={1}></Grid>
                            <Grid item xs={12} md={4}>
                                <Card className={classes.cardRoot}>
                                    <CardContent>
                                        <Typography className={classes.cardTitle} gutterBottom>
                                            LUCHOW Not Claimed:
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Typography
                                                className={classes.cardDesc}
                                                color="text.secondary"
                                            >
                                                LUCHOW: {parseFloat(unpaidEarningsLUCHOW).toFixed(6)}
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                    <CardActions>
                                        <Button
                                            fullWidth
                                            size="small"
                                            onClick={() => bindClaimLUCHOW()}
                                        >
                                            {isClaimLUCHOW ? "Claiming ..." : "Claim Now"}
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>

                    {/*  under claim - vol & price*/}
                    <Box>
                        <Grid container justifyContent="center">
                            <Grid item xs={12} lg={7}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <Card className={classes.miniCard}>
                                            <CardContent>
                                                <Typography
                                                    className={classes.miniCardTitle}
                                                    gutterBottom
                                                >
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
                                                <Typography
                                                    className={classes.miniCardTitle}
                                                    gutterBottom
                                                >
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

                    <Box mt={5} mb={10}>
                        <Card className={classes.linkCard}>
                            <CardContent>
                                <Grid container justifyContent="center">
                                    <Grid item>
                                        <Link
                                            href="https://bscscan.com/address/0xe4e8e6878718bfe533702d4a6571eb74d79b0915"
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 1,
                                            }}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Avatar src={LunachowImg} alt="lunachow" />
                                            <span>
                                                Luchow Contract:
                                                0xe4e8e6878718bfe533702d4a6571eb74d79b0915
                                            </span>
                                        </Link>
                                        <Link
                                            href="https://bscscan.com/address/0xe9e7cea3dedca5984780bafc599bd69add087d56"
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 1,
                                            }}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Avatar src={ChainhowImg} alt="lunachow" />
                                            <span>
                                                BUSD Contract: 0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56
                                            </span>
                                        </Link>
                                        <Link
                                            href="https://bscscan.com/address/0xf71e950758310faf9f7d51c4f4250c7546086c1f"
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 1,
                                            }}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Avatar src={MlokyImg} alt="lunachow" />
                                            <span>
                                                MLOKY Contract: 0xF71E950758310faF9f7D51C4F4250C7546086C1f
                                            </span>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Home;
