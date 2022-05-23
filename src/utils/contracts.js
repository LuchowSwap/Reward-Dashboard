import { BigNumber, ethers } from "ethers";
import { getContractInfo, getContractObj } from ".";
const tokenDecimal = 9;

export function isAddress(address) {
    try {
        ethers.utils.getAddress(address);
    } catch (e) { return false; }
    return true;
}
export function toEth(amount) {
    return ethers.utils.formatEther(String(amount), { commify: true });
}
export function toWei(amount) {
    return ethers.utils.parseEther(String(amount));
}
export function toUnits(amount, decimal) {
    return ethers.utils.formatUnits(amount, decimal);
}
/**
 * Old MLOKY Token Contract Management
 */
export async function getMLOKYLegacyBalance(account, chainId, provider) {
    const Token = getContractObj('OldMLOKY', chainId, provider);
    if (Token) {
        const balance = await Token.balanceOf(account);
        return ethers.utils.formatUnits(balance, tokenDecimal);
    }
    return 0;
}
export async function isMLOKYLegacyApproved(account, amount, chainId, provider) {
    const migrationContract = getContractObj('Migration', chainId, provider);
    const legacyContract = getContractObj('OldMLOKY', chainId, provider);

    const allowance = await legacyContract.allowance(account, migrationContract.address);
    if (BigNumber.from(toWei(amount)).gt(allowance)) {
        return false;
    }
    return true;
}
export async function approveLegacyForMigration(chainId, provider) {
    const migrationContract = getContractObj('Migration', chainId, provider);
    const legacyContract = getContractObj('OldMLOKY', chainId, provider);

    try {
        // const approve_tx = await legacyContract.approveMax(migrationContract.address);
        const approve_tx = await legacyContract.approve(migrationContract.address, '0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
        await approve_tx.wait(1);
        return true;
    } catch (e) {
        console.log(e)
        return false;
    }
}
/**
 * New MLOKY Contract Management
 */
export async function getMLOKYBalance(account, chainId, provider) {
    const Token = getContractObj('NewMLOKY', chainId, provider);
    if (Token) {
        const balance = await Token.balanceOf(account);
        return ethers.utils.formatUnits(balance, tokenDecimal);
    }
    return 0;
}
/**
 * distributorBUSD Contract Management
 */
export async function getTotalShareBUSD(account, chainId, provider) {
    const Token = getContractObj('DistributorBUSD', chainId, provider);
    if (Token) {
        try {
            const res = await Token.shares(account);
            return res;
        } catch (e) {
            console.log("DistributorBUSD: ", e);
            return false;
        }
    }
    console.log("DistributorBUSD is not defined.");
    return false;
}
export async function getTotalDistributedBUSD(chainId, provider) {
    const Token = getContractObj('DistributorBUSD', chainId, provider);
    if (Token) {
        try {
            const res = await Token.totalDistributed();
            return res;
        } catch (e) {
            console.log("TotalDistributedBUSD: ", e);
            return false;
        }
    }
    console.log("TotalDistributedBUSD is not defined.");
    return false;
}
export async function getUnpaidEarningsBUSD(account, chainId, provider) {
    const Token = getContractObj('DistributorBUSD', chainId, provider);
    if (Token) {
        try {
            const res = await Token.getUnpaidEarnings(account);
            return res;
        } catch (e) {
            console.log("GetUnpaidEarningsBUSD: ", e);
            return false;
        }
    }
    console.log("GetUnpaidEarningsBUSD is not defined.");
    return false;
}
export async function claimBUSD(chainId, provider) {
    const claimContract = getContractObj('DistributorBUSD', chainId, provider);
    const claimInfo = getContractInfo('DistributorBUSD', chainId);
    if (!claimContract || !claimInfo) return false;
    try {
        const tx = await claimContract.claimDividend();
        const receipt = await tx.wait(2);
        if (receipt.confirmations) {
            const interf = new ethers.utils.Interface(claimInfo.abi);
            const logs = receipt.logs;
            console.log("Claim Log: ", logs);
            return true;
        }
        return false;
    } catch (e) {
        console.log(e)
        return false;
    }
}
/**
 * distributorLUCHOW Contract Management
 */
export async function getTotalShareLUCHOW(account, chainId, provider) {
    const Token = getContractObj('DistributorLUCHOW', chainId, provider);
    if (Token) {
        try {
            const res = await Token.shares(account);
            return res;
        } catch (e) {
            console.log("DistributorLUCHOW: ", e);
            return false;
        }
    }
    console.log("DistributorLUCHOW is not defined.");
    return false;
}
export async function getTotalDistributedLUCHOW(chainId, provider) {
    const Token = getContractObj('DistributorLUCHOW', chainId, provider);
    if (Token) {
        try {
            const res = await Token.totalDistributed();
            return res;
        } catch (e) {
            console.log("TotalDistributedLUCHOW: ", e);
            return false;
        }
    }
    console.log("TotalDistributedLUCHOW is not defined.");
    return false;
}
export async function getUnpaidEarningsLUCHOW(account, chainId, provider) {
    const Token = getContractObj('DistributorLUCHOW', chainId, provider);
    if (Token) {
        try {
            const res = await Token.getUnpaidEarnings(account);
            return res;
        } catch (e) {
            console.log("GetUnpaidEarningsLUCHOW: ", e);
            return false;
        }
    }
    console.log("GetUnpaidEarningsLUCHOW is not defined.");
    return false;
}
export async function claimLUCHOW(chainId, provider) {
    const claimContract = getContractObj('DistributorLUCHOW', chainId, provider);
    const claimInfo = getContractInfo('DistributorLUCHOW', chainId);
    if (!claimContract || !claimInfo) return false;
    try {
        const tx = await claimContract.claimDividend();
        const receipt = await tx.wait(2);
        if (receipt.confirmations) {
            const interf = new ethers.utils.Interface(claimInfo.abi);
            const logs = receipt.logs;
            console.log("Claim Log: ", logs);
            return true;
        }
        return false;
    } catch (e) {
        console.log(e)
        return false;
    }
}
/**
 * Migration Contract Management
 */
export async function tokenMigration(account, amount, chainId, provider) {
    const migrationContract = getContractObj('Migration', chainId, provider);
    const migrationInfo = getContractInfo('Migration', chainId);
    if (!migrationContract || !migrationInfo) return false;
    try {
        let isApproved = await isMLOKYLegacyApproved(account, amount, chainId, provider);
        if (!isApproved) {
            isApproved = await approveLegacyForMigration(chainId, provider);
        }
        if (isApproved) {
            const tx = await migrationContract.migrate()
            const receipt = await tx.wait(2);
            if (receipt.confirmations) {
                const interf = new ethers.utils.Interface(migrationInfo.abi);
                const logs = receipt.logs;
                console.log("Migration Log: ", logs);
                return true;
            }
        }
        return false;
    } catch (e) {
        console.log(e)
        return false;
    }
}
/**
 * BUSD Contract Management
 */
export async function getBUSDBalance(account, chainId, provider) {
    const Token = getContractObj('BUSD', chainId, provider);
    if (Token) {
        const balance = await Token.balanceOf(account);
        return ethers.utils.formatUnits(balance, 18);
    }
    return 0;
}
/**
 * LUCHOW Contract Management
 */
export async function getLUCHOWBalance(account, chainId, provider) {
    const Token = getContractObj('LUCHOW', chainId, provider);
    if (Token) {
        const balance = await Token.balanceOf(account);
        return ethers.utils.formatUnits(balance, 18);
    }
    return 0;
}