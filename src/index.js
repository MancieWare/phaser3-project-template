/* jshint esversion: 6 */
//
// This file is the entry point for the application.
import Phaser from "phaser";
import player from "./assets/8_dir_template_animated.png";
import background from "./assets/desert_template_day_32x32.png";
import './css/reset.css';
import './css/style.css';

const playerSheet = require('./assets/8_dir_template_animated.json');
const playerData = require('./assets/8_dir_template_animations.json');
const map = require('./assets/desert_example.json');

// Phaser game configuration
const config = {
  type: Phaser.AUTO,
  parent: "game-container",
  width: window.innerWidth * window.devicePixelRatio,
  height: window.innerHeight * window.devicePixelRatio,
  // width: 800,
  // height: 600,
  pixelArt: true,
  scene: {
    preload: preload,
    create: create
  }
};

// Creating a new game object
const game = new Phaser.Game(config);

function preload() {
  // Loading animations for player
  this.load.animation('playerData', playerData);
  // Loading player sprite atlas
  this.load.atlas("player", player, playerSheet);
  // Load tilemap image
  this.load.image('background', background);
  // Load tilemap
  this.load.tilemapTiledJSON('map', map);
}

function create() {
  // Create the tilemap
  this.map = this.make.tilemap({ key: 'map'});
  // add the tileset image to map
  // Name of layer exported from tile, key of tileset image, frame width, frame height, margin, spacing
  this.tiles = this.map.addTilesetImage('background', 'background', 32, 32, 1, 2);
  // create background layer
  // name of layer in tiled file, tiles loaded, x, y starting position
  this.backgroundLayer = this.map.createStaticLayer('background', this.tiles, 0, 0);

  let player = this.add.sprite(window.innerWidth * window.devicePixelRatio/2, window.innerHeight * window.devicePixelRatio/2, "player").play("upidle");
}
