import { AddLiquidity } from "@interchain-ui/react";

export default function Demo() {
    return (
        <div>
            <br />
            <br />
            <br />

            <h1>Liquidity Pool</h1>
            <AddLiquidity
                poolAssets={[
                    {
                        imgSrc: "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
                        symbol: "ATOM",
                        denom: "Cosmos Hub",
                        priceDisplayAmount: 8.35,
                        available: 15.868,
                        name: "ATOM",
                    },
                    {
                        available: 57.61,
                        name: "Osmosis",
                        symbol: "OSMO",
                        denom: "Osmosis",
                        imgSrc: "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
                        priceDisplayAmount: 0.4671,
                    },
                ]}
                onAddLiquidity={() => {
                    console.log("onAddLiquidity");
                }}
                onChange={(values) => {
                    console.log("values", values);
                }}
            />
        </div>
    );
}
