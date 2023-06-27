# Angular Greengrocers

## Learning objectives

- Use Angular services to share state between multiple components
- Use RxJS Observables to stream state, and it's changes to components
- Use the `async` pipe to subscribe to observables in order to get the value from the Observable.
- Use the `currency` pipe to nicely display the total price of the cart

## Setup

- Fork this repo to your own github account
- Clone your forked repo
- Open the project in VSCode
- Open a terminal and run the command `npm install` to install the dependencies

## Instructions

implement the following requirements:

- Create a store service that:
  - imports the items array from the `items.json` file
  - exposes an Observable `Item[]`
- Create a store component that displays the items in the store.
  - When a user clicks "add to cart" the item should be added to the user's cart
- Create a cart service that holds what items the user has in their cart
- Create a cart component that displays the current cart items
  - When a user clicks the `-` or the `+` buttons, the quantity should change
- Create a total component that computes the total price of the items in the cart
