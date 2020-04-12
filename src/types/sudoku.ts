export interface Box {
    candidates: Candidate[];
    column: number;
    isLocked: boolean;
    number?: number;
    region: number;
    row: number;
}

export interface Candidate {
    impact: number;
    isValid: boolean;
    number: number;
}

export interface Sudoku {
    boxes: Box[];
    regionSize: number;
    size: number;
}
