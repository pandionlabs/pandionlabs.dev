import Cal, { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'
export default function MyApp() {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi({ namespace: 'consultation' })
      cal('ui', {
        theme: 'light',
        cssVarsPerTheme: { light: { 'cal-brand': '#009b64' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
  }, [])
  return (
    <Cal
      namespace="consultation"
      calLink="pandionlabs/consultation"
      style={{ width: '100%', height: '100%', overflow: 'scroll' }}
      config={{ layout: 'month_view', theme: 'light' }}
    />
  )
}
