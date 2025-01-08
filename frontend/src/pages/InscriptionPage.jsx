import { useLoaderData, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setInscription } from '../store/inscriptionsSlice';
import { useEffect } from 'react';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import CopyIcon from '../components/CopyIcon';

function isImage(contentType) {
  if (!contentType){ 
    return false;
  }
  if (contentType.startsWith('image/svg+xml')){
    return false;
  }
  return contentType.startsWith('image/') || contentType.startsWith('webp');
}

const InscriptionPage = () => {
  const { inscription } = useLoaderData();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (inscription) {
      dispatch(setInscription(inscription));
    }

    return () => {
      dispatch(setInscription(null));
    };
  }, [inscription, dispatch]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 p-4 flex items-center">
        <button 
          onClick={() => navigate('/')}
          className="mr-4 hover:opacity-75 text-white"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <span>Details</span>
      </header>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto p-4">
        {/* Image */}
        {inscription.content_type && isImage(inscription.content_type) && (
          <div className="flex justify-center mb-8">
            <img 
              src={`https://ord.xverse.app/content/${inscription.id}`}
              alt={`Inscription ${inscription.number}`}
              className="w-full max-w-[400px] aspect-square object-contain"
            />
          </div>
        )}
        {inscription.content_type && !isImage(inscription.content_type) && (
          <div className="flex justify-center mb-8">
            <iframe 
              src={`https://ord.xverse.app/content/${inscription.id}`}
              title={`Inscription ${inscription.number} Content`}
              className="w-full max-w-[400px] aspect-square object-contain"
            />
          </div>
        )}

        {/* Details */}
        <div className="space-y-8">
          <h1 className="text-xl">
            Inscription {inscription.number}
          </h1>
          
          {/* Inscription ID */}
          <div>
            <h2 className="text-sm text-gray-400 mb-2 flex items-center gap-2">
              Inscription ID
              <CopyIcon text={inscription.id} />
            </h2>
            <p className="font-mono break-all">
              <span className="font-bold">{inscription.id}</span>
            </p>
          </div>

          {/* Owner Address */}
          <div>
            <h2 className="text-sm text-gray-400 mb-2 flex items-center gap-2">
              Owner Address
              <CopyIcon text={inscription.address} />
            </h2>
            <p className="font-mono break-all">
              <span className="font-bold">{inscription.address}</span>
            </p>
          </div>

          {/* Attributes */}
          <div>
            <h2 className="text-lg mb-4 text-white font-bold">
              Attributes
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {/* Output Value */}
              <div>
                <h3 className="text-sm text-gray-400 mb-1 flex items-center gap-2">
                  Output Value
                  <CopyIcon text={inscription.output} />
                </h3>
                <p className="bg-gray-800 p-2 rounded-md font-mono break-all">{inscription.output}</p>
              </div>

              {/* Content Type */}
              <div>
                <h3 className="text-sm text-gray-400 mb-1 flex items-center gap-2">
                  Content Type
                </h3>
                <p className="bg-gray-800 p-2 rounded-md font-mono break-all">{inscription.content_type || 'Not available'}</p>
              </div>

              {/* Content Length */}
              <div>
                <h3 className="text-sm text-gray-400 mb-1 flex items-center gap-2">
                  Content Length
                </h3>
                <p className="bg-gray-800 p-2 rounded-md font-mono break-all">{inscription.content_length ? `${inscription.content_length} bytes` : 'Not available'}</p>
              </div>

              {/* Location */}
              <div>
                <h3 className="text-sm text-gray-400 mb-1 flex items-center gap-2">
                  Location
                  <CopyIcon text={inscription.location} />
                </h3>
                <p className="bg-gray-800 p-2 rounded-md font-mono break-all">
                  {inscription.location}
                </p>
              </div>
              {/* Genesis transaction */}
              <div>
                <h3 className="text-sm text-gray-400 mb-1 flex items-center gap-2 ">
                  Genesis Transaction
                  <CopyIcon text={inscription.genesis_tx_id} />
                </h3>
                <p className="bg-gray-800 p-2 rounded-md font-mono break-all">
                  {inscription.genesis_tx_id}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InscriptionPage;

export async function inscriptionLoader({ params }) {
  const inscriptionId = params.inscriptionId;
  const addressId = params.addressId;
  const response = await fetch(
    `http://localhost:3001/api/inscriptions/v1/address/${addressId}/inscriptions/${inscriptionId}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch inscription');
  }
  const data = await response.json();
  return { inscription: data };
}
