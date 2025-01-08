import axios from 'axios';

export default async function getInscriptions(addressId: string) {
  const response = await axios.get(
    `https://api-3.xverse.app/v1/address/${addressId}/ordinal-utxo`
  );
  return response.data;
}
