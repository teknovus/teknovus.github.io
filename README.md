# HTML5 Slot Machine

![Build and Deploy Status](https://github.com/johakr/html5-slot-machine/actions/workflows/deploy.yml/badge.svg) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

This is a fork of a slot machine web game that I made to make fun of my friend who kept gambling for virtual stuffed animals in roblox

Of course, they ended up enjoying this game anyways

Built using the _Web Animations API_.

## Features

- Fully responsive for great UX on mobile, web & fullscreen mode.
- Autoplay functionality, which keeps running even if the game window is in background.

## Installation, Build & Deployment

1. Clone repository
2. Run `npm install`
   - _Development_: run `npm start` and go to `http://localhost:8080`
   - _Production_: run `npm run build` and serve from `/dist`

## Configuration

For configuration options see `config` object in [index.js](https://github.com/johakr/html5-slot-machine/blob/master/src/js/index.js)

| Property      | Description                                                                                                                            | Default   |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `inverted`    | Controls visual spinning direction of reels. If false, reels will spin from bottom to top. If true, reels will spin from top to bottom | false     |
| `onSpinStart` | Callback function invoked when spin starts with symbols pattern array `(symbols) => void`.                                             | undefined |
| `onSpinEnd`   | Callback function invoked when spin ends with symbols pattern array `(symbols) => void`.                                               | undefined |

## Credits

Icons are created by [KPD Media](https://dribbble.com/shots/3517520-Star-Wars) and can be used for private and commercial purposes with no attribution required ([check license here](https://iconstore.co/icons/10-star-wars-icons/)).
