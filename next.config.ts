import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const NextConfig: NextConfig = {
  /* config options here */
}

const withNextIntl = createNextIntlPlugin()

export default withNextIntl(NextConfig)
