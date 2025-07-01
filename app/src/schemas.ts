import { type } from "arktype";

export namespace Definitions {
  export namespace Cards {
    namespace Base {
      export const schema = type({
        type: "'coin'|'sapone'|'vegetable'|'tool'",
      });
      export type Type = typeof schema.infer;
    }
    namespace Value {
      export const schema = type({
        "...": Base.schema,
        value: "number",
      });
      export type Type = typeof schema.infer;
    }
    namespace Rarity {
      export const schema = type({});
      export type Type = typeof schema.infer;
    }
    namespace BaseCoin {
      export const schema = type({
        "...": Value.schema,
        type: "'coin'",
      });
    }
    export namespace OneCoin {
      export const schema = type({
        "...": BaseCoin.schema,
        value: "1",
      });
      export type Type = typeof schema.infer;
    }
    namespace BaseVegetable {
      export const schema = type({
        "...": Rarity.schema,
        type: "'vegetable'",
      });
    }
    export namespace Watermelon {
      export const schema = type({
        "...": BaseVegetable.schema,
        rarity: "1",
      });
      export type Type = typeof schema.infer;
    }
    export namespace Leeks {
      export const schema = type({
        "...": BaseVegetable.schema,
        rarity: "2",
      });
      export type Type = typeof schema.infer;
    }
    export namespace Broccoli {
      export const schema = type({
        "...": BaseVegetable.schema,
        rarity: "3",
      });
      export type Type = typeof schema.infer;
    }
    export namespace Cucumbers {
      export const schema = type({
        "...": BaseVegetable.schema,
        rarity: "4",
      });
      export type Type = typeof schema.infer;
    }
    export namespace Artichokes {
      export const schema = type({
        "...": BaseVegetable.schema,
        rarity: "5",
      });
      export type Type = typeof schema.infer;
    }
    export namespace Broom {
      export const schema = type({
        "...": BaseVegetable.schema,
        rarity: "1",
      });
      export type Type = typeof schema.infer;
    }
    export namespace Scythes {
      export const schema = type({
        "...": Rarity.schema,
        value: "2",
      });
      export type Type = typeof schema.infer;
    }
    export namespace Rakes {
      export const schema = type({
        "...": Rarity.schema,
        value: "3",
      });
      export type Type = typeof schema.infer;
    }
    export namespace Picks {
      export const schema = type({
        "...": Rarity.schema,
        value: "4",
      });
      export type Type = typeof schema.infer;
    }
    export namespace Shovels {
      export const schema = type({
        "...": Rarity.schema,
        value: "5",
      });
      export type Type = typeof schema.infer;
    }
    export namespace TwoCoins {
      export const schema = type({
        "...": BaseCoin.schema,
        value: "2",
      });
      export type Type = typeof schema.infer;
    }
    export namespace ThreeCoins {
      export const schema = type({
        "...": BaseCoin.schema,
        value: "3",
      });
      export type Type = typeof schema.infer;
    }
    export namespace FourCoins {
      export const schema = type({
        "...": BaseCoin.schema,
        value: "4",
      });
      export type Type = typeof schema.infer;
    }
    namespace BaseSapone {
      export const schema = type({
        "...": Value.schema,
        type: "'sapone'",
      });
      export type Type = typeof schema.infer;
    }
    export namespace OneSapone {
      export const schema = type({
        "...": BaseSapone.schema,
        value: "1",
      });
      export type Type = typeof schema.infer;
    }
    export namespace TwoSapone {
      export const schema = type({
        "...": BaseSapone.schema,
        value: "2",
      });
      export type Type = typeof schema.infer;
    }
    // export namespace Diamond{
    // }
  }
  export namespace Decks {
    export namespace Market {
      export const schema = type({
        type: "'market'",
        cards: [
          Cards.OneCoin.schema,
          Cards.Artichokes.schema,
          Cards.Broccoli.schema,
          Cards.Cucumbers.schema,
          Cards.Leeks.schema,
          Cards.Watermelon.schema,
          Cards.Broom.schema,
          Cards.Scythes.schema,
          Cards.Rakes.schema,
          Cards.Picks.schema,
          Cards.Shovels.schema,
        ],
      });
      export type Type = typeof schema.infer;
    }
  }
}

const marketDeck: Definitions.Decks.Market.Type = {
  type: "market",
  cards: [
    { type: "coin", value: 1 },
    { type: "vegetable", rarity: 1 },
  ],
};
