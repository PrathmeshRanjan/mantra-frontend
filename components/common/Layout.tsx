import Head from "next/head";
import { Container, SwapToken } from "@interchain-ui/react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Swap from "./Swap";
import Liquidity from "./Liquidity";
import LiquidityButton from "./LiquidityButton";
import NFT from "./NFT";

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Container maxWidth="64rem" attributes={{ py: "$14" }}>
            <Head>
                <title>RWA Staking DEX</title>
                <meta
                    name="description"
                    content="A RWA staking app built on the Mantra chain"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <NFT />
            <Swap />
            <Liquidity />
            {/* <LiquidityButton /> */}
            <br />
            <br />
            <h1>Stake Assets</h1>
            {children}
            <Footer />
        </Container>
    );
}
