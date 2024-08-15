import {
  Context, Next,
} from 'hono'
import { env } from 'hono/adapter'
import {
  errorConfig, typeConfig,
} from 'configs'

export const enableSignUp = async (
  c: Context<typeConfig.Context>, next: Next,
) => {
  const { ENABLE_SIGN_UP: enableSignUp } = env(c)

  if (!enableSignUp) throw new errorConfig.Forbidden()

  await next()
}

export const enableConsent = async (
  c: Context<typeConfig.Context>, next: Next,
) => {
  const { ENABLE_USER_APP_CONSENT: enableConsent } = env(c)
  if (!enableConsent) throw new errorConfig.Forbidden()

  await next()
}

export const enablePasswordReset = async (
  c: Context<typeConfig.Context>, next: Next,
) => {
  const {
    ENABLE_PASSWORD_RESET: enabledReset,
    SENDGRID_API_KEY: sendgridApiKey,
    SENDGRID_SENDER_ADDRESS: sendgridSender,
  } = env(c)

  if (!enabledReset || !sendgridApiKey || !sendgridSender) throw new errorConfig.Forbidden()

  await next()
}

export const enableEmailVerification = async (
  c: Context<typeConfig.Context>, next: Next,
) => {
  const {
    ENABLE_EMAIL_VERIFICATION: enableEmailVerification,
    SENDGRID_API_KEY: sendgridApiKey,
    SENDGRID_SENDER_ADDRESS: sendgridSender,
  } = env(c)

  if (!enableEmailVerification || !sendgridApiKey || !sendgridSender) throw new errorConfig.Forbidden()

  await next()
}

export const enableEmail = async (
  c: Context<typeConfig.Context>, next: Next,
) => {
  const {
    SENDGRID_API_KEY: sendgridApiKey,
    SENDGRID_SENDER_ADDRESS: sendgridSender,
  } = env(c)

  if (!sendgridApiKey || !sendgridSender) throw new errorConfig.Forbidden()

  await next()
}

export const enableMfaEnroll = async (
  c: Context<typeConfig.Context>, next: Next,
) => {
  const {
    ENFORCE_ONE_MFA_ENROLLMENT: enforceMfa,
    EMAIL_MFA_IS_REQUIRED: requireEmailMfa,
    OTP_MFA_IS_REQUIRED: requireOtpMfa,
    SENDGRID_API_KEY: sendgridKey,
    SENDGRID_SENDER_ADDRESS: sendgridSender,
  } = env(c)

  if (!enforceMfa || requireEmailMfa || requireOtpMfa || !sendgridKey || !sendgridSender) {
    throw new errorConfig.Forbidden()
  }

  await next()
}
