import siteConfig from './siteConfig.json'

export type SiteConfig = typeof siteConfig

export const getSiteConfig = (): SiteConfig => {
  return siteConfig
}

export default siteConfig

