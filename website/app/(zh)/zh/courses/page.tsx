import CoursesPage from "@/components/pages/CoursesPage";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("zh", "courses");

export default function Page() {
  return <CoursesPage locale="zh" />;
}
