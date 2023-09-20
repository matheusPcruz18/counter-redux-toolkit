import React, { Fragment, useEffect, useMemo, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useGetPokemonByNameQuery} from '../../store/pokedex/apiSlice';
import SelectDropdown from 'react-native-select-dropdown';
import {pokemons_from_kanto} from '../../utils/pokemons';

function Pokedex(): JSX.Element {
  const [selectedPokemon, setSelectedPokemon] = useState('pikachu');
  const {data, error, isLoading, refetch, isFetching} =
    useGetPokemonByNameQuery(selectedPokemon);

  const buttonStyle = {
    backgroundColor: '#181818',
    borderWidth: 1,
    borderColor: '#ccc',
    height: 60,
  };

  useEffect(() => {
    refetch();
  }, [selectedPokemon]);

  const buttonTextAfterSelection = useMemo(() => {
    return (selectedItem: {name: string}, index: any) => {
      return selectedItem.name;
    };
  }, []);

  const rowTextForSelection = useMemo(() => {
    return (item: {name: string}, index: any) => {
      return item.name;
    };
  }, []);

  console.log("Error -> ", error);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Using RTK Query from Redux Toolkit to manage the API routes
      </Text>
      <View style={styles.row}>
        <SelectDropdown
          data={pokemons_from_kanto}
          defaultButtonText="Selecione um Pokémon"
          buttonStyle={{width: '100%', ...buttonStyle}}
          buttonTextStyle={{color: '#fff'}}
          rowStyle={{...buttonStyle, opacity: 0.8}}
          rowTextStyle={{color: '#fff'}}
          onSelect={(selectedItem: {name: string; id: number}, index) => {
            const name = selectedItem.name;
            setSelectedPokemon(name.toLowerCase());
          }}
          buttonTextAfterSelection={buttonTextAfterSelection}
          rowTextForSelection={rowTextForSelection}
        />
      </View>

      {isFetching ? (
        <ActivityIndicator color="#fff" size="large" />
      ) : error ? (
        <Text style={styles.error_esssage}>{error.error}</Text>
      ) : (
        <Fragment>
          {data?.sprites && (
            <Image
              style={styles.image}
              source={{uri: data?.sprites?.front_default}}
            />
          )}
          {data?.types?.map((item, index) => (
            <Text style={styles.type} key={index}>
              {item?.type?.name}
            </Text>
          ))}
        </Fragment>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 30,
    gap: 30,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchInput: {
    width: '90%',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  type: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
  },
  error_esssage: {
    fontSize: 18,
    color: '#d42727',
    fontWeight: 'bold',
  },
});

export default Pokedex;
