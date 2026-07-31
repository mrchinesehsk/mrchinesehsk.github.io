import HomePage from "@/components/pages/HomePage";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("fa", "home");

export default function Page() {
  return <HomePage locale="fa" />;
}
