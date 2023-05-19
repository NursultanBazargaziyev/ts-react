import {PlayerType, CellValueType} from '../type';

const useGameChanges = () =>{
    const handlePlayerSwitch = (player: PlayerType['playerType'])=>{
        if(player === "") return 'X';
        return player === 'X'? 'Y': 'X';
    }

    const handlePlayerMove = (e: CellValueType['onClick'])=>{
        
    }

    return {handlePlayerSwitch, handlePlayerMove}
}

export default useGameChanges;