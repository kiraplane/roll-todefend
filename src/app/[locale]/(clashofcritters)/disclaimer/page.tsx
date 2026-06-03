import Container from '@/components/layout/container';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Disclaimer | Duck Survival Wiki',
    description:
      'Disclaimer for the independent Duck Survival Wiki, guide content, local guide covers, and source attribution.',
    locale,
    pathname: '/disclaimer',
  });
}

export default function DisclaimerPage() {
  return (
    <div className="bg-[#FFF4DC] py-12 text-[#1F241D]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Disclaimer</h1>
        <p className="leading-8 text-[#4E4A38]">
          Duck Survival Wiki is an independent fan guide. It is not an official
          Joy Nice Games website and is not endorsed by the game publisher or
          developer.
        </p>
        <p className="leading-8 text-[#4E4A38]">
          Game names, gameplay systems, and official store details belong to
          their respective rights holders. Local guide covers are saved from the
          referenced YouTube video thumbnails where a guide embeds that video.
          Navigation artwork is used only for site readability.
        </p>
        <p className="leading-8 text-[#4E4A38]">
          This site does not provide modified APK files, cheats, unlimited
          currency tools, or instructions for bypassing the official app
          distribution path.
        </p>
      </Container>
    </div>
  );
}
