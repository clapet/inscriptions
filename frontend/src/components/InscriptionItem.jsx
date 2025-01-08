const InscriptionItem = ({ inscription }) => {
  return (
    <div 
      key={inscription.id}
      className='flex items-center justify-between bg-gray-900 p-4 rounded-lg hover:bg-gray-800 cursor-pointer'
    >
      <span className='text-xl'>Inscription {inscription.name}</span>
      <svg 
        className="w-6 h-6" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M9 5l7 7-7 7" 
        />
      </svg>
    </div>
  );
};

export default InscriptionItem;