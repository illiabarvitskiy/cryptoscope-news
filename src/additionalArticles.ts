import type { Article } from './types';

/**
 * Evergreen explainers for CryptoScope News.
 * Each article uses primary-source documentation where practical.
 * Review links and content before publishing updates to fast-changing topics.
 */
export const additionalArticles: Article[] = [
  {
    id: 7,
    title: 'Crypto wallets explained: custodial vs. self-custody',
    category: 'Security',
    date: 'Oct 14, 2026',
    read: '7 min read',
    excerpt: 'Learn who controls the keys in different wallet models, what recovery means, and how to choose a setup that matches your needs.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=85',
    author: 'CryptoScope Research',
    body: [
      'A crypto wallet is a tool for managing the keys that authorize activity on a blockchain. The assets themselves are recorded on the network; a wallet helps you prove control over the addresses associated with them.',
      'With a custodial service, a company controls the private keys or account infrastructure on your behalf. This can make account recovery and everyday use more familiar, but it also means you depend on the provider, its security practices and its withdrawal policies.',
      'With self-custody, you control the recovery phrase or private keys. That brings more direct control, but also more responsibility: losing the recovery material may mean losing access, and anyone who obtains it may be able to move the assets.',
      'A hardware wallet keeps signing keys isolated from a general-purpose computer, but it does not make every transaction safe. Users still need to verify addresses, networks, transaction details and the authenticity of wallet software.',
      'Before choosing a wallet, consider the assets and networks you need, how often you transact, how you will back up recovery information and what happens if your device is lost. Never enter a recovery phrase into a website because a stranger or unsolicited message asks you to.'
    ],
    sourceNote: 'Further reading: Bitcoin developer guide https://developer.bitcoin.org/devguide/wallets.html ; Ethereum security guidance https://ethereum.org/en/security/'
  },
  {
    id: 8,
    title: 'Stablecoins explained: pegs, reserves and depeg risk',
    category: 'DeFi',
    date: 'Oct 14, 2026',
    read: '8 min read',
    excerpt: 'Stablecoins aim to track an external value, but their mechanisms, backing and risks can differ substantially.',
    image: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901d?auto=format&fit=crop&w=1200&q=85',
    author: 'CryptoScope Research',
    body: [
      'A stablecoin is a digital token designed to maintain a relatively stable value against a reference asset, often a currency such as the US dollar. The design goal is stability, not a guarantee that the token will always trade at its target price.',
      'Fiat-backed models generally rely on reserves and arrangements for issuance and redemption. Users should examine who holds the reserves, what assets are included, whether independent attestations or audits are published, and who can redeem tokens under the issuer’s terms.',
      'Crypto-collateralized systems use digital assets as backing and may rely on overcollateralization, automated liquidation and smart contracts. Algorithmic designs use different mechanisms and may be especially vulnerable if confidence or market liquidity collapses.',
      'A depeg can occur when a token trades away from its target. Causes can include doubts about reserves, redemption restrictions, market stress, liquidity shortages or failures in the underlying protocol. A token’s historical stability does not remove these risks.',
      'Before using a stablecoin, read the issuer’s primary documentation, understand the redemption process and check whether the service is available in your jurisdiction. Stablecoins are not automatically bank deposits and may not carry deposit insurance.'
    ],
    sourceNote: 'Further reading: Financial Stability Board recommendations https://www.fsb.org/ ; Bank for International Settlements research https://www.bis.org/'
  },
  {
    id: 9,
    title: 'How blockchain transactions are confirmed',
    category: 'Blockchain',
    date: 'Oct 14, 2026',
    read: '6 min read',
    excerpt: 'From signing a transaction to network confirmation, understand the basic steps behind sending crypto.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=85',
    author: 'CryptoScope Research',
    body: [
      'A blockchain transaction begins when a wallet prepares transaction data and signs it with the appropriate private key. The signature lets the network verify authorization without revealing the private key itself.',
      'The transaction is broadcast to network nodes. Depending on the blockchain, nodes check details such as the signature, available balance, nonce or other protocol rules before relaying it to other participants.',
      'Valid transactions may wait in a pending pool until a block producer includes them in a block. Fees, network demand and protocol-specific rules can affect how quickly that happens. A pending transaction is not the same as a confirmed one.',
      'After inclusion, additional blocks or checkpoints can increase confidence that the transaction will remain part of the accepted chain. Different networks define finality differently, so there is no single confirmation count that applies everywhere.',
      'Always verify the destination address, asset and network before sending. Some transfers cannot be reversed by a customer-support team, and sending funds to an incompatible network or incorrect address can make recovery difficult or impossible.'
    ],
    sourceNote: 'Further reading: Bitcoin developer guide https://developer.bitcoin.org/devguide/ ; Ethereum transactions https://ethereum.org/en/developers/docs/transactions/'
  },
  {
    id: 10,
    title: 'Crypto transaction fees: what you are actually paying for',
    category: 'Blockchain',
    date: 'Oct 14, 2026',
    read: '6 min read',
    excerpt: 'Network fees compensate for block space or computation, and they can change quickly when demand rises.',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=1200&q=85',
    author: 'CryptoScope Research',
    body: [
      'A blockchain fee is generally paid to have a transaction processed under the network’s rules. The fee model depends on the protocol: one network may price transaction size, while another prices computational work and the amount of data used.',
      'Fees can rise when many users compete for limited block space. A wallet may suggest a fee based on recent conditions, but estimates are not guarantees. A low fee can mean a longer wait or a transaction that remains pending.',
      'On smart-contract networks, a simple transfer and a complex contract interaction can consume different amounts of computation. The total cost may therefore depend on both the network’s current pricing and the operation being performed.',
      'Layer 2 networks may offer lower transaction costs by processing activity differently, but bridging assets between networks can introduce extra fees and additional security assumptions. The cheapest route is not necessarily the safest or most suitable.',
      'Before confirming a transaction, check the network, the estimated fee and the final amount. Avoid relying on old fee screenshots or fixed claims about what a transaction should cost, because network conditions change.'
    ],
    sourceNote: 'Further reading: Ethereum gas documentation https://ethereum.org/en/developers/docs/gas/ ; Bitcoin fee guidance https://bitcoin.org/en/you-need-to-know'
  },
  {
    id: 11,
    title: 'What is a crypto exchange, and how should you assess one?',
    category: 'Bitcoin',
    date: 'Oct 14, 2026',
    read: '8 min read',
    excerpt: 'A practical checklist for comparing exchange custody, fees, security, withdrawals and regulatory status.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=85',
    author: 'Editorial Desk',
    body: [
      'A centralized crypto exchange provides a platform where customers can buy, sell or trade digital assets. Many services also offer custody, deposits, withdrawals and other products, each with its own terms and risks.',
      'Compare the complete fee schedule rather than just the headline trading fee. Deposits, withdrawals, spreads, conversion charges and funding costs can all affect the total cost of using a platform.',
      'Security questions include account protection, withdrawal allowlists, authentication options, incident disclosures and how customer assets are held. Security claims should be checked against clear documentation rather than marketing language alone.',
      'A proof-of-reserves report may provide information about certain assets at a particular time, but it does not automatically establish a company’s full financial health, liabilities, internal controls or future solvency.',
      'Check the official regulator register for your jurisdiction and read the platform’s terms about custody, account restrictions and dispute resolution. Keep only the funds you need on a service, and remember that exchange balances are not automatically protected like insured bank deposits.'
    ],
    sourceNote: 'Further reading: U.S. SEC investor education https://www.investor.gov/ ; UK FCA cryptoasset guidance https://www.fca.org.uk/consumers/cryptoassets'
  },
  {
    id: 12,
    title: 'Bitcoin halving: what changes and what does not',
    category: 'Bitcoin',
    date: 'Oct 14, 2026',
    read: '7 min read',
    excerpt: 'The scheduled reduction in block subsidies is part of Bitcoin’s issuance rules, but it does not predict a market price.',
    image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=1200&q=85',
    author: 'CryptoScope Research',
    body: [
      'Bitcoin’s protocol reduces the block subsidy at scheduled intervals measured in blocks. This event is commonly called a halving because the new subsidy is half the previous amount.',
      'The subsidy is part of the reward that incentivizes miners to contribute computing power and help secure the network. Miners can also receive transaction fees included in blocks.',
      'A halving changes the rate at which new bitcoin enters circulation. It does not change the maximum supply rule into a promise about price, and it does not guarantee that demand will rise or that the market will respond in a particular way.',
      'Mining economics depend on several variables, including the subsidy, transaction fees, equipment efficiency, electricity costs and the market price of bitcoin. Individual operators can experience very different outcomes.',
      'Historical price comparisons should be treated carefully. Market conditions, investor access, regulation and broader economic factors differ from cycle to cycle, so past performance cannot establish what will happen next.'
    ],
    sourceNote: 'Further reading: Bitcoin developer guide to block chain and mining https://developer.bitcoin.org/devguide/block_chain.html ; Bitcoin white paper https://bitcoin.org/bitcoin.pdf'
  },
  {
    id: 13,
    title: 'Token approvals and wallet permissions: a safety guide',
    category: 'Security',
    date: 'Oct 14, 2026',
    read: '7 min read',
    excerpt: 'Some smart-contract interactions grant spending permission beyond one transaction. Learn how to review and limit that exposure.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=85',
    author: 'Editorial Desk',
    body: [
      'On smart-contract networks, a token approval can allow a contract to move a specified amount of a token from your wallet. Some interfaces request a limited allowance; others may request a very large or effectively unlimited amount.',
      'An approval is different from a transfer. It can create a permission that remains in place after the original website session ends, depending on the token and contract involved.',
      'Before approving, verify the application domain, the contract address when available, the token and the requested allowance. A familiar brand name or polished interface does not prove that a page is genuine.',
      'Review existing approvals using trusted tools and the relevant blockchain explorer. Revoking an approval may require a network transaction fee, and revocation does not undo transfers that already happened.',
      'If a site unexpectedly asks you to sign a message or transaction, stop and inspect the wallet prompt. Never share a recovery phrase to fix an approval problem, and be wary of unsolicited direct messages offering recovery help.'
    ],
    sourceNote: 'Further reading: Ethereum security https://ethereum.org/en/security/ ; MetaMask security guidance https://support.metamask.io/'
  },
  {
    id: 14,
    title: 'Crypto bridges explained: convenience and cross-chain risk',
    category: 'Blockchain',
    date: 'Oct 14, 2026',
    read: '8 min read',
    excerpt: 'Bridges move value or messages between networks, but designs rely on different validators, contracts and trust assumptions.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=85',
    author: 'CryptoScope Research',
    body: [
      'A blockchain bridge is infrastructure that helps transfer assets or messages between separate networks. Since independent blockchains do not automatically share a common state, bridges need a mechanism to verify or authorize cross-chain activity.',
      'Some designs use a group of validators or signers, while others rely on smart contracts, light clients, proofs or combinations of these approaches. The security model depends on the implementation, not just the word “bridge.”',
      'Wrapped assets may represent tokens locked or accounted for on another chain. Users need to understand what backs the representation, who can release the original assets and what happens if the bridge’s contracts or operators fail.',
      'Bridge risks include smart-contract vulnerabilities, compromised keys, faulty message verification, liquidity shortages and delays during network congestion. Audits and bug bounties reduce some risks but cannot eliminate them.',
      'Before bridging, verify the official application, destination network, supported token and withdrawal process. Consider whether the amount and purpose justify the additional complexity, and do not follow bridge links sent by unknown accounts.'
    ],
    sourceNote: 'Further reading: Ethereum.org bridges overview https://ethereum.org/en/bridges/ ; review each bridge’s official security documentation before use.'
  },
  {
    id: 15,
    title: 'Crypto market capitalization: useful metric, common mistakes',
    category: 'Altcoins',
    date: 'Oct 14, 2026',
    read: '6 min read',
    excerpt: 'Market cap is price multiplied by circulating supply, but it is not the same as cash invested or money available to sell.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=85',
    author: 'CryptoScope Research',
    body: [
      'A token’s market capitalization is commonly calculated by multiplying its current market price by its circulating supply. It is a snapshot metric, not a direct measure of the amount of money invested in the asset.',
      'Circulating supply estimates can differ between data providers because projects may classify locked, vested, reserved or otherwise restricted tokens differently. Always check how a provider defines its figures.',
      'Fully diluted valuation applies a price to a broader supply figure, often including tokens that may enter circulation in the future. It can help describe potential dilution, but it also depends on assumptions about token supply and future price.',
      'A small amount of trading can sometimes move the quoted price, especially in thin markets. Multiplying that price by every token does not mean every holder could sell at that valuation.',
      'Use market cap alongside liquidity, trading volume, supply schedules, holder concentration and project fundamentals. No single metric can establish whether an asset is fairly priced or likely to rise.'
    ],
    sourceNote: 'Further reading: CoinMarketCap methodology https://coinmarketcap.com/methodology/ ; verify token supply against project documentation and blockchain data.'
  },
  {
    id: 16,
    title: 'How to research a crypto project before trusting its claims',
    category: 'Altcoins',
    date: 'Oct 14, 2026',
    read: '9 min read',
    excerpt: 'A repeatable research checklist covering documentation, token supply, governance, security and evidence of real use.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85',
    author: 'Editorial Desk',
    body: [
      'Start with primary documents: the project’s technical documentation, governance proposals, token distribution schedule and public repositories where relevant. Treat anonymous social posts and promotional threads as leads to verify, not as proof.',
      'Identify the problem the project claims to solve and ask whether blockchain infrastructure is necessary for that use case. Look for a clear explanation of who uses the product, what the token does and which parts are already operating.',
      'Examine token supply and incentives. Important questions include who received early allocations, when tokens unlock, whether insiders can change supply rules and whether reported usage depends on temporary rewards.',
      'Security review should include audits, disclosed incidents, upgrade permissions, admin keys and the process for responding to vulnerabilities. An audit is a useful signal, not a guarantee that code is free of defects.',
      'Look for independently verifiable evidence and competing explanations. A growing community, exchange listing or rising token price does not by itself demonstrate product quality. Record uncertainties and avoid treating a research checklist as a prediction of returns.'
    ],
    sourceNote: 'Research starting points: project documentation and repositories; Ethereum security guidance https://ethereum.org/en/security/ ; SEC investor alerts https://www.investor.gov/'
  },
  {
    id: 17,
    title: 'Crypto volatility and risk management basics',
    category: 'Bitcoin',
    date: 'Oct 14, 2026',
    read: '7 min read',
    excerpt: 'Understand position size, concentration, liquidity and the limits of stop orders before taking market risk.',
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1200&q=85',
    author: 'CryptoScope Research',
    body: [
      'Cryptoasset prices can move sharply over short periods, and trading may take place around the clock across multiple venues. Volatility can create both opportunities and rapid losses, especially when leverage is involved.',
      'Position sizing starts with deciding how much loss you could tolerate without jeopardizing essential expenses or financial obligations. A trade idea should not determine the size of a position on its own.',
      'Diversification can reduce dependence on a single asset or service, but it does not guarantee a profit or prevent losses during broad market declines. Assets that appear different may still be exposed to the same market or infrastructure risks.',
      'Stop orders and other execution tools have limitations. In fast or illiquid markets, an order may execute at a different price than expected, and exchange outages or gaps in liquidity can affect execution.',
      'Avoid borrowing money you cannot repay to trade volatile assets. Keep a record of assumptions, fees and outcomes, and remember that educational risk-management concepts cannot make an uncertain market predictable.'
    ],
    sourceNote: 'Further reading: Investor.gov risk resources https://www.investor.gov/ ; CFTC customer advisories https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/index.htm'
  },
  {
    id: 18,
    title: 'Crypto taxes: records to keep before filing',
    category: 'Regulation',
    date: 'Oct 14, 2026',
    read: '7 min read',
    excerpt: 'Tax rules differ by country, but organized transaction records can make it easier to answer questions and seek qualified advice.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85',
    author: 'Editorial Desk',
    body: [
      'Tax treatment of digital assets depends on the laws of the country where a person is tax-resident and on the details of each transaction. Selling, exchanging, spending or receiving tokens can have different consequences in different jurisdictions.',
      'Keep records of dates, asset amounts, transaction IDs, the type of activity, fees and the value used for any required local-currency calculation. Exchange exports and wallet histories can be useful, but they should be checked for missing transfers and duplicate entries.',
      'Transfers between wallets you control may need to be distinguished from sales or payments. Clear records of wallet ownership and transaction references can help explain movements that otherwise look like unexplained disposals or receipts.',
      'Do not assume that a platform will report every event correctly or that a tax tool automatically understands every chain and token. Reconcile records and retain the underlying documents that support your calculations.',
      'This is general information, not tax advice. Check the current guidance from your tax authority or consult a qualified professional familiar with digital assets in your jurisdiction, particularly for DeFi, staking, mining or cross-border activity.'
    ],
    sourceNote: 'Further reading: OECD crypto-asset reporting framework https://www.oecd.org/tax/exchange-of-tax-information/ ; consult your local tax authority for binding rules.'
  }
];
