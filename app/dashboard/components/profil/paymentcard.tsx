import Link from "next/link";
import { Check, Download } from "lucide-react";

export type PaymentCardProps = {
  status?: "À jour" | "En retard" | "En attente";
  year?: string;
  expiresAt?: string;
  receiptHref?: string;
};

export function PaymentCard({
  status = "À jour",
  year = "2023–2024",
  expiresAt = "31 Décembre 2024",
  receiptHref = "#",
}: PaymentCardProps) {
  const isUpToDate = status === "À jour";

  return (
    <div className="rounded-xl bg-[#00923F] p-6 shadow-sm">
    <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold bg-[#00923F] text-white border border-white">
        <Check className="w-4 h-4 text-[#FFE600]" /> À JOUR
    </span>
    <h3 className="mt-4 text-lg font-bold text-white">Cotisation 2023–2024</h3>
    <p className="mt-1 text-xs text-white/80">
        Votre cotisation est valide jusqu'au 31 Décembre 2024.
    </p>
    <Link
        href={receiptHref}
        className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-[#FFE600] px-4 py-2 text-base font-bold text-[#00923F] shadow-sm transition hover:bg-yellow-300"
    >
        <Download className="h-4 w-4" />
        Télécharger le reçu
    </Link>
    </div>
  );
}
