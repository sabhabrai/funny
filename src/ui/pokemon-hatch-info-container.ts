
import PokemonInfoContainer from "./pokemon-info-container";
import BattleScene from "../battle-scene";
import { Gender } from "../data/gender";
import { Type } from "../data/type";
import i18next from "i18next";
import * as Utils from "../utils";
import { TextStyle, addTextObject } from "./text";
import { speciesEggMoves } from "#app/data/egg-moves.js";
import { allMoves } from "#app/data/move.js";
import { Species } from "#app/enums/species.js";
import { getEggTierForSpecies } from "#app/data/egg.js";
import { EggHatchData } from "#app/phases/egg-hatch-phase.js";
import { starterColors } from "../battle-scene";
import { argbFromRgba } from "@material/material-color-utilities";

export default class PokemonHatchInfoContainer extends PokemonInfoContainer {
  private currentPokemonSprite: Phaser.GameObjects.Sprite;
  private pokemonNumberText: Phaser.GameObjects.Text;
  private pokemonNameText: Phaser.GameObjects.Text;
  private pokemonEggMovesContainer: Phaser.GameObjects.Container;
  private pokemonEggMoveContainers: Phaser.GameObjects.Container[];
  private pokemonEggMoveBgs: Phaser.GameObjects.NineSlice[];
  private pokemonEggMoveLabels: Phaser.GameObjects.Text[];
  private pokemonHatchedIcon : Phaser.GameObjects.Sprite;
  private pokemonListContainer: Phaser.GameObjects.Container;
  private pokemonCandyIcon: Phaser.GameObjects.Sprite;
  private pokemonCandyOverlayIcon: Phaser.GameObjects.Sprite;
  private pokemonCandyCountText: Phaser.GameObjects.Text;

  constructor(scene: BattleScene, listContainer : Phaser.GameObjects.Container, x: number = 115, y: number = 9,) {
    super(scene, x, y);
    this.pokemonListContainer = listContainer;

  }
  setup(): void {
    super.setup();
    super.changeToEggSummaryLayout();

    this.currentPokemonSprite = this.scene.add.sprite(54, 80, "pkmn__sub");
    this.currentPokemonSprite.setScale(0.8);
    this.currentPokemonSprite.setPipeline(this.scene.spritePipeline, { tone: [ 0.0, 0.0, 0.0, 0.0 ], ignoreTimeTint: true });
    this.pokemonListContainer.add(this.currentPokemonSprite);

    this.pokemonNumberText = addTextObject(this.scene, 80, 107.5, "0000", TextStyle.SUMMARY, {fontSize: 74});
    this.pokemonNumberText.setOrigin(0, 0);
    this.pokemonListContainer.add(this.pokemonNumberText);

    this.pokemonNameText = addTextObject(this.scene, 7, 107.5, "", TextStyle.SUMMARY, {fontSize: 74});
    this.pokemonNameText.setOrigin(0, 0);
    this.pokemonListContainer.add(this.pokemonNameText);

    this.pokemonHatchedIcon = this.scene.add.sprite(-5, 90, "egg_icons");
    this.pokemonHatchedIcon.setOrigin(0, 0.2);
    this.pokemonHatchedIcon.setScale(0.8);
    this.pokemonListContainer.add(this.pokemonHatchedIcon);

    this.pokemonCandyIcon = this.scene.add.sprite(4.5, 40, "candy");
    this.pokemonCandyIcon.setScale(0.5);
    this.pokemonCandyIcon.setOrigin(0, 0);
    this.pokemonListContainer.add(this.pokemonCandyIcon);

    this.pokemonCandyOverlayIcon = this.scene.add.sprite(4.5, 40, "candy_overlay");
    this.pokemonCandyOverlayIcon.setScale(0.5);
    this.pokemonCandyOverlayIcon.setOrigin(0, 0);
    this.pokemonListContainer.add(this.pokemonCandyOverlayIcon);

    this.pokemonCandyCountText = addTextObject(this.scene, 14, 40, "x0", TextStyle.WINDOW_ALT, { fontSize: "56px" });
    this.pokemonCandyCountText.setOrigin(0, 0);
    this.pokemonListContainer.add(this.pokemonCandyCountText);

    this.pokemonEggMoveContainers = [];
    this.pokemonEggMoveBgs = [];
    this.pokemonEggMoveLabels = [];
    this.pokemonEggMovesContainer = this.scene.add.container(0, 200);
    this.pokemonEggMovesContainer.setVisible(false);
    this.pokemonEggMovesContainer.setScale(0.5);

    const eggMovesLabel = addTextObject(this.scene, 70, 0, i18next.t("starterSelectUiHandler:eggMoves"), TextStyle.WINDOW_ALT);
    eggMovesLabel.setOrigin(0.5, 0);

    this.pokemonEggMovesContainer.add(eggMovesLabel);

    for (let m = 0; m < 4; m++) {
      const eggMoveContainer = this.scene.add.container(0, 0 + 6 * m);

      const eggMoveBg = this.scene.add.nineslice(70, 0, "type_bgs", "unknown", 92, 14, 2, 2, 2, 2);
      eggMoveBg.setOrigin(1, 0);

      const eggMoveLabel = addTextObject(this.scene, 70 -eggMoveBg.width / 2, 0, "???", TextStyle.PARTY);
      eggMoveLabel.setOrigin(0.5, 0);

      this.pokemonEggMoveBgs.push(eggMoveBg);
      this.pokemonEggMoveLabels.push(eggMoveLabel);

      eggMoveContainer.add(eggMoveBg);
      eggMoveContainer.add(eggMoveLabel);
      eggMoveContainer.setScale(0.44);

      this.pokemonEggMoveContainers.push(eggMoveContainer);

      this.pokemonEggMovesContainer.add(eggMoveContainer);
    }

    super.add(this.pokemonEggMoveContainers);

  }

  showHatchInfo(hatchInfo: EggHatchData) {
    this.pokemonEggMovesContainer.setVisible(true);

    const displayPokemon = hatchInfo.pokemon;
    const species = displayPokemon.species;
    const female = displayPokemon.gender === Gender.FEMALE;
    const formIndex = displayPokemon.formIndex;
    const shiny = displayPokemon.shiny;
    const variant = displayPokemon.variant;
    super.show(displayPokemon, false, 1, hatchInfo.getDex(), hatchInfo.prevStarterEntry, true);
    const colorScheme = starterColors[species.speciesId];

    this.pokemonCandyIcon.setTint(argbFromRgba(Utils.rgbHexToRgba(colorScheme[0])));
    this.pokemonCandyIcon.setVisible(true);
    this.pokemonCandyOverlayIcon.setTint(argbFromRgba(Utils.rgbHexToRgba(colorScheme[1])));
    this.pokemonCandyOverlayIcon.setVisible(true);
    this.pokemonCandyCountText.setText(`x${this.scene.gameData.starterData[species.speciesId].candyCount}`);
    this.pokemonCandyCountText.setVisible(true);
    species.loadAssets(this.scene, female, formIndex, shiny, variant, true).then(() => {
      // if (assetLoadCancelled.value) {
      //   return;
      // }
      // this.assetLoadCancelled = null;
      // this.speciesLoaded.set(species.speciesId, true);
      // redundant setVisible(true) but makes sure sprite is only visible after being rendered (no substitute visible)
      this.currentPokemonSprite.setVisible(true);
      this.currentPokemonSprite.play(species.getSpriteKey(female, formIndex, shiny, variant));
      this.currentPokemonSprite.setPipelineData("shiny", shiny);
      this.currentPokemonSprite.setPipelineData("variant", variant);
      this.currentPokemonSprite.setPipelineData("spriteKey", species.getSpriteKey(female, formIndex, shiny, variant));
      // this.pokemonSprite.setVisible(!this.statsMode);
    });
    // TODO pokemon name and number

    this.pokemonNumberText.setText(Utils.padInt(species.speciesId, 4));
    this.pokemonNameText.setText(species.name);

    const hasEggMoves = species && speciesEggMoves.hasOwnProperty(species.speciesId);

    for (let em = 0; em < 4; em++) {
      // TODO add some new egg move indicator
      const eggMove = hasEggMoves ? allMoves[speciesEggMoves[species.speciesId][em]] : null;
      const eggMoveUnlocked = eggMove && this.scene.gameData.starterData[species.speciesId].eggMoves & Math.pow(2, em);
      this.pokemonEggMoveBgs[em].setFrame(Type[eggMove ? eggMove.type : Type.UNKNOWN].toString().toLowerCase());

      this.pokemonEggMoveLabels[em].setText(eggMove && eggMoveUnlocked ? eggMove.name : "???");
      if (!(eggMove && hatchInfo.prevStarterEntry.eggMoves & Math.pow(2, em)) && eggMoveUnlocked) {
        this.pokemonEggMoveLabels[em].setText("(+) " + eggMove.name);
      }
    }

    // will always have at least one egg move
    this.pokemonEggMovesContainer.setVisible(true);

    // TODO show egg tier / icon
    if (species.speciesId === Species.MANAPHY || species.speciesId === Species.PHIONE) {
      this.pokemonHatchedIcon.setFrame("manaphy");
    } else {
      this.pokemonHatchedIcon.setFrame(getEggTierForSpecies(species));
    }

  }


}
