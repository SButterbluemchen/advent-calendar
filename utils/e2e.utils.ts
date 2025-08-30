export function getLocalePrefix(testInfo: any) {
  let localePrefix = ''
  if (testInfo.project.name === 'german')
    localePrefix = '/de'
  else if (testInfo.project.name === 'french')
    localePrefix = '/fr'

  return { localePrefix }
}
