export interface GlobalDatatypes {
    vocabTerms:  Keyword[];
    keywords:    Keyword[];
    regions:     Region[];
    spellSpeeds: Rarity[];
    rarities:    Rarity[];
    sets:        Region[];
}

export interface Keyword {
    description: string;
    name:        string;
    nameRef:     string;
}

export interface Rarity {
    name:    string;
    nameRef: string;
}

export interface Region {
    abbreviation?:    string;
    iconAbsolutePath: string;
    name:             string;
    nameRef:          string;
}
