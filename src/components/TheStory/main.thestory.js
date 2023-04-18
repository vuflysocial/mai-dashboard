import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

const thestory = () => {
  return (
    <div
      style={{
        backgroundImage:
          'url("//data.1freewallpapers.com/detail/gradient-green-texture-background.jpg")',
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        opacity: 1,
        height: "115vh",
        width: "90vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div>
        <h1 style={{ fontWeight: "bold", color: "white" }}>
          The Original Story
        </h1>
        <h4 style={{ color: "white" }}>
          What if the roles were reversed and Shiba Inu was a cat?
          Meet MELO INU, a clone of Shiba Inu, created with a twist,
          he&apos;s a cat!...
          To continue reading the story of Melo Inu
        </h4>

        <p>
          <a
            href="https://melo-inu.gitbook.io/whitepaper/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", fontWeight: "bold" }}
          >
            CLICK HERE
          </a>{" "}
          <b></b> <i></i>.
        </p>

        <br />
        <h4 style={{ color: "white" }}>Melo Inu CANTO</h4>
        <div>
          <img
            src="/favicon (2).ico"
            width={360}
            height={340}
            alt="Hero asset, NFT marketplace"
            quality={100}
          />
          <p>
            <a
              href="https://www.dextools.io/app/en/canto/pair-explorer/0x0958093f4bbf679e5898a46215d2ecb400ce4c67"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", fontWeight: "bold" }}
            >
              Click Me 0x0958093f4bbf679e5898a46215d2ecb400ce4c67
            </a>{" "}
            <b></b> <i></i>.
          </p>
        </div>
        <br />
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center",  }}>
  <div style={{ maxWidth: "800px", padding: "0 20px" }}>
    <h5 style={{ fontWeight: "bold", color: "white", textAlign: "center" }}>
      Melo Inu was birthed on Canto Blockchain originally with a renounced contract and burned liquidity. We chose Canto because it was a new private blockchain that encouraged developer building to help expand the network. After 3 weeks of trading, the community suggested moving over to BSC for more volume, seeing as though Canto was a new chain, we decided to do so for the community. Now, because the contract was renounced and liquidity burned with no-upgradability, we were forced to launch the same contract on BSC and airdrop CANTO holders the new BSC Address. So yes, at this moment, there is a Melo Inu Canto contract as well as a BSC Contract.
    </h5>
    <h5 style={{ fontWeight: "bold", color: "white", textAlign: "center",  }}>
      MAI was the AI token in our ecosystem on CANTO that the community agreed upon sacrificing the liquidity to help us start the Melo Liquid Protocol, the Kami Shinto. All 15 original OG Holders from the launch of MAI were snapshotted and will be Airdropped the Equivalent amount in SHINTO by 4/15. Melo AI Dapp is still live as utility and can be accessed on the dashboard.
    </h5>
    <h5 style={{ fontWeight: "bold", color: "white", textAlign: "center",  }}>
      As the Melo and Canto Ecosystem grow, eventually, so will Melo Canto. Melo Inu Canto will remain live on Canto as a safe meme to turn to in the early stages of the Canto network. We will find ways to innovate in every place we are.
    </h5>
  </div>
</div>

      </div>
    </div>
  );
};

export default thestory;
