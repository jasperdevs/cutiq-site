import { CardGrid } from "@/components/card_grid/card_grid";
import { DownloadActionButton } from "@/components/download_action_button/download_action_button";
import { Hero } from "@/components/hero/hero";
import { RatingLaurelsBadge } from "@/components/rating_laurels_badge/rating_laurels_badge";
import { Section } from "@/components/section/section";

export default function Page() {
  return (
    <>
      <Section paddingTop={100}>
        <Hero
          title="A sharper haircut plan, backed by your own progress"
          subtitle="CutIQ combines AI hair analysis, realistic style previews, and an evolving routine so you can understand what suits you and stay consistent between cuts."
          media={
            <Hero.Video
              src="/cutiq/hero-demo.mp4"
              bezel="iPhone 17 Black"
              alt="CutIQ demo showing hair analysis and style previews"
            />
          }
          badges={
            <>
              <RatingLaurelsBadge
                showStars={false}
                rating={3}
                caption="camera, analysis, routine"
              />
              <RatingLaurelsBadge
                showStars={false}
                rating={11}
                caption="guided onboarding steps"
              />
            </>
          }
          action={<DownloadActionButton size="medium" />}
        />
      </Section>

      <Section navigationAnchor="features">
        <CardGrid rowHeight={440}>
          <CardGrid.StackedCard
            maxWidth="twoThirds"
            title="Understand your hair before you change it"
            description="Capture guided angles, get an AI hair assessment, and see a clear score, face shape read, and practical next steps in one place."
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
            title="Routines with direction"
            description="Turn analysis into a lightweight routine with reminders, streaks, and weekly check-ins that keep momentum visible."
          />

          <CardGrid.StackedCard
            maxWidth="full"
            title="Preview styles on your own photo"
            description="Try curated looks or a custom prompt, keep the results you like, and compare options before you commit at the barber or salon."
            media={
              <CardGrid.StackedCard.Image
                src="/cutiq/style-man-bun.jpg"
                alt="CutIQ generated hairstyle preview"
                bezel="iPhone 17 Black"
                bezelCrop={{ edge: "bottom", croppedRatio: 0.18 }}
              />
            }
            layoutDirection="reverse"
            textAlignment="leading"
          />

          <CardGrid.IconCard
            maxWidth="third"
            iconName="check_circle"
            title="Private by design"
            description="CutIQ uses CloudKit for personal app state, App Attest for request integrity, and Apple subscriptions for premium access."
          />

          <CardGrid.IconCard
            maxWidth="third"
            iconName="lock"
            title="Built for focused use"
            description="No noisy dashboard, no complicated setup. Open the camera, get feedback, save looks, and move on with a better plan."
          />

          <CardGrid.IconCard
            maxWidth="third"
            iconName="star"
            title="Support that reaches a real person"
            description="Need help with privacy, subscriptions, or your account? Reach CutIQ directly at support@cutiq.app."
          />
        </CardGrid>
      </Section>

      <Section paddingTop={60} paddingBottom={160}>
        <DownloadActionButton size="medium" />
      </Section>
    </>
  );
}
