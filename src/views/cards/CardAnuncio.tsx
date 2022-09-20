// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { Anuncio } from 'src/models'

const AdCard = ({ nome, descricao, tipo, valor, dataDeCriacao, imovel }: Anuncio) => {
  return (
    <Card>
      <CardContent sx={{ padding: theme => `${theme.spacing(3, 5.25, 4)} !important` }}>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          {nome}
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>R$ {valor}</Typography>
        <Typography variant='body2'>
          {descricao}
        </Typography>
      </CardContent>
      <Button variant='contained' sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
        Preencher Formulário de Endereço
      </Button>
    </Card>
  )
}

export default AdCard
