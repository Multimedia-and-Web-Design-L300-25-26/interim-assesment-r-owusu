import btc from "../assets/images/bitcoin.png";
import eth from "../assets/images/ethereum.png";
import usdt from "../assets/images/tether.png";
import bnb from "../assets/images/BNB.png";
import xrp from "../assets/images/XRP.png";
import usdc from "../assets/images/USDC.png";
import prcl from "../assets/images/parcl.png";
import plume from "../assets/images/plume.png";
import asm from "../assets/images/assembleAI.png";
import kite from "../assets/images/Kite.png";
import ocean from "../assets/images/oceanProtocol.png";
import farm from "../assets/images/HarvestFinance.png";
import hype from "../assets/images/Hyperliquid.png";
import jup from "../assets/images/Jupiter.png";
import light from "../assets/images/Lighter.png";
import sent from "../assets/images/sentient.png";
import wal from "../assets/images/walrus.png";
import ray from "../assets/images/Raydium.png";
import alcx from "../assets/images/Alchemix.png";
import spring from "../assets/images/spring.png";

const coinImageMap = {
  BTC: btc,
  ETH: eth,
  USDT: usdt,
  BNB: bnb,
  XRP: xrp,
  USDC: usdc,
  PRCL: prcl,
  PLUME: plume,
  ASM: asm,
  KITE: kite,
  OCEAN: ocean,
  FARM: farm,
  HYPE: hype,
  JUP: jup,
  LIGHT: light,
  SENT: sent,
  WAL: wal,
  RAY: ray,
  ALCX: alcx,
  SPRING: spring,
  // CDN fallbacks for coins without local assets
  SOL: "https://assets.coingecko.com/coins/images/4128/small/solana.png",
  DOGE: "https://assets.coingecko.com/coins/images/5/small/dogecoin.png",
  ADA: "https://assets.coingecko.com/coins/images/975/small/cardano.png",
  AVAX: "https://assets.coingecko.com/coins/images/12559/small/Avalanche_Circle_RedWhite_Trans.png",
};

export function getCoinImageUrl(symbol) {
  return (
    coinImageMap[symbol.toUpperCase()] ??
    `https://assets.coingecko.com/coins/images/1/small/${symbol.toLowerCase()}.png`
  );
}
