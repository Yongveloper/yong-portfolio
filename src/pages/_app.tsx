import "@/styles/globals.css";
import { Noto_Sans_KR } from "@next/font/google";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

const DEFAULT_SEO = {
  title: "용현준 | 프론트엔드 개발자",
  description: "안녕하세요, 프론트엔드 개발자 용현준입니다.",
  canonical: "https://yong-portfolio.vercel.app/",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://yong-portfolio.vercel.app/",
    title: "용현준 | 프론트엔드 개발자",
    site_name: "용현준 | 프론트엔드 개발자",
    images: [
      {
        url: "/share.png",
        width: 285,
        height: 167,
        alt: "용현준 | 프론트엔드 개발자",
      },
    ],
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
  additionalMetaTags: [
    {
      name: "application-name",
      content: "용현준 | 프론트엔드 개발자",
    },
    {
      name: "msapplication-tooltip",
      content: "용현준 | 프론트엔드 개발자",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
};

export const notoSansKr = Noto_Sans_KR({
  weight: ["400", "500", "700"],
  display: "swap",
  fallback: [
    "-apple-system",
    "Malgun Gothic",
    "Apple SD Gothic Neo",
    "Roboto",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "sans-serif",
  ],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <ThemeProvider attribute="class">
        <main className={notoSansKr.className}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
};

export default App;
