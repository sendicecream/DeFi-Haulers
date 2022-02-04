import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import MintButton from "./components/MintButton";
import ConnectButton from "./components/ConnectButton";
import {
  Mainnet,
  DAppProvider,
  useEtherBalance,
  useEthers,
  Config,
} from "@usedapp/core";
import sample from "./components/DeFiHaulers2.mp4";
ReactDOM.render(
  <React.StrictMode>
    <DAppProvider>
      <App></App>
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

export function App() {
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);

  return (
    <div>
      <link rel="stylesheet" href="/css/video-react.css" />
      <link href="https://fonts.googleapis.com" rel="preconnect" />
      <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
      <link
        href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Ropa+Sans:ital@0;1&display=swap"
        rel="stylesheet"
      />
     <header class="header-banner-top">

<div class="main-navigation">
  <input type="checkbox" name="mobile-menu-toggle" id="mobile-menu-toggle" class="mobile-menu-box" />
  <nav class="horizontal-nav primary-wrapper" role='navigation'>
    <ul>
    <li class="active-link"><img src="https://assets.codepen.io/7282469/Asset+3.svg" id="logo"/></li>
      <li class="active-link"><a href="#Roadmap">Roadmap</a></li>
      <li><a href="#About">About</a></li>
      <li class="nav-link"><a href="https://twitter.com/DefiHaulers">Twitter</a></li>
      <li class="nav-link"><a href="https://discord.gg/z3CEajkg">Discord</a></li>
      <li><ConnectButton/></li>

    </ul>
  </nav>
  <label for="mobile-menu-toggle" class="mobile-menu-label hidden"></label>
</div>


</header>
    <section className="clickbait4" id="mint">
        <div className="wrapper">
          <section className="columns">
            <div className="column">
            
           

              <br />

              <center>
                <MintButton />
                <br />
              </center>
            </div>
          </section>
        </div>


      </section>
      
      <section className="clickbait2" id="roadmap">
        <div className="wrapper">
          <section className="columns">
            <div className="column">
              <h6>Hauler [ haw-ler ]</h6>
              <h6>
                <span className="h8">noun</span> :
              </h6>
              <div className="wrapper">
                <span className="h8">1. &nbsp;</span>
                A person who hauls.
                <br />
                <span className="h8">2. &nbsp;</span>
                A commercial trucking company.
                <br />
                <span className="h8">3. &nbsp;</span>
                A vehicle used for hauling or trucking.
                <br />
                <span className="h8">4. &nbsp;</span>
                Slang. A car capable of very high speeds.
              </div>
            </div>

            <div class="exploded"></div>
          </section>
        </div>
      </section>
      <section className="clickbait5" id="roadmap">
        <div className="wrapper">
          <header>
            <h3>Roadmap</h3>
          </header>
          <section className="columns">
            <div className="column">
              <h3>1.</h3>
              <h2>Launch + Mint Open</h2>
              <h1>
                DeFi Haulers launched + opened mint on February 4th, 2022.{" "}
              </h1>
              <h1>
                <br></br>1 AVAX per mint. No max per wallet.
                <br></br>A total of 6,210 Haulers are ready to be minted into
                existence. Full rarity breakdown, metadata, and creation process
                information will be released shortly after mint close.
              </h1>
            </div>
            <div className="column">
              <h3>2.</h3>
              <h2>Degen Motors</h2>
              <h1>
                When all 6,210 Haulers have been dispatched - Degen Motors will
                begin accepting trade-in's. Hauler owners may choose to trade
                any Hauler at any time in exchange for 0.5 AVAX. This is an
                automated process in which users instantly receive the 0.5 AVAX
                payout. Trade-In Haulers are sent directly to the scrap yard
                (burned).
              </h1>
            </div>
            <div className="column">
              <h3>3.</h3>
              <h2>haulers.online</h2>
              <h1>
                DeFi Haulers exist to serve as both collectible NFT’s and
                playable in-game vehicles in haulers.online - a browser based,
                multi-player, “top down” style, driving based game world. The
                game is four months into prototyping inside Unreal Engine 5 -
                with primary focus on core game mechanics + art direction. More
                details TBA.
              </h1>
            </div>
          </section>
        </div>
      </section>
      <section className="clickbait4" id="pricing">
        <div className="wrapper">
          <header>
            <h3>Please note:</h3>
          </header>
          <section className="columns">
            The trade-in payout fund will start with a balance of 2,000 AVAX,
            and will operate for 60 days from time of mint close, or until the
            2,000 AVAX balance is depleted - whichever occurs first. Remaining
            AVAX balance after 60 days will be distributed evenly amongst Hauler
            owners.
          </section>
        </div>
      </section>

      <section className="clickbait3" id="about">
        <div className="wrapper">
          <section className="columns">
            <div className="card">
              <div className="card-avatar">
                <img src="https://assets.codepen.io/7282469/w1.png?width=105&format=auto" />
                <div className="card-details">
                  Issued:
                  <br />
                  Exp: 02/02/2022
                  <br />
                  Please sign below:
                </div>
                <span className="label">Upgrayedd</span>
              </div>
              <div className="card-details">
                <div className="name">
                  <span className="h8">DeFi Haulers</span>
                  <h4>Driver Identification</h4>
                </div>
                <div className="card-about">
                  <div className="item">
                    <span className="label">Alias:</span>
                    <span className="value">"dev"</span>
                  </div>
                  <div className="item">
                    <span className="label">Sex:</span>
                    <span className="value">M</span>
                  </div>
                  <div className="item">
                    <span className="label">Location:</span>
                    <span className="value">WI, USA</span>
                  </div>
                </div>
                <div className="skills">
                  <span className="label">Telegram:</span>
                  <span className="value">@sendicecream</span>
                </div>
                <div className="skills">
                  <span className="label">Instagram:</span>
                  <span className="value">@sendicecream</span>
                </div>
              </div>
            </div>
            <section className="clickbait2" id="pricing">
              <div className="column1">
                <h6>Hello Drivers,</h6>
                My name is<span className="h8">Upgrayedd</span> .
                <br />
                Strong background in design + product development.
                <br />
                Repeat rugpull victim. Recovering shit-coin addict.
                <br />I hope you like the pictures.💜
              </div>
            </section>
          </section>
        </div>
      </section>
      <section className="clickbait5" id="pricing">
        <div className="footer">
          <h1>© DeFi Haulers LLC | 2022</h1>
        </div>
      </section>
      <script
        data-cf-beacon='{"token": "871c0057683e4ee0a83d41a8635bdf57"}'
        defer=""
        src="https://static.cloudflareinsights.com/beacon.min.js"
      ></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/js/bootstrap.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <script src="./script.js"></script>
    </div>
  );
}
