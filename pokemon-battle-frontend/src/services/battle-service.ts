import axios from "axios";
import { BattleResult } from "../schema/battle-result/battle-result.entity";
import { config } from "../config";


const startBattle = async (pokemon1Id: string, pokemon2Id: string): Promise<BattleResult> => {
  try {
    const response = await axios.post<BattleResult>(`${config.BACKEND_URL}/battle`, {
      pokemon1Id,
      pokemon2Id
    });
    return response.data;
  } catch (error) {
    console.error('Error starting battle:', error);
    throw error;
  }
};

export const battleService = {
  startBattle
};
