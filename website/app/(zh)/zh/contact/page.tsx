import ContactPage from "@/components/pages/ContactPage";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("zh", "contact");

export default function Page() {
  return <ContactPage locale="zh" />;
}
