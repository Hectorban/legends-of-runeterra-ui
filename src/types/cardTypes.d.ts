export interface CardType {
    code:    string;
    count:   number;
    faction: Faction;
    id:      number;
    set:     number;
}

export interface Faction {
    id:        number;
    shortCode: string;
}
