"use client"

import { abi } from '@/abi/abi'
import { createWalletClient, custom, createPublicClient, http, getContract } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { polygonAmoy } from 'viem/chains'

export const publicClient = createPublicClient({
    chain: polygonAmoy,
    transport: http()
})
export function WalletClientCreate(eth: any) {
    const walletClient = createWalletClient({
        chain: polygonAmoy,
        transport: custom(eth)
    })
    return walletClient
}

export async function FetchAllBlogs(ethProvider: any) {
    const walletClient = WalletClientCreate(ethProvider)
    const accounts = await walletClient.getAddresses();
    const acc = accounts[0];
    const contract = getContract({
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
        abi: abi,
        client: { public: publicClient },
    });
    const result = await contract.read.viewAllPosts();
    return result
}

export async function NewBlog(ethProvider: any, title: string, content: string) {
    const walletClient = WalletClientCreate(ethProvider);
    const accounts = await walletClient.getAddresses();
    const acc = accounts[0];
    const contract = getContract({
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
        abi: abi,
        client: { public: publicClient, wallet: walletClient },
    });
    const result = contract.write.createPost([title, content], {
        account: acc,
    });
    return result
}

export async function DeleteBlog(ethProvider: any, id: bigint) {
    const walletClient = WalletClientCreate(ethProvider);
    const accounts = await walletClient.getAddresses();
    const acc = accounts[0];
    const contract = getContract({
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
        abi: abi,
        client: { public: publicClient, wallet: walletClient },
    });
    const result = contract.write.deletePost([id], {
        account: acc,
    });
    return result
}

