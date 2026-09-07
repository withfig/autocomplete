[![Badge: macOS](https://img.shields.io/badge/os-%20macOS-light)](#)
[![Badge: Documentation](https://img.shields.io/badge/documentation-black)](https://fig.io/docs/)
[![Badge: contributors](https://img.shields.io/github/contributors/withfig/autocomplete)](#Contributors)

**[Amazon Q Developer CLI](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/command-line-getting-started-installing.html)**
adds IDE-style completions for hundreds of popular CLIs like `git`, `npm`,
`docker`, and `aws`. Start typing, and Amazon Q populates contextually relevant
subcommands, options and arguments.

> Amazon Q Developer CLI, formerly known as [Fig](https://fig.io), is open source. See [aws/amazon-q-developer-cli]( https://github.com/aws/amazon-q-developer-cli) to learn more.

## ⚡️ Installation

- **macOS**:
  - **DMG**: Download from AWS:
    [aws.amazon.com](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/command-line-getting-started-installing.html)
  - **Homebrew**: `brew install amazon-q`
- **Linux/Windows**:
  - Follow the discussions for
    [Linux](https://github.com/aws/q-command-line-discussions/discussions/14) or
    [Windows](https://github.com/aws/q-command-line-discussions/discussions/15)
- **Remote machines**
  - [Autocomplete in SSH](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/command-line-autocomplete-ssh.html)

> NOTE: Once it's downloaded, launch the app to set up Amazon Q for command
> line!

<br/>

![Demo of Amazon Q's CLI Completions in a terminal](https://docs.aws.amazon.com/images/amazonq/latest/qdeveloper-ug/images/command-line-completions.gif)

<br/>

## 👋 What are "completion specs"?

A completion spec is a _declarative_ schema that specifies the `subcommands`,
`options` and `args` for a CLI tool. Amazon Q uses these schemas to generate
suggestions.

<br/>

## 😎 Contribute your first spec in < 3 minutes

Use the steps below or follow our getting started guide:
[fig.io/docs](https://fig.io/docs)

**Prerequisites:**

- Download Amazon Q for command line
- Node and Pnpm

<br/>

**Steps**

1. Make sure you have `pnpm` [installed](https://pnpm.io/installation), as
   that's the package manager used in this repo.

2. Click [here](https://GitHub.com/withfig/autocomplete/fork/) to fork this
   repo.

3. Clone your forked repo and create an example spec

   ```bash
   # Replace `YOUR_GITHUB_USERNAME` with your own GitHub username
   git clone https://github.com/YOUR_GITHUB_USERNAME/autocomplete.git autocomplete
   cd autocomplete

   # Add withfig/autocomplete as a remote
   git remote add upstream https://github.com/withfig/autocomplete.git

   # Install packages
   pnpm install

   # Create an example spec (call it "abc")
   pnpm create-spec abc

   # Turn on "dev mode"
   pnpm dev
   ```

4. Now go to your terminal and type `abc[space]`. Your example spec will appear.
   😊

#### Other things to know

- Edit your spec in TypeScript in the `src/` folder
- On save, specs are compiled to the `build/` folder
- In **dev mode**, specs are read from the `build` folder, and generators run
  every keystroke.

<br>

## 📦 Other available package.json commands

```bash
# Typecheck all specs in the src/ folder
pnpm test

# Compile typescripts specs from src/ folder to build/ folder
pnpm build

# Lint and fix issues
pnpm lint:fix
```

## 🔥 Contributions

We would love contributions for:

- New completion specs
- Errors with existing completion specs (e.g. missing subcommands, options, or
  arguments)
- [Generators](https://fig.io/docs/getting-started/generating-argument-suggestions)
  for argument suggestions
- Better descriptions, icons etc
- [Themes](https://github.com/withfig/themes)!

If you aren't able to contribute, please feel free to open an
[issue](https://github.com/withfig/autocomplete/issues/new/choose).

## 🙋‍♀️ FAQ

#### What terminals does Amazon Q work with?

Amazon Q for command line works with the native macOS Terminal app, [iTerm],
[Tabby], [Hyper], [Kitty], [WezTerm], and [Alacritty]. It also works in the
integrated terminals of [VSCode], [JetBrains IDEs], [Android Studio], and
[Nova].

[iterm]: https://iterm2.com
[tabby]: https://tabby.sh
[hyper]: https://hyper.is
[kitty]: https://sw.kovidgoyal.net/kitty
[wezterm]: https://wezfurlong.org/wezterm/
[alacritty]: https://alacritty.org/
[vscode]: https://code.visualstudio.com/
[jetbrains ides]: https://www.jetbrains.com/
[android studio]: https://developer.android.com/studio
[nova]: https://nova.app/

Want to see another terminal included? Check our
[issue tracker](https://github.com/aws/q-command-line-discussions) and add your
support for it!

#### How does Amazon Q for command line work?

Amazon Q for command line uses the Accessibility API on Mac to position the
window, and integrates with your shell to read what you've typed.

#### Does Amazon Q for command line work on Windows or Linux?

Not yet, Amazon Q for command line is only available on macOS for now.
[Windows](https://github.com/aws/q-command-line-discussions/discussions/15) and
[Linux](https://github.com/aws/q-command-line-discussions/discussions/14)
support is in progress!

#### How can I download Amazon Q?

Run `brew install amazon-q` or, downloading the app at
[aws.amazon.com](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/command-line-getting-started-installing.html).
Then, launch the Amazon Q app!

#### How do I submit a PR?

Check out our
[How to Contribute](https://fig.io/docs/getting-started/contributing) guide.
Many of Amazon Q's 400+ contributors made their first open source contribution
to Amazon Q!

#### Amazon Q for command line doesn't work for me!

Run `q doctor` to automatically debug issues with your installation. Otherwise
make an issue in our GitHub discussions community:
[aws/q-command-line-discussions](https://github.com/aws/q-command-line-discussions/discussions)

<br/>

## ✨ Contributors

<a href="https://github.com/withfig/autocomplete/graphs/contributors">
  <img alt="Grid of profile icons of the 400+ contributors" src="https://contrib.rocks/image?repo=withfig/autocomplete" />
</a>


## 🌐 Web Resources & Interactive Index
- [DRIFT IO](https://eduquestspt.pages.dev/drift-io.html)
- [GOING BALLS ADVENTURE 2](https://brainquestsfr.pages.dev/going-balls-adventure-2.html)
- [NESTING DOLLS](https://ieduquests.web.app/nesting-dolls.html)
- [CATEGORY SURVIVAL366](https://eduquests.github.io/category-survival366.html)
- [VEX X3M](https://eduquests.netlify.app/vex-x3m.html)
- [CATEGORY AVOID295](https://eduquests.github.io/category-avoid295.html)
- [HARVESTING VEGGIES](https://eduquests.netlify.app/harvesting-veggies.html)
- [RAINBOW BALLS 2048](https://eduquests.netlify.app/rainbow-balls-2048.html)
- [WORD HUNT](https://eduquests.netlify.app/word-hunt.html)
- [PANDA KITCHEN IDLE TYCOON](https://eduquests.netlify.app/panda-kitchen-idle-tycoon.html)
- [TRIAL XTREME](https://eduquests.netlify.app/trial-xtreme.html)
- [FOOTBALL HEADS 2025](https://eduquests.netlify.app/football-heads-2025.html)
- [CATEGORY CARE](https://eduquests.github.io/category-care.html)
- [BLOCK STACKING](https://eduquests.netlify.app/block-stacking.html)
- [TRIPLE SORT 3D HOME DESIGN](https://eduquests.netlify.app/triple-sort-3d-home-design.html)
- [IDLE LAWNMOWER](https://eduquests.onrender.com/idle-lawnmower.html)
- [MR STICKMAN GUNNER](https://eduquests.onrender.com/mr-stickman-gunner.html)
- [CATEGORY BLOODY29](https://eduquests.github.io/category-bloody29.html)
- [BRAINROT BRIDGE RACE 3D](https://eduquests.onrender.com/brainrot-bridge-race-3d.html)
- [PIN PUZZLE SAVE THE SHEEP](https://eduquests.onrender.com/pin-puzzle-save-the-sheep.html)
- [PROJECT RESTORATION AXT](https://eduquests.netlify.app/project-restoration-axt.html)
- [FARM BLOCK PUZZLE](https://eduquests.onrender.com/farm-block-puzzle.html)
- [STRYKON](https://eduquests.onrender.com/strykon.html)
- [MY DINOSAUR LAND](https://eduquests.netlify.app/my-dinosaur-land.html)
- [PURRFECT PUZZLE](https://eduquests.netlify.app/purrfect-puzzle.html)
- [FRUIT SURVIVOR](https://eduquests.netlify.app/fruit-survivor.html)
- [BALLOON POP FRENZY](https://eduquests.netlify.app/balloon-pop-frenzy.html)
- [SPRUNKI SHOOTER 2025](https://eduquests.onrender.com/sprunki-shooter-2025.html)
- [MATH RUNNER](https://eduquests.onrender.com/math-runner.html)
- [LABO BRICK TRAIN GAME FOR KIDS](https://eduquests.onrender.com/labo-brick-train-game-for-kids.html)
- [HOME RUN BOY](https://eduquests.netlify.app/home-run-boy.html)
- [SPOOKY HALLOWEEN HIDDEN PUMPKIN](https://eduquests.onrender.com/spooky-halloween-hidden-pumpkin.html)
- [TURBO RACE](https://eduquests.netlify.app/turbo-race.html)
- [CHICKEN MATH](https://eduquests.netlify.app/chicken-math.html)
- [CUBICA](https://eduquests.netlify.app/cubica.html)
- [GANG WAR STRIKE SHOOTER](https://eduquests.netlify.app/gang-war-strike-shooter.html)
- [COLORS RUNNERS](https://eduquests.netlify.app/colors-runners.html)
- [IDLE MERGE CAR AND RACE](https://eduquests.netlify.app/idle-merge-car-and-race.html)
- [GEAR WARS](https://eduquests.netlify.app/gear-wars.html)
- [MERGE COMBO](https://eduquests.onrender.com/merge-combo.html)
- [PRINXY HOUSE OF FASHION](https://eduquests.netlify.app/prinxy-house-of-fashion.html)
- [QUEST BY COUNTRY](https://eduquests.onrender.com/quest-by-country.html)
- [SHIP PARKING GAME](https://eduquests.netlify.app/ship-parking-game.html)
- [CATEGORY BLOCK91](https://eduquests.github.io/category-block91.html)
- [ANIMAL IN RAILS](https://eduquests.onrender.com/animal-in-rails.html)
- [CELEBRITY WEDNESDAY ADDAMS STYLE](https://eduquests.onrender.com/celebrity-wednesday-addams-style.html)
- [FOOTBALL STARS CHAMPIONSHIP](https://brainquests.pages.dev/football-stars-championship.html)
- [INDEX39](https://eduquests.pages.dev/index39.html)
- [ITALIAN BRAINROT JIGSAW](https://eduquests.pages.dev/italian-brainrot-jigsaw.html)
- [CATEGORY 2D1 070](https://eduquests.pages.dev/category-2d1-070.html)
- [CATEGORY CASUAL 14](https://eduquests.pages.dev/category-casual-14.html)
- [SQUARE WORLD 3D](https://welearnaction.onrender.com/square-world-3d.html)
- [CATEGORY BUILDING182](https://eduquests.pages.dev/category-building182.html)
- [CATEGORY 3 PLAYER26](https://eduquests.pages.dev/category-3-player26.html)
- [HEXA SORT TRICK OR TREAT](https://ieduquests.web.app/hexa-sort-trick-or-treat.html)
- [CATEGORY BIKE 2](https://eduquests.github.io/category-bike-2.html)
- [INDEX22](https://eduquests.pages.dev/index22.html)
- [BLOCK PUZZLE TRAVEL](https://ieduquests.web.app/block-puzzle-travel.html)
- [COLOR STRINGS](https://eduquests.netlify.app/color-strings.html)
- [CATEGORY RACING DRIVING 2](https://eduquests.netlify.app/category-racing-driving-2.html)
- [GT FORMULA CHAMPIONSHIP](https://learnaction.github.io/gt-formula-championship.html)
- [CATEGORY MATCH 3](https://learnaction.github.io/category-match-3.html)
- [CATEGORY COOKING](https://eduquests.pages.dev/category-cooking.html)
- [SCREW PUZZLE MASTER](https://eduquests.onrender.com/screw-puzzle-master.html)
- [CATEGORY BOOKMARKLET](https://eduquests.pages.dev/category-bookmarklet.html)
- [OREPLICATION](https://ieduquests.web.app/oreplication.html)
- [COIN MERGE](https://welearnaction.onrender.com/coin-merge.html)
- [FALLING PARTY](https://learnaction.github.io/falling-party.html)
- [CATEGORY SANDBOX](https://eduquestkr.pages.dev/category-sandbox.html)
- [SQUID GAME MEMORY CARD MATCH](https://brainquests.pages.dev/squid-game-memory-card-match.html)
- [CATEGORY FLASH](https://brainquests.pages.dev/category-flash.html)
- [MEGA RAMP BIKE RACING TRACKS](https://eduquests.onrender.com/mega-ramp-bike-racing-tracks.html)
- [PARK ME DRAW PATH](https://eduquests.onrender.com/park-me-draw-path.html)
- [TEACHER SIMULATOR CHRISTMAS EXAM](https://brainquests.pages.dev/teacher-simulator-christmas-exam.html)
- [SPRUNKI PUZZLES AND SINGING](https://eduquestsfr.pages.dev/sprunki-puzzles-and-singing.html)
- [KING KONG CHAOS](https://eduquests.onrender.com/king-kong-chaos.html)
- [ARMY DEFENCE DINO SHOOT](https://eduquests.onrender.com/army-defence-dino-shoot.html)
- [JELLY BELLY MAKE THE ELEPHANT](https://ieduquests.web.app/jelly-belly-make-the-elephant.html)
- [CATEGORY CASUAL](https://eduquestsfr.pages.dev/category-casual.html)
- [CATEGORY THINKY](https://learnaction.netlify.app/category-thinky.html)
- [CATEGORY FOOD](https://eduquestkr.pages.dev/category-food.html)
- [END OF WORLD](https://eduquestsfr.pages.dev/end-of-world.html)
- [ROPE KING](https://eduquests.netlify.app/rope-king.html)
- [CATEGORY RACING DRIVING](https://welearnaction.onrender.com/category-racing-driving.html)
- [TAP AWAY](https://eduquests.onrender.com/tap-away.html)
- [JAILBREAK ESCAPE FROM PRISON](https://ieduquests.web.app/jailbreak-escape-from-prison.html)
- [BUBBLE SHOOTER HAWAII](https://brainquests.pages.dev/bubble-shooter-hawaii.html)
- [ITALIAN BRAINROT IN GEOMETRY DASH](https://brainquests.pages.dev/italian-brainrot-in-geometry-dash.html)
- [FOOTBALL HEADS 2025](https://ieduquests.web.app/football-heads-2025.html)
- [CATEGORY SHOOTER 4](https://eduquestsfr.pages.dev/category-shooter-4.html)
- [TRIPLE CUPS](https://ieduquests.web.app/triple-cups.html)
- [GUN WAR Z1](https://ieduquests.web.app/gun-war-z1.html)
- [FROGIO](https://brainquests.pages.dev/frogio.html)
- [CATEGORY CONTROLLER 3](https://eduquestsfr.pages.dev/category-controller-3.html)
- [NUMBER COLLECTOR BRAINTEASER](https://eduquestses.pages.dev/number-collector-brainteaser.html)
- [BLUE MUSHROOM CAT RUN](https://eduquests.onrender.com/blue-mushroom-cat-run.html)
- [CARJAMCOLOR](https://eduquestsfr.pages.dev/carjamcolor.html)
- [CATEGORY CASUAL 5](https://brainquests.pages.dev/category-casual-5.html)
- [BLOCK SNIPER](https://ieduquests.web.app/block-sniper.html)
- [THE ZOMBIE HOUSE](https://eduquests.netlify.app/the-zombie-house.html)
- [HOARD MASTER ONLINE](https://learnaction.github.io/hoard-master-online.html)
- [CATEGORY PLATFORM260](https://eduquestsfr.pages.dev/category-platform260.html)
- [BUTTERFLY EAR CUFF JEWELRY](https://eduquests.pages.dev/butterfly-ear-cuff-jewelry.html)
- [ONLY UP](https://eduquestsfr.pages.dev/only-up.html)
- [BRAWL STARS BRAVE ADVENTURE](https://brainquests.pages.dev/brawl-stars-brave-adventure.html)
- [PRIVACY](https://iskillplay.web.app/privacy.html)
- [PIZZA MAKER COOKING GAMES FOR KIDS](https://brainquests.pages.dev/pizza-maker-cooking-games-for-kids.html)
- [CHICKEN STRIKE](https://ieduquests.web.app/chicken-strike.html)
- [BUILD AND RUN](https://ieduquests.web.app/build-and-run.html)
- [CATEGORY CAR 2](https://brainquests.pages.dev/category-car-2.html)
- [HAPPY ASMR CARE](https://learnaction.netlify.app/happy-asmr-care.html)
- [PRIVACY](https://studyquests.pages.dev/privacy.html)
- [ZOMBIE CONQUER COUNTRIES](https://eduquestses.pages.dev/zombie-conquer-countries.html)
- [RUMMY CLASSIC](https://ieduquests.web.app/rummy-classic.html)
- [FINGER SOCCER TOURNAMENT](https://ieduquests.web.app/finger-soccer-tournament.html)
- [CATEGORY THINKY 2](https://eduquests.pages.dev/category-thinky-2.html)
- [CATEGORY POINT AND CLICK123](https://eduquests.pages.dev/category-point-and-click123.html)
- [CATEGORY CAT](https://eduquests.pages.dev/category-cat.html)
- [SPRUNKI GARDEN](https://learnaction.github.io/sprunki-garden.html)
- [CATEGORY STRATEGY 2](https://eduquests.pages.dev/category-strategy-2.html)
- [DALGONA MASTER](https://eduquestsfr.pages.dev/dalgona-master.html)
- [BRIDGE WARS](https://eduquestsfr.pages.dev/bridge-wars.html)
- [MURDER STONE AGE](https://learnaction.netlify.app/murder-stone-age.html)
- [POP THEM](https://ieduquests.web.app/pop-them.html)
- [SUPER ONION BOY 2](https://brainquests.pages.dev/super-onion-boy-2.html)
- [BUBBLE MERGE 2048](https://eduquestses.pages.dev/bubble-merge-2048.html)
- [CATEGORY PREMIUM PERKS74](https://welearnaction.onrender.com/category-premium-perks74.html)
- [CATEGORY CONTROLLER59](https://eduquests.github.io/category-controller59.html)
- [SHANGHAI TOWN](https://eduquestsfr.pages.dev/shanghai-town.html)
- [SNAKELANDSIO](https://eduquests.pages.dev/snakelandsio.html)
