import { createWalletClient, custom } from "viem";
import { mainnet } from "viem/chains";

//ethProvider = window.ethereum
const getBlogs = async (ethProvider: any) => {
  if (typeof window !== "undefined") {
    const [account] = await ethProvider!.request({
      method: "eth_requestAccounts",
    });
    const client = createWalletClient({
      chain: mainnet,
      transport: custom(ethProvider!),
    });
  }
};
