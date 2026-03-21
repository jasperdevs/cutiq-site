import { CardGrid } from "@/components/card_grid/card_grid";
import { DownloadActionButton } from "@/components/download_action_button/download_action_button";
import { Hero } from "@/components/hero/hero";
import { Section } from "@/components/section/section";

export default function Page() {
  return (
    <>
      <Section paddingTop={80}>
        <Hero
          title="Your hair, analyzed."
          subtitle="AI-powered hair health scores, custom routines, and style previews on your face."
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
            title="Four photos. Real feedback."
            description="Get a health score, face shape, and what to do next."
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
            title="Weekly routine"
            description="Products, timing, and progress tracking."
          />

          <CardGrid.StackedCard
            maxWidth="third"
            title="Try any style"
            description="30+ looks on your actual face."
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
            title="Save and compare"
            description="Keep the looks you like. Show your barber."
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
            title="AI hair chat"
            description="Knows your score and routine."
          />

          <CardGrid.IconCard
            maxWidth="third"
            iconName="lock"
            title="No sign-up"
            description="Works with iCloud."
          />

          <CardGrid.IconCard
            maxWidth="third"
            iconName="check_circle"
            title="Private"
            description="Photos stay on your device."
          />
        </CardGrid>
      </Section>

      <Section paddingTop={40} paddingBottom={60}>
        <DownloadActionButton size="medium" label="Download on the App Store" />
      </Section>
    </>
  );
}
