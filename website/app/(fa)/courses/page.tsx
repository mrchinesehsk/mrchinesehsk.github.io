import CoursesPage from "@/components/pages/CoursesPage";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("fa", "courses");

export default function Page() {
  return <CoursesPage locale="fa" />;
}
