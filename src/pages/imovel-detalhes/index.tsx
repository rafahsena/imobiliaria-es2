import mock from "src/mock"
import { Imovel } from "src/models"
import PropertyCard from "src/views/cards/PropertyCard"

type PropertyDetailsProps = {
  imovel: Imovel
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ imovel }) => {
  return (
    <PropertyCard imovel={imovel} />
  )
}

export const getServerSideProps = () => {
  const { listaDeImoveis } = mock()
  return { props: {
    imovel: listaDeImoveis[0]
    }
  }
}

export default PropertyDetails