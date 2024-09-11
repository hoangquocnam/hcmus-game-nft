import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import {
  ConnectWallet,
  useAddress,
  useContract,
  useOwnedNFTs,
} from "@thirdweb-dev/react";
import { CHARACTER_EDITION_ADDRESS } from "../const/contractAddresses";
import MintContainer from "../components/MintContainer";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  let oldError = {};

  const { contract: editionDrop } = useContract(
    CHARACTER_EDITION_ADDRESS,
    "edition-drop"
  );

  const address = useAddress();
  const router = useRouter();

  const {
    data: ownedNfts,
    isLoading,
    isError,
    error,
  } = useOwnedNFTs(editionDrop, address);

  console.log({
    isLoading,
    error,
  });

  // // 0. Wallet Connect - required to check if they own an NFT
  // if (!address) {
  //   return (
  //     <div className={styles.container}>
  //       <ConnectWallet theme="dark" />
  //     </div>
  //   );
  // }

  // // 1. Loading
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // oldError = error ? error : oldError;

  // // Something went wrong
  // if (!ownedNfts || isError) {
  //   return <div>{`Error: ${oldError}`}</div>;
  // }

  // // 2. No NFTs - mint page
  // if (ownedNfts.length === 0) {
  //   return (
  //     <div className={styles.container}>
  //       <MintContainer />
  //     </div>
  //   );
  // }

  // 3. Has NFT already - show button to take to game
  return (
    <div className={styles.container}>
      <button
        className={`${styles.mainButton} ${styles.spacerBottom}`}
        onClick={() => router.push("/play")}
      >
        Play Game
      </button>
    </div>
  );
};

export default Home;
