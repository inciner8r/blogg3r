export interface BlogPost {
    id: bigint;
    author: `0x${string}`;
    title: string;
    content: string;
    isDeleted: boolean;
}