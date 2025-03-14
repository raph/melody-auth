import {
  render, useMemo,
} from 'hono/jsx/dom'
import {
  useLocale, useInitialProps, useCurrentView,
  View,
} from 'pages/hooks'
import {
  SignIn,
  Layout,
  SignUp,
  Consent,
  MfaEnroll,
  OtpSetup,
  OtpMfa,
  SmsMfa,
  EmailMfa,
  PasskeyEnroll,
  ResetPassword,
  UpdateInfo,
  ChangePassword,
  ResetMfa,
  ManagePasskey,
  ChangeEmail,
  AuthCodeExpired,
  VerifyEmail,
  PasswordlessVerify,
} from 'pages/views'
import { getLocaleFromParams } from 'pages/tools/param'
import './client.css'

const App = () => {
  const { initialProps } = useInitialProps()

  const {
    locale, handleSwitchLocale,
  } = useLocale({ initialLocale: getLocaleFromParams() })

  const {
    view, handleSwitchView,
  } = useCurrentView()

  const CurrentView = useMemo(
    () => {
      switch (view) {
      case View.SignUp:
        return SignUp
      case View.Consent:
        return Consent
      case View.MfaEnroll:
        return MfaEnroll
      case View.OtpSetup:
        return OtpSetup
      case View.OtpMfa:
        return OtpMfa
      case View.SmsMfa:
        return SmsMfa
      case View.PasswordlessVerify:
        return PasswordlessVerify
      case View.EmailMfa:
        return EmailMfa
      case View.PasskeyEnroll:
        return PasskeyEnroll
      case View.ResetPassword:
        return ResetPassword
      case View.UpdateInfo:
        return UpdateInfo
      case View.ChangePassword:
        return ChangePassword
      case View.ResetMfa:
        return ResetMfa
      case View.ManagePasskey:
        return ManagePasskey
      case View.ChangeEmail:
        return ChangeEmail
      case View.AuthCodeExpired:
        return AuthCodeExpired
      case View.VerifyEmail:
        return VerifyEmail
      case View.SignIn:
      default:
        return SignIn
      }
    },
    [view],
  )

  return (
    <Layout
      locale={locale}
      locales={initialProps.enableLocaleSelector ? initialProps.locales : [locale]}
      logoUrl={initialProps.logoUrl}
      onSwitchLocale={handleSwitchLocale}
    >
      <CurrentView
        locale={locale}
        onSwitchView={handleSwitchView}
      />
    </Layout>
  )
}

const root = document.getElementById('root')!
render(
  <App />,
  root,
)
