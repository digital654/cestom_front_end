import { Sidebar } from "./components/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen">
        {/* Sidebar */}
            <Sidebar />
       
        {/* Main content */}
        <main className="flex-1 p-4">
            {children}
        </main>
    </div>
  );
}
