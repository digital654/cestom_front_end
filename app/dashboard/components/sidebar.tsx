import { FileText, User, File, FolderOpen, Book, GraduationCap, Settings, HelpCircle } from 'lucide-react';

interface SidebarProps {
    activeItem?: string;
}

export function Sidebar({ activeItem = 'dashboard' }: SidebarProps) {
    const menuItems = [
        { id: 'dashboard', label: 'Tableau de bord', icon: FileText },
        { id: 'profile', label: 'Mon profil', icon: User },
        { id: 'documents', label: 'Mes documents', icon: File },
        { id: 'dossier', label: 'Suivi de dossier', icon: FolderOpen },
        { id: 'cotisation', label: 'Paiement cotisation', icon: FileText },
        { id: 'bibliotheque', label: 'Bibliothèque', icon: Book },
        { id: 'cvtheque', label: 'CVthèque', icon: GraduationCap },
        { id: 'repertoire', label: 'Répertoire Alumni', icon: GraduationCap },
        { id: 'parametres', label: 'Paramètres', icon: Settings },
    ];

    return (
        <aside className="fixed inset-y-0 left-0 z-40 w-64 bg-gradient-to-b from-green-700 to-green-800 text-white h-screen flex flex-col
            transition-transform -translate-x-full md:translate-x-0 md:static md:h-screen
            md:w-64
            sm:w-20 sm:translate-x-0
            sm:fixed sm:z-50
            "
        >
            {/* Logo */}
            <div className="p-6 flex items-center gap-3 sm:justify-center sm:p-4">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                    <span className="text-green-700 font-bold text-lg">C</span>
                </div>
                <span className="text-xl font-bold hidden sm:hidden md:inline">CESTOM</span>
            </div>

            {/* Menu */}
            <nav className="flex-1 px-3 py-4 sm:px-1 sm:py-2">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = item.id === activeItem;
                    return (
                        <button
                            key={item.id}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors
                                ${isActive ? 'bg-green-600 text-white' : 'text-green-100 hover:bg-green-600/50'}
                                sm:justify-center sm:px-2 sm:py-2
                            `}
                        >
                            <Icon className="w-5 h-5" />
                            <span className="text-sm md:inline sm:hidden">{item.label}</span>
                        </button>
                    );
                })}
            </nav>

            {/* Help section */}
            <div className="p-4 m-4 bg-green-900/50 rounded-lg sm:hidden">
                <div className="flex items-center gap-2 mb-2">
                    <HelpCircle className="w-5 h-5" />
                    <span className="text-sm font-semibold">Besoin d'aide ?</span>
                </div>
                <p className="text-xs text-green-200 mb-3">
                    Contactez le support
                </p>
                <button className="w-full bg-green-600 hover:bg-green-500 text-white text-sm py-2 rounded transition-colors">
                    Contacter
                </button>
            </div>
        </aside>
    );
}
