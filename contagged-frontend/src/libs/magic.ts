
import { Magic } from "magic-sdk"
import Web3 from "web3"
import dotenv from "dotenv"
dotenv.config({ path: "../../.env" })

const customNodeOptions = {
    rpcUrl: "https://alfajores-forno.celo-testnet.org", // Custom RPC URL
    chainId: 44787, // Custom chain id
}

// Initialize the Magic instance
export const magic = new Magic("pk_live_F783F5D90C1B77C7", {
    network: customNodeOptions
})

const magicProvider = await magic.wallet.getProvider();
const web3 = new Web3(magicProvider);
const accounts = await magic.wallet.connectWithUI();