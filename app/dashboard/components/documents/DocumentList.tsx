import DocumentItem from './DocumentItem';
import UploadDocument from './UploadDocument';

export default function DocumentList() {
  const documents = [
    {
      name: 'Passeport_Kodjo.pdf',
      date: 'Mis à jour le 12 Oct 2023',
      size: '2.4 MB',
      status: 'VALIDÉ',
      statusColor: 'bg-green-100 text-green-700',
    },
    {
      name: 'Carte_Etudiant.jpg',
      date: 'Mis à jour le 10 Oct 2023',
      size: '1.1 MB',
      status: 'VALIDÉ',
      statusColor: 'bg-green-100 text-green-700',
    },
    {
      name: 'Attestation_Inscription.pdf',
      date: 'Ajouté hier',
      size: '2.5 MB',
      status: 'EN RÉVISION',
      statusColor: 'bg-yellow-100 text-yellow-700',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
      
      <div className="p-6 border-b border-gray-200 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">
          Mes Documents
        </h3>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          Voir tout
        </button>
      </div>

      <div className="p-6">
        
        <div className="space-y-3">
          {documents.map((doc, index) => (
            <DocumentItem key={index} doc={doc} />
          ))}
        </div>

        <UploadDocument />

      </div>
    </div>
  );
}