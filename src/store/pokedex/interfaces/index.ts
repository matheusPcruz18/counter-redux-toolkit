export interface IPokedexProps {
  currentPokemon: any | null;
  loading: boolean;
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string; // O nome da estatística pode ser uma string, ajuste conforme necessário
    url: string; // A URL da estatística pode ser uma string, ajuste conforme necessário
  };
}

interface Type {
  name: string;
  slot: number;
  type: {
    name: string; // O nome do tipo pode ser uma string, ajuste conforme necessário
    url: string; // A URL do tipo pode ser uma string, ajuste conforme necessário
  };
}

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  stats: Stat[];
  types: Type[];
  sprites: {
    front_default: string;
    back_default: string;
  }
}
