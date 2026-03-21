import { CardGrid } from "@/components/card_grid/card_grid";
import { DownloadActionButton } from "@/components/download_action_button/download_action_button";
import { Hero } from "@/components/hero/hero";
import { Section } from "@/components/section/section";

export default function Page() {
  return (
    <>
      <Section paddingTop={80}>
        <Hero
          title="Stop guessing. Start knowing."
          subtitle="Finally understand your hair. Get a real analysis, a routine that actually works, and see exactly how any style looks on you before you commit."
          media={
            <Hero.Video
              src="/cutiq/hero-demo.mp4"
              bezel="iPhone 17 Black"
              alt="CutIQ app demo"
            />
          }
          action={<DownloadActionButton size="medium" label="Download on the App Store" />}
        />
      </Section>

      <Section navigationAnchor="features">
        <CardGrid rowHeight={440}>
          <CardGrid.StackedCard
            maxWidth="twoThirds"
            title="The feedback your barber never gives you"
            description="Four photos. One honest analysis. Your health score, face shape, what's working, what's not, and exactly what to do about it."
            media={
              <CardGrid.StackedCard.Video
                src="/cutiq/hero-demo.mp4"
                bezel="iPhone 17 Black"
                bezelCrop={{ edge: "bottom", croppedRatio: 0.28 }}
              />
            }
            textAlignment="leading"
          />

          <CardGrid.IconCard
            maxWidth="third"
            iconName="target"
            title="A plan that actually sticks"
            description="No more random products. Get a weekly routine built from your analysis. Track it. Watch your score improve."
          />

          <CardGrid.StackedCard
            maxWidth="third"
            title="See it on you first"
            description="Try 30+ styles on your actual face. Not a model. Not a cartoon. You."
            media={
              <CardGrid.StackedCard.Video
                src="/cutiq/app-demo.mp4"
                bezel="iPhone 17 Black"
                bezelCrop={{ edge: "bottom", croppedRatio: 0.35 }}
              />
            }
            textAlignment="leading"
          />

          <CardGrid.StackedCard
            maxWidth="twoThirds"
            title="Walk into the chair with confidence"
            description="Save the styles you like. Compare them. Show your barber exactly what you want instead of hoping they get it right."
            media={
              <CardGrid.StackedCard.Image
                src="/cutiq/style-side-part.jpg"
                alt="Side part hairstyle preview"
                bezel="iPhone 17 Black"
                bezelCrop={{ edge: "top", croppedRatio: 0.25 }}
              />
            }
            layoutDirection="reverse"
            textAlignment="leading"
          />
        </CardGrid>

        <CardGrid rowHeight={180}>
          <CardGrid.IconCard
            maxWidth="third"
            iconName="send"
            title="Like having a stylist on call"
            description="Ask the AI about products, your routine, or whether that fade is right for your face shape."
          />

          <CardGrid.IconCard
            maxWidth="third"
            iconName="lock"
            title="No sign-up. Just open it."
            description="Works with your iCloud. No email, no password, no friction."
          />

          <CardGrid.IconCard
            maxWidth="third"
            iconName="check_circle"
            title="Your photos stay yours"
            description="Nothing stored on our servers. Everything syncs through your personal iCloud."
          />
        </CardGrid>
      </Section>

      <Section paddingTop={40} paddingBottom={60}>
        <DownloadActionButton size="medium" label="Download on the App Store" />
      </Section>
    </>
  );
}
