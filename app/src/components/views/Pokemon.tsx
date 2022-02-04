import { Avatar, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import useFetch from 'hooks/useFetch'
import { useParams } from 'react-router-dom'

type PokeSprites = {
  front_default: string
  back_default: string
  back_shiny: string
  front_shiny: string
  other: {
    dream_world: {
      front_default: string
    }
    home: {
      front_default: string
    }
  }
}

type PokeType = {
  slot: number
  type: { name: string }
}

type PokeApiResponse = {
  id: number
  name: string
  weight: number
  height: number
  sprites: PokeSprites
  types: PokeType[]
}

export default function Pokemon() {
  const params = useParams()

  const { data, error, state } = useFetch<PokeApiResponse>({
    url: `https://pokeapi.co/api/v2/pokemon/${params.id}`,
    method: 'GET',
    data: null
  })

  // const poke = data

  console.log({ data })
  if (state === 'loading' || state === 'idle') {
    return <div>Cargando...</div>
  }

  if (state === 'error' || !data || error) {
    return <div>{error}</div>
  }

  return (
    <Grid item xs={12} md={12} sx={{ py: 5, my: 5 }}>
      <Typography variant="h2" gutterBottom sx={{ textAlign: 'center' }}>
        This is the pokemon
      </Typography>

      {data && (
        <>
          <Avatar
            alt={data.name}
            src={data.sprites.other.dream_world.front_default}
            sx={{ width: 128, height: 128, border: '2px solid black', justifyContent: 'center' }}
          />
          <Avatar
            alt={data.name}
            src={data.sprites.other.home.front_default}
            sx={{ width: 128, height: 128, border: '2px solid black', justifyContent: 'center' }}
          />
          <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
            <img src={data.sprites.front_default} alt={data.name} /> {data.name}
            <br />
            {data.weight} - {data.height}
          </Typography>
        </>
      )}
    </Grid>
  )
}
