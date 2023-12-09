const { ethers } = require("ethers");

/**
 * Create Providers
 */
const MUMBAI_80001 = new ethers.providers.JsonRpcProvider(
  // process.env.MUMBAI_80001,
  "https://rpc.ankr.com/polygon_mumbai",
  80001
);
const universal_provider = new ethers.providers.JsonRpcProvider(
  "https://rpc.ankr.com/multichain/79258ce7f7ee046decc3b5292a24eb4bf7c910d7e39b691384c7ce0cfb839a01"
);

const GOERLIETH = new ethers.providers.JsonRpcProvider(
  "https://rpc.ankr.com/eth_goerli",
  5
);

const QuickNode = new ethers.providers.JsonRpcProvider(
  "https://rpc.ankr.com/celo/13fd36280e38d43b0fc607f927263939f76ae47400cb4df9862c2210b93f131c"
);

const ScrollSepolia = new ethers.providers.JsonRpcProvider(
  "https://rpc.ankr.com/scroll_sepolia_testnet"
);

const ScrollMainet = new ethers.providers.JsonRpcProvider(
  "https://rpc.ankr.com/scroll/13fd36280e38d43b0fc607f927263939f76ae47400cb4df9862c2210b93f131c",
  534352
);

const NeonEVM = new ethers.providers.JsonRpcProvider(
  "https://neon-mainnet.everstake.one",
  245022934
);

const BaseMainet = new ethers.providers.JsonRpcProvider(
  "https://rpc.ankr.com/base/13fd36280e38d43b0fc607f927263939f76ae47400cb4df9862c2210b93f131c",
  8453
);

const ArbitrumMainet = new ethers.providers.JsonRpcProvider(
  "https://rpc.ankr.com/arbitrum/13fd36280e38d43b0fc607f927263939f76ae47400cb4df9862c2210b93f131c"
);

const zkevmMainet = new ethers.providers.JsonRpcProvider(
  "https://rpc.ankr.com/polygon_zkevm/13fd36280e38d43b0fc607f927263939f76ae47400cb4df9862c2210b93f131c"
);
const zkevmtestnet= new ethers.providers.JsonRpcProvider(
  "https://rpc.ankr.com/polygon_zkevm_testnet/13fd36280e38d43b0fc607f927263939f76ae47400cb4df9862c2210b93f131c"
);

const LineaMainet = new ethers.providers.JsonRpcProvider(
  "https://1rpc.io/linea"
);

const ZkSyncMainet = new ethers.providers.JsonRpcProvider(
  "https://rpc.ankr.com/zksync_era/13fd36280e38d43b0fc607f927263939f76ae47400cb4df9862c2210b93f131c"
);

const MantleMainet = new ethers.providers.JsonRpcProvider(
  "https://rpc.ankr.com/mantle/13fd36280e38d43b0fc607f927263939f76ae47400cb4df9862c2210b93f131c"
);

const CeloMainet = new ethers.providers.JsonRpcProvider(
  "https://rpc.ankr.com/celo/13fd36280e38d43b0fc607f927263939f76ae47400cb4df9862c2210b93f131c"
);

const bsc = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/bsc");

const polygon = new ethers.providers.JsonRpcProvider(
  "https://rpc.ankr.com/polygon/7906078e674202ad67a7d9560d1ee305a91251a9e95a6046dbaeb7e64d2023bd"
);

const eth = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/eth");


const NeonEVMtestnet = new ethers.providers.JsonRpcProvider(
  "https://proxy.devnet.neonlabs.org/solana"
);

const Basetestnet = new ethers.providers.JsonRpcProvider(
  "https://rpc.ankr.com/base_goerli/13fd36280e38d43b0fc607f927263939f76ae47400cb4df9862c2210b93f131c"
);

const ArbitrumTestnet = new ethers.providers.JsonRpcProvider(
  "https://sepolia-rollup.arbitrum.io/rpc"
);

const Lineatestnet = new ethers.providers.JsonRpcProvider(
  "https://rpc.goerli.linea.build"
);

const ZkSynctestnet = new ethers.providers.JsonRpcProvider(
  "https://testnet.era.zksync.dev"
);

const Mantletestnet = new ethers.providers.JsonRpcProvider(
  "https://rpc.ankr.com/mantle_testnet/13fd36280e38d43b0fc607f927263939f76ae47400cb4df9862c2210b93f131c"
);

const Celotestnet = new ethers.providers.JsonRpcProvider(
  "https://alfajores-forno.celo-testnet.org"
);

const sepoliaTestnet = new ethers.providers.JsonRpcProvider(
  "https://rpc.ankr.com/eth_sepolia"
);

module.exports = {
  sepoliaTestnet,
  MUMBAI_80001,
  GOERLIETH,
  QuickNode,
  ScrollSepolia,
  universal_provider,
  ScrollMainet,
  NeonEVM,
  BaseMainet,
  ArbitrumMainet,
  zkevmMainet,
  LineaMainet,
  ZkSyncMainet,
  MantleMainet,
  CeloMainet,
  bsc,
  polygon,
  eth,
  NeonEVMtestnet,
  Basetestnet,
  Mantletestnet,
  Celotestnet,
  Lineatestnet,
  ArbitrumTestnet,
  ZkSynctestnet,
  zkevmtestnet
};
