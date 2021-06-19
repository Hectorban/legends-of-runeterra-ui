/* eslint-disable no-unused-vars */
export interface Cardtypes {
    associatedCards:       any[];
    associatedCardRefs:    string[];
    assets:                Asset[];
    region:                Region;
    regionRef:             RegionRef;
    attack:                number;
    cost:                  number;
    health:                number;
    description:           string;
    descriptionRaw:        string;
    levelupDescription:    string;
    levelupDescriptionRaw: string;
    flavorText:            string;
    artistName:            ArtistName;
    name:                  string;
    cardCode:              string;
    keywords:              string[];
    keywordRefs:           string[];
    spellSpeed:            SpellSpeed;
    spellSpeedRef:         SpellSpeed;
    rarity:                Rarity;
    rarityRef:             RarityRef;
    subtype:               Subtype;
    subtypes:              Subtype[];
    supertype:             Supertype;
    type:                  Type;
    collectible:           boolean;
    set:                   Set;
}

export enum ArtistName {
    AlexHeath = "Alex Heath",
    AronElekes = "Aron Elekes",
    BenSkutt = "Ben Skutt",
    DAOLE = "Dao Le",
    Empty = "",
    JiHunLee = "JiHun Lee",
    KudosProductions = "Kudos Productions",
    MaxGrecke = "Max Grecke",
    OliverChipping = "Oliver Chipping",
    OriginalForce = "Original Force",
    RafaelZanchetin = "Rafael Zanchetin",
    Sixmorevodka = "SIXMOREVODKA",
    WildBlueStudios = "Wild Blue Studios",
}

export interface Asset {
    gameAbsolutePath: string;
    fullAbsolutePath: string;
}

export enum Rarity {
    Champion = "Champion",
    Common = "COMMON",
    Epic = "EPIC",
    None = "None",
    Rare = "RARE",
}

export enum RarityRef {
    Champion = "Champion",
    Common = "Common",
    Epic = "Epic",
    None = "None",
    Rare = "Rare",
}

export enum Region {
    Demacia = "Demacia",
    Freljord = "Freljord",
    Ionia = "Ionia",
    Noxus = "Noxus",
    PiltoverZaun = "Piltover & Zaun",
    ShadowIsles = "Shadow Isles",
}

export enum RegionRef {
    Demacia = "Demacia",
    Freljord = "Freljord",
    Ionia = "Ionia",
    Noxus = "Noxus",
    PiltoverZaun = "PiltoverZaun",
    ShadowIsles = "ShadowIsles",
}

export enum Set {
    Set1 = "Set1",
}

export enum SpellSpeed {
    Burst = "Burst",
    Empty = "",
    Fast = "Fast",
    Slow = "Slow",
}

export enum Subtype {
    Dragon = "DRAGON",
    Elite = "ELITE",
    Elnuk = "ELNUK",
    Empty = "",
    Poro = "PORO",
    Spider = "SPIDER",
    Tech = "TECH",
    Yeti = "YETI",
}

export enum Supertype {
    Champion = "Champion",
    Empty = "",
}

export enum Type {
    Ability = "Ability",
    Spell = "Spell",
    Trap = "Trap",
    Unit = "Unit",
}
