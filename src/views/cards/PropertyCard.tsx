// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import { Imovel } from 'src/models'
import AddressCard from './AddressCard'

type PropertyCardProps = {
  imovel: Imovel
}

const PropertyCard: React.FC<PropertyCardProps> = ({ imovel }) => {
  return (
    <Card>
      <CardContent>
        <Box sx={{ mb: 5, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <Typography variant='body2'>{imovel.tipo} | {imovel.area} m²</Typography>
          <Typography variant='body2'>{imovel.disponivel}</Typography>
        </Box>
        <Box><AddressCard endereco={imovel.endereco} /></Box>
      </CardContent>
      <CardActions className='card-action-dense'>
        <Button>Editar Imóvel</Button>
        <Button>Criar Anúncio</Button>
      </CardActions>
    </Card>
  )
}

export default PropertyCard
