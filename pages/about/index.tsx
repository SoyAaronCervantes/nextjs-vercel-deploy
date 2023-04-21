import { Inter } from 'next/font/google'
import { MainLayout } from "@/components/layout/main-layout";
import {ReactNode} from "react";

const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
  return (
    <h1 className="[ text-5xl ]">About Page</h1>
  )
}

AboutPage.getLayout = function getLayout(page: ReactNode) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}
