import { FileText, Download, MoreVertical } from 'lucide-react';

export default function DocumentItem({ doc }: any) {
  return (
    <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
      
      <div className="flex items-center gap-4 flex-1">
        <div className="w-10 h-10 bg-red-100 rounded flex items-center justify-center">
          <FileText className="w-5 h-5 text-red-600" />
        </div>

        <div className="flex-1">
          <div className="font-medium text-gray-900">{doc.name}</div>
          <div className="text-sm text-gray-500">
            {doc.date} • {doc.size}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${doc.statusColor}`}>
          {doc.status}
        </span>

        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Download className="w-4 h-4 text-gray-600" />
        </button>

        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <MoreVertical className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    </div>
  );
}