import { Upload, Edit } from 'lucide-react';

export default function UploadDocument() {
  return (
    <div className="flex gap-3 mt-6">
      
      <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
        <Upload className="w-4 h-4" />
        <span>Uploader</span>
      </button>

      <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
        <Edit className="w-4 h-4" />
        <span>Modifier</span>
      </button>

    </div>
  );
}