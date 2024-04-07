import { Box, NftMint } from "@interchain-ui/react";

export default function Demo() {
    return (
        <Box width="$full">
            <br />
            <h1>Mint NFT</h1>
            <NftMint
                tag="NOW LIVE"
                name="Bad Kids"
                description="We are the bad kids - Prathmesh, Mani, Kaustubh"
                quantity={5000}
                royalties={10}
                minted={46}
                available={2948}
                priceDisplayAmount={64}
                limited={50}
                tokenName="STARS"
                className="mb-8"
                imgSrc="https://cosmology.zone/explorer/badkids.jpeg"
                pricePerToken={0.01063943}
                onMint={() => {
                    console.log("onMint");
                }}
                onChange={(value) => {
                    console.log("onChange", value);
                }}
            />
        </Box>
    );
}
