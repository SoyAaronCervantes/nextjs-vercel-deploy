import {MainLayout} from "@/components/layout/main-layout";
import {ReactNode} from "react";

export default function HomePage() {
  return (
    <h1 className="[ text-5xl ]">Home Page</h1>
  )
}

HomePage.getLayout = function getLayout(page: ReactNode) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}
