import React, { useState, useEffect } from "react";
import { useWeb3React } from '@web3-react/core';
import { Avatar, Box, Button, Card, CardContent, Grid, Link, Typography } from "@mui/material";
import { useStyles } from "../routers/styled";
import MlokyImg from "../assets/images/mloky.png";
import MigrationImg from '../assets/images/migration.svg';
import { getMLOKYLegacyBalance, getMLOKYBalance, tokenMigration, toWei } from '../utils/contracts';


const MigrationPage = (props) => {
    const classes = useStyles();
    const [legacyBalance, setLegacyBalance] = useState(0);
    const [mlokyBalance, setMlokyBalance] = useState(0);
    const [isMigrating, setIsMigrating] = useState(false);

    const { account, chainId, library } = useWeb3React();

    const clickMigration = () => {
        if (isMigrating) return;
        if (!!account && !!library) {
            if (legacyBalance > 0) {
                setIsMigrating(true);
                tokenMigration(account, toWei(legacyBalance), chainId, library.getSigner())
                    .then((res) => {
                        if (res) console.log("Migration success");
                        setIsMigrating(false);
                    }).catch((err) => { console.log("Migration fail: ", err); setIsMigrating(false); });
            } else {
                alert("Your legacy balance is empty!");
            }
        } else {
            props.connectAccount();
        }
    }

    useEffect(() => {
        if (!!account && !!library) {
            getMLOKYLegacyBalance(account, chainId, library.getSigner())
                .then((balance) => {
                    setLegacyBalance(balance)
                })
                .catch((e) => {
                    console.log("get legacy balance error: ", e);
                    setLegacyBalance(0)
                });
            getMLOKYBalance(account, chainId, library.getSigner())
                .then((balance) => {
                    setMlokyBalance(balance)
                })
                .catch((e) => {
                    console.log("get legacy balance error: ", e);
                    setMlokyBalance(0)
                })
        }
    }, [account, chainId, library]);

    return (
        <>
            <Box>
                <Box mt={10}>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} lg={4}>
                            <Button fullWidth size="small" className={classes.migrateBtn} onClick={() => clickMigration()}>
                                {isMigrating ? "Migrating ..." : "Migrate MLOKY"}
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
                <Box my={3}>

                    {/*  under claim - vol & price*/}
                    <Box mt={20} mb={10}>
                        <Grid container justifyContent="center">
                            <Grid item xs={12} lg={8}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={5}>
                                        <Card className={classes.miniCard}>
                                            <CardContent>
                                                <Typography className={classes.miniCardTitle} gutterBottom>
                                                    <span style={{ fontSize: 21, padding: '20px 0' }}>MLOKY Legacy Balance:</span>
                                                </Typography>
                                                <Box>
                                                    <Typography className={classes.miniCardDesc} color="text.secondary">
                                                        <span style={{ fontSize: 18, padding: '24px 0' }}>{legacyBalance}</span>
                                                    </Typography>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>

                                    <Grid item xs={12} sm={2}>
                                        <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <img src={MigrationImg} style={{ width: 40 }} alt="migration" />
                                        </div>
                                    </Grid>

                                    <Grid item xs={12} sm={5}>
                                        <Card className={classes.miniCard}>
                                            <CardContent>
                                                <Typography className={classes.miniCardTitle} gutterBottom>
                                                    <span style={{ fontSize: 21, padding: '20px 0' }}>MLOKY Balance:</span>
                                                </Typography>
                                                <Box>
                                                    <Typography className={classes.miniCardDesc} color="text.secondary">
                                                        <span style={{ fontSize: 18, padding: '24px 0' }}>{mlokyBalance}</span>
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
                                            href="https://bscscan.com/address/0x11C97Fc75E1ecf0F7315c0f7c15cF94782795aE3"
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
                                                MLOKY Legacy : 0x11C97Fc75E1ecf0F7315c0f7c15cF94782795aE3
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

export default MigrationPage;
