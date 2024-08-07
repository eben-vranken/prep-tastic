import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Components
import ResizableSidebar from "@/components/Reusable UI/ResizableSidebar";

// Icons
import { Bread, Calendar, ChartLineUp, CookingPot, Gear, HouseLine, ShippingContainer, ShoppingBag, ShoppingCart } from "@phosphor-icons/react/dist/ssr";
import IconSidebar from "@/components/Reusable UI/IconSidebar";
import Titlebar from "@/components/Static UI/Titlebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prep-Tastic",
  description: "Mealprep planner",
};

const iconSidebarLinksTop: Array<{ [key: string]: [React.ReactNode, string] }> = [
  { home: [<HouseLine size={22.5} />, "/"] },
  { meals: [<CookingPot size={22.5} />, "/meals"] },
  { calendar: [<Calendar size={22.5} />, "/calendar"] },
  { "shopping-cart": [<ShoppingCart size={22.5} />, "/shopping-cart"] }
];

const iconSidebarLinksBottom: Array<{ [key: string]: [React.ReactNode, string] }> = [
  { "settings": [<Gear size={22.5} />, "/settings"] }
];


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-body overflow-hidden text-text h-screen select-none flex flex-col`}>
        {/* Titlebar */}
        <Titlebar />

        {/* Icon Sidebar */}
        <section className="flex w-full h-full">

          <IconSidebar linksTop={iconSidebarLinksTop} linksBottom={iconSidebarLinksBottom} linksMiddle={[]} />
          {children}
        </section>
      </body>
    </html >
  );
}
