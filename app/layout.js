import localFont from "next/font/local";
import "./globals.css";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/Providers/Theme";
import Header from "@/components/Header";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";
import SimpleAnalytics from "./(home)/components/SimpleAnalytics";
import ViewStats from "./(home)/components/ViewStats";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata = {
  title: "Vinay N - Embedded Systems Engineer | AI/ML Integration",
  icons:{
    icon: "/logo.png"
  },
  description: "Embedded Systems Engineer with AI/ML integration expertise, specializing in Verilog HDL, Embedded C, and hardware-software co-design. Currently working as Prompt Engineer on HIPAA-compliant healthcare AI chatbots.",
  keywords: "embedded systems, AI/ML integration, Verilog HDL, Embedded C, IoT, Arduino, Raspberry Pi, prompt engineering, healthcare AI, FPGA, digital design, portfolio",
  author: "Vinay N",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.className} antialiased`}
      >

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >

          <NextTopLoader />
          <SimpleAnalytics />
          <Header />

          {children}

          <Footer />
          <ViewStats />
          <Toaster
            position="top-right"
            toastOptions={{
              className: 'font-semibold backdrop-blur-md text-black rounded-3xl',
            }}
          />

          <GridPattern
            width={200}
            height={200}
            x={-1}
            y={-1}
            className={cn(
              "[mask-image:linear-gradient(to_bottom,white,transparent)]",
            )}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
