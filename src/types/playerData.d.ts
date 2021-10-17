export interface PlayerDataTypes {
    seed:     number;
    gameName: string;
    decks:    Deck[];
}

export interface Deck {
    factions:  string;
    champions: string;
    code:      string;
}
