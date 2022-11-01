const conversions = () => {
  const moneyFormat = (value: number | undefined): string => {
    if (value)
      return Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(value);
    return Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(0);
  };

  const areaFormat = (value: number | undefined): string => {
    if (value) return `${value}m²`;
    return "indefinido";
  };

  const dateFormat = (date) => {
    let newDate = date.split("T")[0];
    return newDate.split("-").reverse().join("/");
  };

  const stateShortFormat = (state: string | undefined) => {
    switch (state) {
      case "Acre":
        return "AC";
      case "Alagoas":
        return "AL";
      case "Amapá":
        return "AP";
      case "Amazonas":
        return "AM";
      case "Bahia":
        return "BA";
      case "Ceará":
        return "CE";
      case "Distrito Federal":
        return "DF";
      case "Espírito Santo":
        return "ES";
      case "Goiás":
        return "GO";
      case "Maranhão":
        return "MA";
      case "Mato Grosso":
        return "MT";
      case "Mato Grosso do Sul":
        return "MS";
      case "Minas Gerais":
        return "MG";
      case "Pará":
        return "PA";
      case "Paraíba":
        return "PB";
      case "Paraná":
        return "PR";
      case "Pernambuco":
        return "PE";
      case "Piauí":
        return "PI";
      case "Rio de Janeiro":
        return "RJ";
      case "Rio Grande do Norte":
        return "RN";
      case "Rio Grande do Sul":
        return "RS";
      case "Rondônia":
        return "RO";
      case "Roraima":
        return "RR";
      case "Santa Catarina":
        return "SC";
      case "São Paulo":
        return "SP";
      case "Sergipe":
        return "SE";
      case "Tocantins":
        return "TO";
    }
  };

  const locationFormat = (
    city: string | undefined,
    state: string | undefined,
    country: string | undefined
  ) => {
    return `${city}/${stateShortFormat(state)}, ${country}`;
  };

  return {
    moneyFormat,
    areaFormat,
    locationFormat,
    dateFormat,
  };
};

export default conversions;
