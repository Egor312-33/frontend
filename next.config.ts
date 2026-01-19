import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/libs/i18n/request.ts')

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    SERVER_URL: process.env.SERVER_URL,
    GOOGLE_RECAPTCHA_SITE_KEY: process.env.GOOGLE_RECAPTCHA_SITE_KEY
  },
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.yandex.net'
      },
      {
        protocol: 'https',
        hostname: 'e0172c01-f6f7-4fe9-adec-85b5e0c54266.selstorage.ru',
        port: '',
        pathname: '/**',
      },
    ]
  },
};

export default withNextIntl(nextConfig);