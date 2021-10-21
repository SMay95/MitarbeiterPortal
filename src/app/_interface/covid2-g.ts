export interface iCovid2G {

    Nachname?: string; 
    Vorname?: string; 
    EMail?: string; 
    Geburtstag?: string; 

    bGenesen?: boolean; 
    DTGenesen?: string; 

    bGeimpft?: boolean; 
    DTeinfachImpfung?: string;
    DTzweifachImpfung1?: string;
    DTzweifachImpfung2?: string;

    bErklaerung?: boolean; 
    StatusNr?: number;

    Timestamp?: string;
    USERIDENTNR?: string;
}
