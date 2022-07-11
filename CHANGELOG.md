# Wolfie2D Changelog
All notable changes to Wolfie2D will be documented here, for each major release. More recent releases will be kept toward the top of the file. Future releases will be included at the very top with target release dates and features.

This changelog is based on the [this](https://keepachangelog.com/en/1.0.0/) changelog reference.

## \[Unreleased\] - \[Target Release Date\]
### Added
* CI workflow (github actions)
* Publish workflow (github actions)
* `LICENSE.md`
* `CHANGELOG.md`
* `Heap.ts`
* An implementation of the A* algorithm (see GraphUtils)
* Scripts to `scripts` in `package.json`. This includes
    * `build` - compiles and builds the game-enginee
    * `docs` - generates typedoc documentation files
    * `tests` - runs unit tests
    * `tests:all` - runs all unit tests
    * `tests:wolfie` - runs units tests located in `./src/Wolfie2D`
* Compiler options to `tsconfig.json`
* Typedoc options to `tsconfig.json`

### Fixes
* `Graph.addNode()` now returns the correct index of the node that was added to the graph. Was returning `index + 1`.
    * Will have to fix `GoapActionPlanner`. Looks like it uses `Graph.addNode() - 1` in a few places.

### Changes
* Moved Wolfie2D project to the Wolfie2D organization account on Github
* Moved Wolfie2D website to [here] TBD
* Moved `Collection.ts` to `Interfaces` folder
* Moved all datatypes implementing `Collection` to `Collections` folder. This includes
    * Heap.ts
    * List.ts
    * Map.ts
    * QuadTree.ts
    * Queue.ts
    * RegionQuadTree.ts
    * Stack.ts
* Wolfie2D API documentation page now generated using [Typedoc](https://typedoc.org/)

## v1.0.0 - 05-20-2021
### Added
* TBD
### Fixes
* TBD
### Changes
