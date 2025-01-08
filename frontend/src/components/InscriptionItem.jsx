import { useNavigate } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const InscriptionItem = ({ inscription, addressId }) => {
  const navigate = useNavigate();
  const inscriptionId = inscription.inscriptions[0].id;
  const shortHash = inscriptionId.slice(0, 8);
  return (
    <div 
      onClick={() => navigate(`/address/${addressId}/inscriptions/${inscriptionId}`)}
      key={inscription.id}
      className='flex items-center justify-between bg-gray-900 p-4 rounded-lg hover:bg-gray-800 cursor-pointer'
    >
      <span className='text-xl'>Inscription {shortHash}</span>
      <ChevronRightIcon className="w-6 h-6" />
    </div>
  );
};

export default InscriptionItem;