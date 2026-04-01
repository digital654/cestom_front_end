import { Sidebar } from "./components/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen h-screen">
      {/* Sidebar */}
      <div className="w-64 flex-shrink-0 h-full fixed left-0 top-0 hidden md:block">
        <Sidebar />
      </div>

      {/* Main content */}
      <main className="flex-1 md:ml-64 p-4 overflow-auto h-full">
        {children}
      </main>
    </div>
  );
}
