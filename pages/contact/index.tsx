import {MainLayout} from "@/components/layout/main-layout";
import {ReactNode} from "react";

export default function ContactPage() {
  return (
    <h1 className="[ text-5xl ]">Contact Page</h1>
  )
}

ContactPage.getLayout = function getLayout(page: ReactNode) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}
