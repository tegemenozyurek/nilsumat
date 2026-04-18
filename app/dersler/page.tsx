import { redirect } from "next/navigation";

/** Eski adres; kalıcı yönlendirme */
export default function DerslerRedirectPage() {
  redirect("/iletisim");
}
