import { TopicPage } from '@/components/rolltodefend/topic-page';
import { getTopicPage } from '@/data/rolltodefend/topics';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const topic = getTopicPage('units');

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: topic.seoTitle,
    description: topic.seoDescription,
    locale,
    pathname: topic.route,
    image: '/rolltodefend/og-image.jpg',
  });
}

export default function UnitsPage() {
  return <TopicPage topic={topic} />;
}
