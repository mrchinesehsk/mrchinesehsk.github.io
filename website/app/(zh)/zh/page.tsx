import HomePage from "@/components/pages/HomePage";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("zh", "home");

export default function Page() {
  return <HomePage locale="zh" />;
}
