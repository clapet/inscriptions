import axios from 'axios';

export default async function getInscriptionsByIdSvc(
  addressId: string,
  inscriptionId: string
) {
  const url = `https://api-3.xverse.app/v1/address/${addressId}/ordinals/inscriptions/${inscriptionId}`;
  const response = await axios.get(url);
  const inscription = response.data;
  return inscription;
}
