import { APP_ID, IS_WAITLIST_ENABLED, THEME } from "@/constants";
import type { Metadata, Viewport } from "next";

import { AppIcon } from "@/components/app_icon/app_icon";
import { CompactFooter } from "@/components/compact_footer/compact_footer";
import { DownloadActionButton } from "@/components/download_action_button/download_action_button";
import { EmailForm } from "@/components/email_form/email_form";
import { Hero } from "@/components/hero/hero";
import { MaterialSymbolsLink } from "@/components/material_symbols_link/material_symbols_link";
import { Navbar } from "@/components/navbar/navbar";
import { Section } from "@/components/section/section";
import { ThemeStyle } from "@/components/theme_style/theme_style";
import { ThemeProvider } from "@/providers/theme_provider";
import "@/global.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://cutiq.app";
const TITLE = "CutIQ - AI hair analysis, routines, and style previews";
const DESCRIPTION =
  "CutIQ helps you analyze your hair, track progress, build a routine, and preview new looks from your iPhone.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 720,
        alt: "CutIQ preview with hair analysis and style tools",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-preview.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme={THEME}>
      <head>
        {!IS_WAITLIST_ENABLED && (
          <meta name="apple-itunes-app" content={`app-id=${APP_ID}`} />
        )}

        <link rel="icon" href="/favicon.png" type="image/png" sizes="48x48" />

        <ThemeStyle />
        <MaterialSymbolsLink />
      </head>
      <body>
        <ThemeProvider>
          {!IS_WAITLIST_ENABLED && (
            <>
              <Navbar
                icon={<AppIcon src="/cutiq/app-icon.png" />}
                appName="CutIQ"
                links={[
                  { label: "Features", href: "#features" },
                  { label: "Privacy", href: "/privacy" },
                  { label: "Contact", href: "mailto:support@cutiq.app" },
                ]}
                action={<DownloadActionButton />}
              />

              {children}

              <CompactFooter
                appIcon={<AppIcon src="/cutiq/app-icon.png" filter="grayscale" />}
                links={[
                  { label: "Privacy", href: "/privacy" },
                  { label: "Terms", href: "/terms" },
                  { label: "Support", href: "mailto:support@cutiq.app" },
                ]}
                footnoteLeading={`© ${new Date().getFullYear()} CutIQ. All rights reserved.`}
                footnoteTrailing={
                  <>
                    Built with{" "}
                    <a target="_blank" href="https://appview.dev" rel="noopener noreferrer">
                      AppView
                    </a>
                  </>
                }
              />
            </>
          )}

          {IS_WAITLIST_ENABLED && (
            <Section paddingTop={60}>
              <Hero
                title="CutIQ"
                subtitle="AI-powered hair analysis, style previews, and routines that make progress easier to see and easier to keep."
                media={
                  <Hero.Image
                    src="/cutiq/style-man-bun.jpg"
                    alt="CutIQ hairstyle preview on iPhone"
                    bezel="iPhone 17 Black"
                  />
                }
                action={
                  <EmailForm
                    providerConfig={{
                      provider: "loops",
                      config: {
                        formId: "replace-with-your-loops-form-id",
                      },
                    }}
                  />
                }
              />
            </Section>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
