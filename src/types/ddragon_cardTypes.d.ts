/* eslint-disable no-unused-vars */
export interface DDcardTypes {
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
    spellSpeedRef:         SpellSpeedRef;
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
    AronElekes = "Aron Elekes",
    DAOLE = "Dao Le",
    GrafitStudio = "Grafit Studio",
    JiHunLee = "JiHun Lee",
    JihunLee = "Jihun Lee",
    KudosProductions = "Kudos Productions",
    MARStudio = "MAR Studio",
    MaxGrecke = "Max Grecke",
    PolarEngine = "Polar Engine",
    PolarEngineStudio = "Polar Engine Studio",
    Sixmorevodka = "SIXMOREVODKA",
    WildBlueStudio = "Wild Blue Studio",
}

export interface Asset {
    gameAbsolutePath: string;
    fullAbsolutePath: string;
}

export enum Rarity {
    Campeón = "Campeón",
    Común = "COMÚN",
    Ninguno = "Ninguno",
    Rara = "RARA",
    Épica = "ÉPICA",
}

export enum RarityRef {
    Champion = "Champion",
    Common = "Common",
    Epic = "Epic",
    None = "None",
    Rare = "Rare",
}

export enum Region {
    Aguasturbias = "Aguasturbias",
    Demacia = "Demacia",
    ElFréljord = "El Fréljord",
    IslasDeLaSombra = "Islas de la Sombra",
    Jonia = "Jonia",
    Noxus = "Noxus",
    PiltóverYZaun = "Piltóver y Zaun",
    Targón = "Targón",
}

export enum RegionRef {
    Bilgewater = "Bilgewater",
    Demacia = "Demacia",
    Freljord = "Freljord",
    Ionia = "Ionia",
    Noxus = "Noxus",
    PiltoverZaun = "PiltoverZaun",
    ShadowIsles = "ShadowIsles",
    Targon = "Targon",
}

export enum Set {
    Set1 = "Set1",
    Set2 = "Set2",
    Set3 = "Set3",
    Set4 = "Set4",
}

export enum SpellSpeed {
    Empty = "",
    Lento = "Lento",
    Ráfaga = "Ráfaga",
    Rápido = "Rápido",
}

export enum SpellSpeedRef {
    Burst = "Burst",
    Empty = "",
    Fast = "Fast",
    Slow = "Slow",
}

export enum Subtype {
    ArmaLunar = "ARMA LUNAR",
    Celestial = "CELESTIAL",
    Dragón = "DRAGÓN",
    Empty = "",
    Poro = "PORO",
    Élite = "ÉLITE",
}

export enum Supertype {
    Campeón = "Campeón",
    Empty = "",
}

export enum Type {
    Habilidad = "Habilidad",
    Hechizo = "Hechizo",
    Hito = "Hito",
    Unidad = "Unidad",
    Trampa = "Trampa",
}

