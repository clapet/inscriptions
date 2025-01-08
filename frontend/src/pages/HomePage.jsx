import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setInscriptions } from '../store/inscriptionsSlice';
import InscriptionItem from '../components/InscriptionItem';

function HomePage() {
  const dispatch = useDispatch();
  const [ownerBitcoinAddress, setOwnerBitcoinAddress] = useState('bc1pe6y27ey6gzh6p0j250kz23zra7xn89703pvmtzx239zzstg47j3s3vdvvs');
  const inscriptions = useSelector((state) => state.inscriptions.inscriptions);

  const handleLookup = async () => {
    const response = await fetch(`http://localhost:3001/api/inscriptions/v1/address/${ownerBitcoinAddress}/ordinal-utxo`);
    const data = await response.json();
    const results = data.results;

    dispatch(setInscriptions(results));
  };

  return (
    <div className='w-full max-w-2xl px-4 py-8'>
      <h1 className='text-4xl font-bold mb-12 text-center'>
        Ordinal Inscription Lookup
      </h1>
      
      <div className='mb-8'>
        <label className='block text-xl mb-2'>
          Owner Bitcoin Address:
        </label>
        <input
          className='w-full bg-transparent border border-gray-600 rounded-lg p-3 mb-4 focus:outline-none focus:border-blue-500'
          type="text"
          value={ownerBitcoinAddress}
          onChange={(e) => setOwnerBitcoinAddress(e.target.value)}
        />
        <button 
          onClick={handleLookup}
          className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg text-xl'
        >
          Look up
        </button>
      </div>

      {inscriptions.length > 0 && (
        <div>
          <h2 className='text-2xl font-bold mb-4'>Results</h2>
          <div className='space-y-2'>
            {inscriptions.map((inscription) => (
              <InscriptionItem key={inscription.txid} inscription={inscription} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
