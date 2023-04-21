import React, {ReactNode} from 'react';
import {MainLayout} from "@/components/layout/main-layout";

export default function PricingPage() {
  return (
    <h1 className="[ text-5xl ]">Pricing Page</h1>
  );
};

PricingPage.getLayout = function getLayout(page: ReactNode) {
  return (
    <MainLayout>{page}</MainLayout>
  );
};
