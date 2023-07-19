## UniswapV2 Slippage Calculator ##
This repository contains a JavaScript script that calculates the slippage for a token trade on UniswapV2. Slippage refers to the difference between the expected price of a trade and the price at which the trade is executed.

The script works as follows:

**Initialization:** At the start, it initializes two tokens (token0 and token1) with their respective reserves. These reserves are currently dummy variables and will be replaced with real data from a subgraph in the future.

**Input Collection:** It prompts the user to specify the token they wish to buy (token0 or token1) and the quantity of the token they wish to purchase. It ensures the user enters a valid token name and a positive quantity for the token.

**Slippage Calculation:** Once the user has provided their desired trade, the script calculates the slippage for the trade. It first calculates the initial price for the token and then computes the amount to be paid based on the constant product formula used in Uniswap's automatic market maker algorithm. From these values, the new price per token is derived. The slippage is then calculated as the percentage change between the initial price and the new price.

**Slippage Display:** The calculated slippage is displayed to the user in percentage terms.

The script is designed to be run in a Node.js environment. It uses the readline module to interact with the user and obtain the required input.

Note: The current token reserves t0 and t1 are dummy variables. In the future, these variables will be retrieved by querying a subgraph.
