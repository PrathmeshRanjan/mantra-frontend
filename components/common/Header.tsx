import {
    Box,
    Button,
    Icon,
    Text,
    useTheme,
    useColorModeValue,
} from "@interchain-ui/react";

export function Header() {
    const { theme, setTheme } = useTheme();

    const toggleColorMode = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <>
            <Box display="flex" justifyContent="end" mb="$8">
                <Button
                    intent="secondary"
                    size="sm"
                    attributes={{
                        paddingX: 0,
                    }}
                    onClick={toggleColorMode}
                >
                    <Icon name={useColorModeValue("moonLine", "sunLine")} />
                </Button>
            </Box>

            <Box textAlign="center" className="bg-indigo-500">
                <Text
                    as="h1"
                    color="$purple100"
                    fontWeight="$extrabold"
                    fontSize={{ mobile: "$6xl", tablet: "$10xl" }}
                    attributes={{
                        marginBottom: "$2",
                    }}
                >
                    Asla DEX
                </Text>
                <Text
                    as="h2"
                    fontWeight="$normal"
                    color="$purple200"
                    fontSize={{ mobile: "$6xl", tablet: "$10xl" }}
                >
                    Mint, Swap, Liquidate, Stake
                </Text>
                <Text as="h3" fontWeight={"$light"}>
                    <Text
                        as="span"
                        color="$purple300"
                        fontSize={{
                            mobile: "$3xl",
                            tablet: "$8xl",
                            desktop: "$8xl",
                        }}
                    >
                        A platform to mint RWA NFTs, swap RWAs, add liquidity to
                        pools and Stake RWAs
                    </Text>
                    <Text
                        as="span"
                        fontSize={{
                            mobile: "$3xl",
                            tablet: "$8xl",
                            desktop: "$8xl",
                        }}
                        color={useColorModeValue("$primary500", "$primary200")}
                    ></Text>
                </Text>
            </Box>
        </>
    );
}
