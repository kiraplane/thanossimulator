import Script from 'next/script';

const GOOGLE_ANALYTICS_ID = 'G-8E4BE4PKEN';

export default function GoogleAnalytics() {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <>
      <Script
        id="google-tag-js"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
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
gtag('config', '${GOOGLE_ANALYTICS_ID}');
          `.trim(),
        }}
      />
    </>
  );
}
