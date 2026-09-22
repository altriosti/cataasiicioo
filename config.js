// CatASIC website settings (Base mainnet).
window.CATASIC_CONFIG = {
  chainId: 8453,
  // Alchemy endpoints: each visitor starts on a random one; if it fails, the next one is used.
  rpcs: [
    "https://base-mainnet.g.alchemy.com/v2/alch_8voWyY0L9SS3gN4roGhkZ",
    "https://base-mainnet.g.alchemy.com/v2/alch_FMvGsia1aQ2PxWk19OdXM",
    "https://base-mainnet.g.alchemy.com/v2/alch_MYmvDBCEUoP_Od_VuwHv8",
    "https://base-mainnet.g.alchemy.com/v2/alch_p2dM-NLpaqEjWN2jKNJNQ",
    "https://base-mainnet.g.alchemy.com/v2/alch_2L3boddt3B0ksuR1NGS6F",
    "https://base-mainnet.g.alchemy.com/v2/alch_6GgdHkp2NElngCyYLYjRM",
    "https://base-mainnet.g.alchemy.com/v2/alch_nluor3_2IUe5s7FQbelhd",
    "https://base-mainnet.g.alchemy.com/v2/alch_yjNqLF5noTeudb73VCyky",
    "https://base-mainnet.g.alchemy.com/v2/alch_bXqs-aPrJb8G3a-X942I5",
    "https://base-mainnet.g.alchemy.com/v2/alch_jW9ONAXL2Ju9Uu7QuEsgc"
  ],
  // Public Base RPC: used last, and when adding Base to a wallet.
  rpc: "https://mainnet.base.org",
  explorer: "https://basescan.org",
  nft: "0x7C5C10866675e2c72dA8229F03CE708f205cb2FB",     // CatASIC (current)
  token: "0x0f0930c12F6043a89081Aa5E7481e301ED62757C",   // CTASICToken (current)
  buyback: "0xc18eb94cEF5D0C53E0EE40991aAe43e5362d791B", // Buyback (current, automatic)
  legacyNft: "0x712c75824Fe9398aDd05E65c60389f68A5bB39ba", // first CatASIC: holders can still claim rent there
  deployBlock: 0,

  // Set paused to true to stop mining on the website. Set to false to allow mining again.
  paused: true,
  pausedMessage: "Mining is paused for scheduled maintenance. Your cats and rent are safe. We will be back soon."
};
