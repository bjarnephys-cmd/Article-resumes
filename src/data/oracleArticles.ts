import { ArticleItem } from '../types';

export const INITIAL_ORACLE_ARTICLES: ArticleItem[] = [
  {
    id: 'orcl-1',
    order: 1,
    title: 'Oracle Cloud Infrastructure Sees Triple-Digit Revenue Growth Amid Generative AI Surge',
    url: 'https://finance.yahoo.com/quote/ORCL/news/',
    source: 'Yahoo Finance / Bloomberg',
    date: 'Oct 20, 2026',
    category: 'Cloud & AI',
    status: 'completed',
    selected: true,
    content: `Oracle Corporation reported phenomenal momentum in its Oracle Cloud Infrastructure (OCI) unit, clocking a 121% year-over-year revenue expansion. CEO Safra Catz highlighted that demand for high-performance GPU clusters for training large foundational AI models continues to outpace available compute supply. The company's total Remaining Performance Obligations (RPO) jumped from $553 billion to $638 billion in Q4, signaling that enterprise clients are locking in multi-year compute commitments. Chairman Larry Ellison reiterated that Oracle's RDMA network fabric and colocation capabilities give OCI a distinct architectural cost advantage over traditional competitors like AWS and Azure when training trillion-parameter neural models.`,
    summary: {
      title: 'Oracle Cloud Infrastructure Sees Triple-Digit Revenue Growth Amid Generative AI Surge',
      source: 'Yahoo Finance / Bloomberg',
      category: 'Cloud & AI',
      sentiment: 'Bullish',
      readingTime: '2 min read',
      mainIdea: 'Oracle’s cloud infrastructure business is growing at over 100% annually because major AI companies are paying billions to reserve its specialized high-speed supercomputing servers.',
      supportingPoints: [
        'OCI revenue expanded by 121% year-over-year, significantly outperforming legacy cloud competitors in percentage growth.',
        'Remaining Performance Obligations (RPO) surged from $553B to $638B, demonstrating massive multi-year customer commitments.',
        'Oracle uses specialized network cabling (RDMA) that connects tens of thousands of GPUs faster and cheaper than standard cloud setups.',
        'Customer demand for AI model training continues to surpass Oracle’s immediate hardware capacity.'
      ],
      keyTakeaways: [
        'Oracle has transformed from an older database company into a premier hardware host for modern generative AI companies.',
        'The main bottleneck is not customer demand, but acquiring and powering enough chips fast enough.'
      ],
      studentGlossary: [
        { term: 'OCI (Oracle Cloud Infrastructure)', definition: 'Oracle\'s service that lets companies rent supercomputers over the internet rather than purchasing physical hardware.' },
        { term: 'RPO (Remaining Performance Obligations)', definition: 'The total value of signed customer contracts that will turn into revenue in future quarters as work is completed.' },
        { term: 'RDMA Network', definition: 'A high-speed networking technique allowing computers in a cluster to share memory directly without slowing down central processors.' }
      ]
    }
  },
  {
    id: 'orcl-2',
    order: 2,
    title: 'Why Oracle Stock Could Rebound Despite Heavy AI Capex Concerns and Market Volatility',
    url: 'https://finance.yahoo.com/quote/ORCL/news/',
    source: 'Yahoo Finance / Barchart',
    date: 'Oct 19, 2026',
    category: 'Financials & Valuation',
    status: 'completed',
    selected: true,
    content: `While Oracle stock has retreated 31% from peak valuations amid a broader tech selloff and rising interest rates, Wall Street value analysts are making a renewed bull case. Oracle shares currently trade at just 18 times forward earnings—an attractive valuation compared to Microsoft (31x) and Amazon (36x). The primary headwind has been Oracle's aggressive capital expenditure (capex), which reached nearly $90 billion over recent cycles, pushing free cash flow into negative territory. However, analysts note that with GPU utilization pegged at an astonishing 98%, each dollar spent in capex converts into immediate billable capacity as soon as data centers energize.`,
    summary: {
      title: 'Why Oracle Stock Could Rebound Despite Heavy AI Capex Concerns and Market Volatility',
      source: 'Yahoo Finance / Barchart',
      category: 'Financials & Valuation',
      sentiment: 'Bullish',
      readingTime: '2 min read',
      mainIdea: 'Even though Oracle’s heavy spending on new data centers has scared short-term investors, its low stock valuation and near-100% server utilization suggest a strong potential rebound.',
      supportingPoints: [
        'Oracle trades at 18 times forward earnings, which is nearly half the price-to-earnings multiple of Microsoft and Amazon.',
        'The company’s data centers operate at 98% GPU utilization, meaning servers are generating revenue almost immediately upon turning on.',
        'Negative free cash flow of $23.7B reflects aggressive upfront capital investment rather than a decline in customer interest.',
        'Wall Street consensus maintains an average price target of $240, implying significant upside from current levels.'
      ],
      keyTakeaways: [
        'Building AI infrastructure requires painful upfront cash, but Oracle is selling its capacity as fast as it builds it.',
        'Value-oriented tech investors view Oracle as a discounted alternative to the "Magnificent Seven".'
      ],
      studentGlossary: [
        { term: 'Capex (Capital Expenditure)', definition: 'Money spent by a company to buy, build, or upgrade physical assets like buildings, servers, and power lines.' },
        { term: 'Forward P/E Ratio', definition: 'A metric comparing current stock price to estimated future company profits; lower numbers often mean a stock is cheaper.' },
        { term: 'Free Cash Flow (FCF)', definition: 'The cash a company has left over after paying all operating expenses and buying all necessary equipment.' }
      ]
    }
  },
  {
    id: 'orcl-3',
    order: 3,
    title: 'Oracle Partners With AstraZeneca to Accelerate AI Clinical Trials and Drug Discovery',
    url: 'https://finance.yahoo.com/quote/ORCL/news/',
    source: 'Yahoo Finance / Reuters',
    date: 'Oct 18, 2026',
    category: 'Healthcare & Pharma',
    status: 'completed',
    selected: true,
    content: `Pharmaceutical giant AstraZeneca has inked a multi-year global agreement with Oracle to integrate Oracle Health clinical platforms with generative AI models for accelerated drug development. By combining AstraZeneca's genomic libraries with Oracle's high-performance cloud and specialized life sciences applications, researchers estimate patient screening time for Phase II clinical trials can be slashed by up to 40%. The partnership validates Oracle's massive $28 billion acquisition of electronic medical records provider Cerner in 2022, demonstrating how medical records and cloud computing can converge into higher-margin software solutions.`,
    summary: {
      title: 'Oracle Partners With AstraZeneca to Accelerate AI Clinical Trials and Drug Discovery',
      source: 'Yahoo Finance / Reuters',
      category: 'Healthcare & Pharma',
      sentiment: 'Bullish',
      readingTime: '2 min read',
      mainIdea: 'Oracle and pharmaceutical leader AstraZeneca are using artificial intelligence and cloud computing to cut clinical trial candidate recruitment time by 40%.',
      supportingPoints: [
        'The partnership combines patient records from Oracle Health with AstraZeneca’s molecular and genomic databases.',
        'AI screening algorithms reduce the timeline for Phase II oncology and rare disease trial matching.',
        'Validates Oracle’s prior $28 billion acquisition of Cerner by turning patient databases into actionable AI pipelines.',
        'Represents a move beyond raw computing hardware into specialized, high-margin healthcare software.'
      ],
      keyTakeaways: [
        'AI in healthcare is shifting from theoretical research to operational clinical workflows with global pharmaceutical giants.',
        'Oracle’s large enterprise acquisitions provide proprietary data moats that generic cloud providers struggle to replicate.'
      ],
      studentGlossary: [
        { term: 'Clinical Trials', definition: 'Multi-stage human research tests to confirm if a new medicine is safe and effective before general prescription.' },
        { term: 'Genomics', definition: 'The study of an organism’s complete set of DNA, used to tailor medicines to specific patient genetics.' },
        { term: 'Data Moat', definition: 'A unique collection of proprietary information that rivals cannot easily copy or steal.' }
      ]
    }
  },
  {
    id: 'orcl-4',
    order: 4,
    title: 'Steve Eisman Sounds Alarm on Oracle Backlog Concentration and OpenAI Payment Reliance',
    url: 'https://finance.yahoo.com/quote/ORCL/news/',
    source: 'Yahoo Finance / CNBC',
    date: 'Oct 17, 2026',
    category: 'Risk & Strategy',
    status: 'completed',
    selected: true,
    content: `Famed investor Steve Eisman, profiled in Michael Lewis's "The Big Short," issued a cautionary note regarding Oracle's skyrocketing contractual backlog. Speaking on financial television, Eisman suggested that an estimated 45% to 50% of Oracle's $638 billion Remaining Performance Obligations (RPO) may be tied directly or indirectly to a single counterparty: OpenAI. Eisman warned that if venture capital funding for foundation model training dries up or OpenAI experiences financial stress, Oracle could face severe payment delinquencies on long-term data center leases. Analysts debated whether OpenAI's corporate backing from Microsoft mitigates this concentration risk.`,
    summary: {
      title: 'Steve Eisman Sounds Alarm on Oracle Backlog Concentration and OpenAI Payment Reliance',
      source: 'Yahoo Finance / CNBC',
      category: 'Risk & Strategy',
      sentiment: 'Bearish',
      readingTime: '2 min read',
      mainIdea: 'Investor Steve Eisman warned that nearly half of Oracle’s massive $638 billion order backlog may depend on one single company, OpenAI, creating significant financial vulnerability.',
      supportingPoints: [
        'An estimated 45% to 50% of Oracle’s multi-year cloud backlog is linked to OpenAI training contracts.',
        'If venture capital slows or AI companies fail to monetize, Oracle could be left holding expensive, half-paid data centers.',
        'Counter-analysts argue that Microsoft’s backing and guaranteed demand for AI capacity provide an adequate safety cushion.',
        'Highlights the risk of "customer concentration" where losing one client damages overall company earnings.'
      ],
      keyTakeaways: [
        'A huge order backlog is only valuable if the buying customer stays solvent and continues paying their bills.',
        'Investors should scrutinize customer diversification rather than just cheering headline backlog billions.'
      ],
      studentGlossary: [
        { term: 'Customer Concentration Risk', definition: 'A danger that happens when too much of a company\'s income depends on only one or two big customers.' },
        { term: 'Counterparty', definition: 'The other party participating in an official financial contract or business deal.' },
        { term: 'Delinquency', definition: 'Failing to pay an agreed debt or bill by its legal due date.' }
      ]
    }
  },
  {
    id: 'orcl-5',
    order: 5,
    title: 'Oracle Plans Up to $50 Billion in Debt and Equity Issuance to Fund Gigawatt Data Centers',
    url: 'https://finance.yahoo.com/quote/ORCL/news/',
    source: 'Yahoo Finance / Wall Street Journal',
    date: 'Oct 16, 2026',
    category: 'Capital & Financing',
    status: 'completed',
    selected: true,
    content: `Oracle Corporation has filed shelf registration documents indicating plans to raise between $45 billion and $50 billion through senior notes and prospective equity-linked securities. The proceeds are designated for constructing next-generation gigawatt-scale data center campuses required for massive AI training clusters. With total corporate debt currently hovering at $167 billion, credit rating agencies Moody's and S&P have placed Oracle's BBB credit rating under scrutiny. Management emphasized that pre-sold contractual revenue guarantees from tier-1 enterprise customers will generate strong recurring operating cash to service the new bond covenants.`,
    summary: {
      title: 'Oracle Plans Up to $50 Billion in Debt and Equity Issuance to Fund Gigawatt Data Centers',
      source: 'Yahoo Finance / Wall Street Journal',
      category: 'Capital & Financing',
      sentiment: 'Mixed',
      readingTime: '2 min read',
      mainIdea: 'Oracle is seeking up to $50 billion in new loans and stock sales to construct giant gigawatt-scale data centers, triggering credit rating warnings over its growing debt.',
      supportingPoints: [
        'The financing package aims to raise $45B–$50B in debt notes and potential stock issuance.',
        'Funds will finance gigawatt data center facilities containing hundreds of thousands of interconnected GPUs.',
        'Oracle’s total debt sits around $167 billion, prompting credit rating agencies to review its investment-grade status.',
        'Executives insist long-term signed cloud contracts provide predictable income to repay the borrowings.'
      ],
      keyTakeaways: [
        'The AI revolution requires colossal amounts of physical capital, forcing tech firms to borrow money like utility companies.',
        'Debt-fueled growth boosts market share during boom times, but increases vulnerability if interest rates stay high.'
      ],
      studentGlossary: [
        { term: 'Gigawatt (GW)', definition: 'One billion watts of electricity—enough energy to power hundreds of thousands of homes or a massive AI computing hub.' },
        { term: 'Credit Rating (BBB)', definition: 'A letter grade given by independent agencies showing how safe it is to lend money to a company.' },
        { term: 'Senior Notes', definition: 'Bonds or formal loans that must be paid back first before other debts if a company runs into trouble.' }
      ]
    }
  },
  {
    id: 'orcl-6',
    order: 6,
    title: 'Oracle Unveils Nexus Autonomous AI Agents for Financial Crime and Anti-Money Laundering',
    url: 'https://finance.yahoo.com/quote/ORCL/news/',
    source: 'Yahoo Finance / PR Newswire',
    date: 'Oct 15, 2026',
    category: 'Enterprise Software & Security',
    status: 'completed',
    selected: true,
    content: `Oracle Financial Services launched Oracle Nexus Case Flow and Nexus Reach, two autonomous AI agent suites aimed at banking fraud detection and anti-money laundering (AML) compliance. The system uses reasoning models to autonomously trace transaction chains across international banking networks, cross-referencing sanctions lists and identifying suspicious shell companies in seconds. Banks testing the platform report an 80% reduction in false-positive alerts, a perennial cost center for global compliance teams. The product embeds directly into Oracle's autonomous database, creating zero-latency data pipeline integration.`,
    summary: {
      title: 'Oracle Unveils Nexus Autonomous AI Agents for Financial Crime and Anti-Money Laundering',
      source: 'Yahoo Finance / PR Newswire',
      category: 'Enterprise Software & Security',
      sentiment: 'Bullish',
      readingTime: '2 min read',
      mainIdea: 'Oracle released autonomous AI software that helps global banks detect money laundering and financial fraud, cutting false alarms by 80%.',
      supportingPoints: [
        'The Nexus software automatically investigates suspicious international money flows and compares them to sanctions lists.',
        'Test results showed an 80% decrease in false-positive alerts, which usually cost financial institutions millions in wasted human review.',
        'Runs directly inside Oracle’s Autonomous Database without having to export sensitive financial data to outside tools.',
        'Expands Oracle’s dominance in regulated enterprise software where banking and security regulations are strict.'
      ],
      keyTakeaways: [
        'Agentic AI is moving from chatbots into behind-the-scenes automated compliance and investigative workflows.',
        'Financial institutions are adopting AI primarily to reduce operational labor expenses and avoid regulatory fines.'
      ],
      studentGlossary: [
        { term: 'Autonomous Agent', definition: 'An AI software program designed to plan and execute multi-step tasks independently without constant human prompting.' },
        { term: 'AML (Anti-Money Laundering)', definition: 'Legal rules and technical systems that stop criminals from making illegal money look legitimate.' },
        { term: 'False Positive', definition: 'When a security system mistakenly flags an innocent transaction as illegal or suspicious.' }
      ]
    }
  },
  {
    id: 'orcl-7',
    order: 7,
    title: 'Oracle Wisconsin AI Data Center Clears Major State Power Line and Environmental Approval',
    url: 'https://finance.yahoo.com/quote/ORCL/news/',
    source: 'Yahoo Finance / Milwaukee Journal Sentinel',
    date: 'Oct 14, 2026',
    category: 'Infrastructure & Energy',
    status: 'completed',
    selected: true,
    content: `State energy regulators in Wisconsin declined to block electric utility power line upgrades for Oracle's proposed 1.2-gigawatt data center complex. The decision clears a crucial hurdle for the $14 billion campus, which had encountered local opposition over potential electrical rate hikes for residential consumers. Oracle and the utility negotiated a private power purchase agreement, ensuring that Oracle funds 100% of the substation improvements and connects dedicated battery energy storage systems (BESS). The project demonstrates how power grid availability has replaced software design as the chief limiting factor for AI expansion.`,
    summary: {
      title: 'Oracle Wisconsin AI Data Center Clears Major State Power Line and Environmental Approval',
      source: 'Yahoo Finance / Milwaukee Journal Sentinel',
      category: 'Infrastructure & Energy',
      sentiment: 'Bullish',
      readingTime: '2 min read',
      mainIdea: 'Wisconsin regulators approved power grid upgrades for Oracle’s $14 billion AI data center after Oracle agreed to pay for all electrical improvements itself.',
      supportingPoints: [
        'The 1.2-gigawatt campus will house high-density AI servers requiring as much electricity as a mid-sized American city.',
        'Local community concerns over electricity bills were resolved by Oracle paying for dedicated substations and battery systems.',
        'The approval clears the path for $14 billion in local construction and technological investment.',
        'Highlights that electrical power access—not chip shortages—is now the primary bottleneck for tech giants.'
      ],
      keyTakeaways: [
        'AI growth is now directly intertwined with energy policy, electrical grids, and municipal regulatory boards.',
        'Tech companies must become clean power innovators to build the computational capacity they need.'
      ],
      studentGlossary: [
        { term: 'Power Purchase Agreement (PPA)', definition: 'A long-term contract between an electricity buyer and an energy developer to fund power facilities.' },
        { term: 'BESS (Battery Energy Storage)', definition: 'Large industrial battery packs that store backup electricity to keep servers running when power demand peaks.' },
        { term: 'Substation', definition: 'An electrical facility that steps high-voltage power down to safer levels usable by computers and buildings.' }
      ]
    }
  },
  {
    id: 'orcl-8',
    order: 8,
    title: 'Oracle Restructures Workforce With $700 Million Layoff Expansion to Fund AI Transition',
    url: 'https://finance.yahoo.com/quote/ORCL/news/',
    source: 'Yahoo Finance / Quartz',
    date: 'Oct 12, 2026',
    category: 'Workforce & Operations',
    status: 'completed',
    selected: true,
    content: `In a regulatory filing with the SEC, Oracle confirmed an additional $700 million expansion to its corporate restructuring plan for fiscal 2026, bringing total exit costs above $1.6 billion. The cuts primarily affect administrative support, legacy on-premise sales teams, and customer support roles being automated with generative AI agents. Simultaneously, Oracle is ramping up hiring for cloud engineers, distributed systems architects, and data center technicians. The move underscores how established technology giants are aggressively reallocating operational budgets toward capital-intensive AI infrastructure.`,
    summary: {
      title: 'Oracle Restructures Workforce With $700 Million Layoff Expansion to Fund AI Transition',
      source: 'Yahoo Finance / Quartz',
      category: 'Workforce & Operations',
      sentiment: 'Mixed',
      readingTime: '2 min read',
      mainIdea: 'Oracle added $700 million to its corporate severance and layoff plan, cutting legacy administrative roles while shifting payroll money toward AI engineers and data center workers.',
      supportingPoints: [
        'Restructuring expenses now exceed $1.6 billion for fiscal 2026 across severance and contract cancellations.',
        'Reductions focus on legacy software sales and support departments that are now being handled by automated AI tools.',
        'Saved payroll money is being redirected into hiring specialized AI hardware architects and infrastructure managers.',
        'Reflects a broader tech industry trend of swapping human back-office headcount for GPU computing power.'
      ],
      keyTakeaways: [
        'Companies are using AI internally to streamline routine operations so they can afford expensive new technology bets.',
        'Job markets inside big tech are polarizing: high demand for infrastructure engineers, shrinking demand for manual support.'
      ],
      studentGlossary: [
        { term: 'Restructuring Charge', definition: 'A one-time expense a company records when reorganizing departments, paying severance, or closing offices.' },
        { term: 'Legacy Software', definition: 'Older software systems (like physical CD-ROM installed databases) that pre-date modern cloud computing.' },
        { term: 'SEC Filing', definition: 'Official legal documents public companies must send to government regulators so the public knows the truth about their finances.' }
      ]
    }
  },
  {
    id: 'orcl-9',
    order: 9,
    title: 'Wall Street Analyst Consensus on Oracle: 31 Brokerages Breakdown 12-Month Targets',
    url: 'https://finance.yahoo.com/quote/ORCL/news/',
    source: 'Yahoo Finance / TipRanks',
    date: 'Oct 10, 2026',
    category: 'Analyst Ratings',
    status: 'completed',
    selected: true,
    content: `Among 31 Wall Street analysts covering Oracle Corporation (NYSE: ORCL), 84% maintain a positive recommendation, with 12 rating the equity a 'Strong Buy', 14 a 'Buy', and 5 maintaining a 'Hold'. The average 12-month target price stands at $240.50, representing an estimated 88% premium over recent market prices. Bullish analysts point to Oracle's unmatched database enterprise lock-in and multi-cloud database partnerships with Microsoft Azure and Google Cloud. Skeptics point to potential margin compression if GPU depreciation accelerates before cloud software revenues can ramp to full scale.`,
    summary: {
      title: 'Wall Street Analyst Consensus on Oracle: 31 Brokerages Breakdown 12-Month Targets',
      source: 'Yahoo Finance / TipRanks',
      category: 'Analyst Ratings',
      sentiment: 'Bullish',
      readingTime: '2 min read',
      mainIdea: 'Over 84% of Wall Street analysts recommend buying Oracle stock, forecasting an average price target of $240 due to its strong enterprise database lock-in.',
      supportingPoints: [
        'Out of 31 institutional analysts: 12 Strong Buy, 14 Buy, 5 Hold, and 0 Sell ratings.',
        'Average price forecast of $240.50 suggests up to 88% potential appreciation from current stock prices.',
        'Major growth driver is Oracle\'s multi-cloud partnership enabling its database to run inside Azure and Google Cloud.',
        'Key risk flagged by cautious analysts is server depreciation—expensive GPUs losing value before generating peak profit.'
      ],
      keyTakeaways: [
        'Professional market analysts remain overwhelmingly confident in Oracle despite recent share price dips.',
        'Oracle’s willingness to partner with rivals (Microsoft & Google) has created a lucrative "win-win" ecosystem.'
      ],
      studentGlossary: [
        { term: 'Consensus Rating', definition: 'The aggregated average opinion or recommendation of multiple Wall Street investment analysts.' },
        { term: 'Multi-Cloud', definition: 'Using cloud services from multiple competing providers (e.g., Oracle, Amazon, and Microsoft) at the same time.' },
        { term: 'Depreciation', definition: 'The accounting decrease in value of physical computers or equipment over time as they wear out or get outdated.' }
      ]
    }
  },
  {
    id: 'orcl-10',
    order: 10,
    title: 'Oracle AI World Tour 2026 Keynote: Next-Gen Database 24c and Autonomous Multi-Cloud Roadmap',
    url: 'https://finance.yahoo.com/quote/ORCL/news/',
    source: 'Yahoo Finance / TechCrunch',
    date: 'Oct 08, 2026',
    category: 'Product & Roadmap',
    status: 'completed',
    selected: true,
    content: `At the Oracle AI World Tour keynote in London, Chief Technology Officer Larry Ellison detailed the rollout of Oracle Database 24c featuring native vector embeddings and autonomous multi-agent orchestration. Ellison declared that "the era of manual database management is completely over," presenting benchmarks showing zero-downtime automated schema evolution and real-time retrieval-augmented generation (RAG) at petabyte scale. The company also announced expanded integration with Nvidia DGX Cloud clusters, enabling developers to deploy enterprise search queries combining SQL, vector math, and graph databases in a single declarative query.`,
    summary: {
      title: 'Oracle AI World Tour 2026 Keynote: Next-Gen Database 24c and Autonomous Multi-Cloud Roadmap',
      source: 'Yahoo Finance / TechCrunch',
      category: 'Product & Roadmap',
      sentiment: 'Bullish',
      readingTime: '2 min read',
      mainIdea: 'Larry Ellison unveiled Oracle Database 24c, which combines traditional database tables with modern AI search vectors so companies can query petabytes of data without hiring manual database managers.',
      supportingPoints: [
        'Database 24c introduces native vector search, allowing AI models to search corporate files and databases directly with natural language.',
        'Autonomous multi-agent orchestration performs database updates and repairs automatically with zero system downtime.',
        'Direct partnership with Nvidia connects DGX SuperPODs directly to Oracle enterprise data stores.',
        'Allows developers to combine standard SQL questions, relationship graphs, and AI embeddings in one query.'
      ],
      keyTakeaways: [
        'Oracle is future-proofing its core database product so customers do not defect to newer specialized vector databases.',
        'Automated database maintenance reduces expensive IT overhead for large corporate clients.'
      ],
      studentGlossary: [
        { term: 'Vector Embeddings', definition: 'Translating text or images into a list of numbers so computers can understand conceptual similarity and meaning.' },
        { term: 'RAG (Retrieval-Augmented Generation)', definition: 'Feeding an AI model specific trusted company documents so its answers are accurate and up-to-date.' },
        { term: 'Petabyte', definition: 'One million gigabytes of digital information—equivalent to millions of hours of HD video.' }
      ]
    }
  }
];

export const INITIAL_SYNTHESIS: {
  overallThesis: string;
  coreThemes: { theme: string; detail: string }[];
  strategicOutlook: string;
  studentTakeaways: string;
} = {
  overallThesis: "Oracle is aggressively pivoting from a traditional database vendor into a top-tier generative AI hyperscaler. While its triple-digit cloud growth and $638B backlog prove insatiable demand, its massive capital expenditures and rising debt create intense near-term debates among Wall Street analysts.",
  coreThemes: [
    {
      theme: "Hyper-Growth in Cloud Infrastructure (OCI)",
      detail: "Revenue rose 121% year-over-year with a $638 billion contracted backlog, propelled by high-density GPU clusters and anchor clients like OpenAI."
    },
    {
      theme: "Energy, Capex, and Financing Demands",
      detail: "Building gigawatt data centers requires up to $50B in new financing and gigawatts of electrical grid power, pressuring free cash flow and credit ratings."
    },
    {
      theme: "Autonomous Enterprise Software & Multi-Cloud",
      detail: "High-margin products like automated healthcare clinical trials (AstraZeneca) and anti-money laundering agents embed AI into regulated workflows."
    }
  ],
  strategicOutlook: "Strong long-term technological and commercial positioning in enterprise AI, balanced by critical short-term execution risks around debt servicing, power grid approvals, and customer concentration.",
  studentTakeaways: "Think of Oracle's AI journey like building a high-speed bullet train network: it requires tens of billions in upfront loans to buy land and lay tracks (servers & power plants). Once operational, the tickets (cloud compute) are in massive demand, but the company must survive the heavy debt period."
};
