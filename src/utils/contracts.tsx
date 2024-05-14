"use client";

import { createWalletClient, custom } from "viem";
import { mainnet } from "viem/chains";

const getBlogs = async () => {
  const [account] = await window.ethereum!.request({
    method: "eth_requestAccounts",
  });
  const client = createWalletClient({
    chain: mainnet,
    transport: custom(window.ethereum!),
  });
};
