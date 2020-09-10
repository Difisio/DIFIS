Study on the safety of DIFIS liquid mining contract



DIFIS is a new decentralized DeFi pool. At the invitation of the DIFIS community, VENRAI conducted a safety study on the DIFIS smart contract on September 9, 2020, at the invitation of the DIFIS community.

The analysis objects are the following contracts:

> 0xCC4d8eCFa6a5c1a84853EC5c0c08Cc54Cb177a6A

> 0x416F1Ac032D1eEE743b18296aB958743B1E61E81

> 0x7FF60A926F3784D1385784F16e9cE204c5F91447



The analysis showed that the three contracts did not contain a fatal security breach. VENRAI will make a record and summary of the research process in this article. Token prices, economic models, other external contract modules, and future new contracts are not discussed in this article.



What is DIFIS

DIFIS is a new revenue aggregator that covers services such as DEFI project investment incubation and is a portfolio product of the DEFI project.



A Brief analysis of DIFIS Core Contract

DIFIS liquidity dig at the core of contract code DIFIS - YARMFHSSES derived from DIFIS team, address is: https://github.com/Difisio/DIFIS

The whole process of fluid mining based on DIFISfulixon can be divided into the following steps:

1. For an address with Distribution authority, the amount of reward is set in advance by calling the notifyRewardAmount() function of the Fulixon contract, and the Token of the corresponding amount is transferred from the ethereum Minter into the Fulixon contract.

2. Miners provide liquidity to The DeFi contract, the target of DIFISfulixon's contract, which can be used for automatic market maker DEX, or a lending agreement (deposit in stabilisation currency), and receive the corresponding liquidity certificate Token (commonly known as the Pool Token), which can be used to exchange assets and earn interest or fee income.

3. Miners deposit the obtained Pool Token into the Fulixon contract by calling the Stake () function, and the contract automatically calculates the rewards to be awarded to miners according to the time of stake and the proportion of the amount of funds deposited by miners in the total size of the capital Pool.

4. Miners take their due rewards according to The Stake cycle.

DIFISfulixon for fluidity mining on several DeFi projects.



Some findings



Add two modifier functions to constrain withdraw() getReward() three main function functions.

import {twoslash} from "./"



// $ExpectType string

const result = twoslash("//")



+ // Handle options param

+ const resultWithOptions = twoslash("//", {version: "3.7"})

+ // When the param is incorrect

+ // $ExpectError

+ const resultWithOptions = twoslash("//", { })



}

A new line of code has been added to the notifyAmount() function to distribute as a reward. Therefore, Fulixon contract must be DIFIS contract minter.





{

"compilerOptions": {

"baseUrl": ".. /.. / ",

"typeRoots": ["../../"],

"paths": {

"history": [ "history/v2" ]

},

},

"files": [

"index.d.ts",

"history-tests.ts"

]

}

{

"private": true,

"types": "index",

"typesVersions": {

"<=3.6": {"*": ["ts3.6/*"]}

}

}





When discussing the code details with VINO, a community developer, VINO mentioned that the execution in Stake of halve coin depends on the execution of the checkhalve() function, but in practice, it depends on the interaction between the user and the contract, and the execution time cannot be accurately controlled to the end of the previous cycle. Theoretically, the last person who extracted the reward from the Pool may not be able to withdraw the reward normally. This is because the Miner Pool contract coincided with the halving of the contract. Due to the previous error, the paper income of the user in the contract is higher than the amount of Token produced by Mint. The error is calculated as the time difference between the end of each period and the actual time of the next halving, Delta multiplied by the rewardRate after the halving.

# clone this repo

git clone git@github.com:elastic/elasticsearch-definitive-guide.git

# clone the docs build infrastructure

git clone git@github.com:elastic/docs.git

# Build HTML and open a browser

cd elasticsearch-definitive-guide

. /docs/build_docs.pl --doc book.asciidoc --open

timestamp date block DIFISFULISON

1538006400 Wed Sep 26 2018 20:00:00 6405884 21322.64

1549324800 Mon Feb 04 2019 19:00:00 7175712 25452.34

1554940800 Wed 10 2019 20:00:00 7543456 553152.81

Check the



Graphics is calculated

The withdraw() function should not add the checkhalve() modifier. If the Pool contract address is intentionally or accidentally removed from the minter permission, the user will not be able to call the withdraw() function properly because mint() execution may fail.

Since DIFIS has set the Owner of token to address 0 (see the next section), this risk does not currently exist for DIFIS. But as smart contract code, it really should be more rigorous and robust, otherwise many users' money might be at high risk. If developers don't understand the details, it could be a tragedy.



DIFIS administrator rights handling

Tokens all have a Mint interface, and addresses authorized by Mint can mobilize tokens.

In addition, the Fulixon contract has the reward permission address, which is used to call the notifyRewardAmount() function to set the reward amount. Fulixon contracts also have the owner permission address, which is used to set the rewardDistribution address.





conclusion

DIFIS as a whole is a very meaningful DeFi innovation, and through DIFIS we see a decentralized governance model that fully inspires the DeFi community's passion for mining and governance.

A more equitable governance token distribution programme has been explored and has made a significant impact within the community in a short period of time with remarkable momentum.



Safety recommendations

With liquidity mining and the popularity of DeFi products, a variety of new DeFi smart contracts have sprung up in the market, and portfolio risk has increased dramatically. VANRAI reminds users to be safe when interacting with any DeFi project, recognize domain names, contract addresses, carefully review all funds-related operations, and try not to interact with intelligent contracts of unknown origin. In addition, we should pay more attention to the DeFi product itself and intelligent contract security, analyzing the value base and sources of risk.
