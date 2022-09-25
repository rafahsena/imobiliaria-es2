import { Card, CardContent } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Endereco } from 'src/models'

type AddressCardProps = {
  endereco: Endereco
}

const AddressCard: React.FC<AddressCardProps> = ({ endereco }) => {
  return (
    <Card>
      <CardContent>
        <Typography marginBottom={8} variant='h5'>Informações do Endereço</Typography>
        <Typography variant='body2'>{endereco.pais}</Typography>
        <Typography variant='body2'>{endereco.estado}, {endereco.cidade}</Typography>
        <Typography variant='body2'>{endereco.logradouro} - {endereco.numero}, {endereco.cep}</Typography>
        <Typography variant='body2'>{endereco.complemento}</Typography>
      </CardContent>
    </Card>
  )
}

export default AddressCard