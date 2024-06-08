#!/usr/bin/env node

import { draw } from "terminal-img";
import { program } from "commander";
import path from "node:path";
const { version } = require("./package.json");

const BLAHAJ_URL: string = "https://www.ikea.com/pl/pl/images/products/blahaj-pluszak-rekin__0710175_pe727378_s5.jpg";
const BABY_BLAHAJ_URL: string = "https://www.ikea.com/pl/pl/images/products/blahaj-pluszak-maly-rekin__0877393_pe730957_s5.jpg";
const BLAHAJ_ASCII_ART: string = `
🟦🟦🟦🟦🟦➖🟦🟦
⬜🔳⬜🟦🟦🟦🟦🟦
➖⬜⬜⬜⬜🟦🟦
➖➖⬜⬜⬜⬜🟦🟦
➖🟦🟦➖⬜⬜🟦🟦
➖➖➖➖➖⬜🟦🟦
➖➖➖➖⬜🟦🟦
➖➖➖🟦⬜🟦
➖➖➖🟦🟦`;
const BLAHAJ_GAY_ASCII_ART: string = `
🟥🟥🟥🟥🟥➖🟥🟥
🟧🔳🟧🟧🟧🟧🟧🟧🟧
➖🟨🟨🟨🟨🟨🟨
➖➖🟨🟨🟨🟨🟨🟨
➖🟩🟩➖🟩🟩🟩🟩
➖➖➖➖➖🟩🟩🟩
➖➖➖➖🟦🟦🟦
➖➖➖🟦🟦🟦
➖➖➖🟪🟪`;
const BLAHAJ_LESBIAN_ASCII_ART: string = `
🟥🟥🟥🟥🟥➖🟥🟥
🟥🔳🟥🟥🟥🟥🟥🟥🟥
➖🟧🟧🟧🟧🟧🟧
➖➖🟨🟨🟨🟨🟨🟨
➖⬜⬜➖⬜⬜⬜⬜
➖➖➖➖➖🟪🟪🟪
➖➖➖➖🟪🟪🟪
➖➖➖🟪🟪🟪
➖➖➖🟪🟪`;
const BLAHAJ_TRANSGENDER_ASCII_ART: string = `
🟦🟦🟦🟦🟦➖🟦🟦
⬜🔳⬜🟦🟦🟦🟦🟦
➖🟪🟪🟪🟪🟪🟪
➖➖🟪🟪🟪🟪🟪🟪
➖⬜⬜➖⬜⬜⬜⬜
➖➖➖➖➖🟪🟪🟪
➖➖➖➖🟪🟪🟪
➖➖➖🟦🟦🟦
➖➖➖🟦🟦`;

const main = async (_arguments: string[]) => {
  if (_arguments.length === 2) {
    console.log(
      await draw(
        BLAHAJ_URL,
        {
          width: 80,
          height: 80,
        },
      ),
    );
    process.exit(0);
  }

  program
    .name("blahaj")
    .description("🦈 Display blahaj in your terminal!")
    .version(version);

  program.command("ascii_art")
    .description("display blahaj as ascii art")
    .option("--default", "displays default ascii art (unicode) of blahaj")
    .option("--pride <string>", "select pride color of ascii art haj [gay, lesbian, transgender]")
    .action((_, options) => {
      const params = options.parent.args.slice(1);
      const mainOption = params[0];
      const prideFlagOption = params[1];

      switch (mainOption) {
        case "--default": {
          console.log(BLAHAJ_ASCII_ART);
          process.exit(0);
        }
        case "--pride": {
          switch (prideFlagOption) {
            case "gay": {
              console.log(BLAHAJ_GAY_ASCII_ART);
              process.exit(0);
            }
            case "lesbian": {
              console.log(BLAHAJ_LESBIAN_ASCII_ART);
              process.exit(0);
            }
            case "transgender": {
              console.log(BLAHAJ_TRANSGENDER_ASCII_ART);
              process.exit(0);
            }
          }
        }
        default: {
          console.log(BLAHAJ_ASCII_ART);
          process.exit(0);
        }
      }
    });

  program
    .option("-b, --baby", "output the baby blahaj")
    .action(async () => {
      console.log(
        await draw(
          BABY_BLAHAJ_URL,
          {
            width: 80,
            height: 80,
          },
        ),
      );
      process.exit(0);
    });

  program.parse(_arguments);
}

main(process.argv);