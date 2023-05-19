export type PlayerType = {
    playerType: string;  
}

export type CellValueType = {
    cellValue: string;
    onClick: (e:React.MouseEvent<HTMLDivElement>, key:number)=>void;
    key: number;
}

