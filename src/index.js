/* jshint esversion: 6 */
//
// This file is the entry point for the application.
import Phaser from "phaser";
import logoImg from "./assets/logo.png";
import './css/reset.css';
import './css/style.css';


// Phaser game configuration
const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
};

// Creating a new game object
const game = new Phaser.Game(config);

function preload() {
  this.load.image("logo", logoImg);
}

function create() {
  const logo = this.add.image(400, 150, "logo");

  this.tweens.add({
    targets: logo,
    y: 450,
    duration: 2000,
    ease: "Power2",
    yoyo: true,
    loop: -1
  });
}
