// Imports des composants Documents
import DocumentList from "./components/documents/DocumentList";
  export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 flex justify-center">
      <div className="w-full max-w-3xl">
        <DocumentList />
      </div>
    </main>
  );
}