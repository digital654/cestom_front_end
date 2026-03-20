import { FolderOpen, Clock, CheckCircle, Bell, Calendar } from 'lucide-react';

export function StatsCards() {
  const stats = [
    {
      icon: FolderOpen,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      number: '3',
      label: 'fichiers',
      sublabel: 'Documents envoyés',
    },
    {
      icon: Clock,
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      number: 'En cours',
      label: 'En attente',
      sublabel: 'Statut du dossier',
    },
    {
      icon: CheckCircle,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      number: 'Payée',
      label: 'Payée',
      sublabel: 'Cotisation annuelle',
      highlight: '2023-2024',
    },
    {
      icon: Bell,
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      number: '2',
      label: 'nouvelles',
      sublabel: 'Notifications',
    },
    {
      icon: Calendar,
      iconBg: 'bg-gray-100',
      iconColor: 'text-gray-600',
      number: "Aujourd'hui",
      label: "Aujourd'hui",
      sublabel: '',
    },
  ];

  return (
    <div className="grid grid-cols-5 gap-4 mb-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
        >
          <div className="flex flex-col items-center text-center">
            <div className={`${stat.iconBg} p-3 rounded-full mb-3`}>
              <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
            </div>
            {stat.highlight && (
              <div className="text-xs font-semibold text-green-600 mb-1">
                {stat.highlight}
              </div>
            )}
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {stat.number}
            </div>
            <div className="text-sm font-medium text-gray-700">
              {stat.label}
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {stat.sublabel}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
