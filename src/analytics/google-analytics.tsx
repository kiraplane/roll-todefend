import Script from 'next/script';

export default function GoogleAnalytics() {
  const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

  if (process.env.NODE_ENV !== 'production' || !googleAnalyticsId) {
    return null;
  }

  return (
    <>
      <Script
        id="google-tag-js"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
        strategy="beforeInteractive"
      />
      <Script
        id="google-tag-init"
        strategy="beforeInteractive"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Google Analytics requires an inline bootstrap snippet.
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${googleAnalyticsId}');
          `.trim(),
        }}
      />
    </>
  );
}
