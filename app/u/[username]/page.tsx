import type { Metadata } from "next";
import PermalinkClient from "./_permalink-client";

type Props = {
  params: Promise<{ username: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params;

  return {
    title: `${username}'s Gravity Lens`,
    description: `Visualize ${username}'s GitHub contributions with gravitational lensing effects.`,
    openGraph: {
      title: `${username}'s GitHub Contribution Gravity Lens`,
      description: `Visualize ${username}'s GitHub contributions with gravitational lensing effects.`,
    },
    alternates: {
      canonical: `/u/${username}`,
    },
  };
}

export default function PermalinkPage({ params }: Props) {
  return <PermalinkClient params={params} />;
}
