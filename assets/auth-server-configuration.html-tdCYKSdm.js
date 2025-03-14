import{_ as i,e as l,f as s,o as a}from"./app-C-P2TIii.js";const n={};function o(t,e){return a(),l("div",null,e[0]||(e[0]=[s('<h1 id="auth-server-configuration" tabindex="-1"><a class="header-anchor" href="#auth-server-configuration"><span>Auth Server Configuration</span></a></h1><p>Melody Auth offers a range of customizable options to tailor the authentication server to your specific needs. You can modify these settings by adjusting the values in the <code>[vars]</code> section of the <code>server/wrangler.toml</code> file.</p><h2 id="applying-configuration-changes" tabindex="-1"><a class="header-anchor" href="#applying-configuration-changes"><span>Applying Configuration Changes:</span></a></h2><ol><li>Open <code>server/wrangler.toml</code> in your preferred text editor.</li><li>Locate the <code>[vars]</code> section.</li><li>Modify the values as needed.</li><li>Save the file.</li><li>Redeploy or restart your server</li></ol><h2 id="information-configs" tabindex="-1"><a class="header-anchor" href="#information-configs"><span>Information Configs</span></a></h2><h3 id="company-logo-url" tabindex="-1"><a class="header-anchor" href="#company-logo-url"><span>COMPANY_LOGO_URL</span></a></h3><ul><li><strong>Default:</strong> https://raw.githubusercontent.com/ValueMelody/melody-homepage/main/logo.jpg</li><li><strong>Description:</strong> URL of the logo displayed on authentication pages.</li></ul><h3 id="email-sender-name" tabindex="-1"><a class="header-anchor" href="#email-sender-name"><span>EMAIL_SENDER_NAME</span></a></h3><ul><li><strong>Default:</strong> &quot;Melody Auth&quot;</li><li><strong>Description:</strong> Display name in emails sent to users.</li></ul><h3 id="terms-link" tabindex="-1"><a class="header-anchor" href="#terms-link"><span>TERMS_LINK</span></a></h3><ul><li><strong>Default:</strong> &quot;&quot;</li><li><strong>Description:</strong> URL of your Terms of Service. If set, a link to these terms is shown on the sign-up page.</li></ul><h3 id="privacy-policy-link" tabindex="-1"><a class="header-anchor" href="#privacy-policy-link"><span>PRIVACY_POLICY_LINK</span></a></h3><ul><li><strong>Default:</strong> &quot;&quot;</li><li><strong>Description:</strong> URL of your Privacy Policy. If set, a link to this policy is shown on the sign-up page.</li></ul><h2 id="locale-configs" tabindex="-1"><a class="header-anchor" href="#locale-configs"><span>Locale Configs</span></a></h2><h3 id="supported-locales" tabindex="-1"><a class="header-anchor" href="#supported-locales"><span>SUPPORTED_LOCALES</span></a></h3><ul><li><strong>Default:</strong> [&#39;en&#39;, &#39;fr&#39;]</li><li><strong>Description:</strong> Available locales for identity pages and email templates.</li></ul><h3 id="enable-locale-selector" tabindex="-1"><a class="header-anchor" href="#enable-locale-selector"><span>ENABLE_LOCALE_SELECTOR</span></a></h3><ul><li><strong>Default:</strong> true</li><li><strong>Description:</strong> Determines whether users can switch locales on identity pages. If only one locale is in <code>SUPPORTED_LOCALES</code>, the selector is hidden.</li></ul><h2 id="suppression-configs" tabindex="-1"><a class="header-anchor" href="#suppression-configs"><span>Suppression Configs</span></a></h2><h3 id="enable-sign-up" tabindex="-1"><a class="header-anchor" href="#enable-sign-up"><span>ENABLE_SIGN_UP</span></a></h3><ul><li><strong>Default:</strong> true</li><li><strong>Description:</strong> Toggles whether new user sign-ups are allowed. If <code>false</code>, the sign-up button is hidden on the sign-in page.</li></ul><h3 id="enable-password-sign-in" tabindex="-1"><a class="header-anchor" href="#enable-password-sign-in"><span>ENABLE_PASSWORD_SIGN_IN</span></a></h3><ul><li><strong>Default:</strong> true</li><li><strong>Description:</strong> Enables password-based sign-in. To restrict sign-ins to social providers only, set both <code>ENABLE_SIGN_UP</code>, <code>ENABLE_PASSWORD_SIGN_IN</code>, and <code>ENABLE_PASSWORD_RESET</code> to false.</li></ul><h3 id="enable-passwordless-sign-in" tabindex="-1"><a class="header-anchor" href="#enable-passwordless-sign-in"><span>ENABLE_PASSWORDLESS_SIGN_IN</span></a></h3><ul><li><strong>Default:</strong> false</li><li><strong>Description:</strong> Enables passwordless sign-in. Setting this option to true will automatically override the following settings to false: ENABLE_SIGN_UP, ENABLE_PASSWORD_SIGN_IN, ENABLE_PASSWORD_RESET, ALLOW_PASSKEY_ENROLLMENT. Note that having both passwordless sign-in and Email MFA enabled at the same time may not be practical.</li></ul><h3 id="enable-password-reset" tabindex="-1"><a class="header-anchor" href="#enable-password-reset"><span>ENABLE_PASSWORD_RESET</span></a></h3><ul><li><strong>Default:</strong> true</li><li><strong>Description:</strong> Enables password reset functionality. If <code>false</code>, the &quot;Forgot Password&quot; option is hidden.</li><li>Requires <a href="https://auth.valuemelody.com/email-provider-setup.html" target="_blank" rel="noopener noreferrer">Email Provider Setup</a></li></ul><h3 id="enable-names" tabindex="-1"><a class="header-anchor" href="#enable-names"><span>ENABLE_NAMES</span></a></h3><ul><li><strong>Default:</strong> true</li><li><strong>Description:</strong> Shows first and last name fields during sign-up. If <code>false</code>, name fields are hidden.</li></ul><h3 id="names-is-required" tabindex="-1"><a class="header-anchor" href="#names-is-required"><span>NAMES_IS_REQUIRED</span></a></h3><ul><li><strong>Default:</strong> false</li><li><strong>Description:</strong> Makes first and last name fields mandatory if <code>ENABLE_NAMES</code> is <code>true</code>.</li></ul><h3 id="enable-user-app-consent" tabindex="-1"><a class="header-anchor" href="#enable-user-app-consent"><span>ENABLE_USER_APP_CONSENT</span></a></h3><ul><li><strong>Default:</strong> true</li><li><strong>Description:</strong> Prompts users to grant permission to each app after authentication.</li></ul><h3 id="enable-email-verification" tabindex="-1"><a class="header-anchor" href="#enable-email-verification"><span>ENABLE_EMAIL_VERIFICATION</span></a></h3><ul><li><strong>Default:</strong> true</li><li><strong>Description:</strong> Prompts users to grant permission to each app after authentication.</li><li>Requires <a href="https://auth.valuemelody.com/email-provider-setup.html" target="_blank" rel="noopener noreferrer">Email Provider Setup</a></li></ul><h3 id="enable-org" tabindex="-1"><a class="header-anchor" href="#enable-org"><span>ENABLE_ORG</span></a></h3><ul><li><strong>Default:</strong> false</li><li><strong>Description:</strong> Toggles the organization feature. If <code>true</code>, users can create and manage organizations via the S2S API and admin panel.</li></ul><h3 id="blocked-policies" tabindex="-1"><a class="header-anchor" href="#blocked-policies"><span>BLOCKED_POLICIES</span></a></h3><ul><li><strong>Default:</strong> []</li><li><strong>Description:</strong> A list of policy names that should be blocked (change_password, change_email, reset_mfa, manage_passkey, update_info), preventing end users from triggering them</li></ul><h2 id="auth-configs" tabindex="-1"><a class="header-anchor" href="#auth-configs"><span>Auth Configs</span></a></h2><h3 id="authorization-code-expires-in" tabindex="-1"><a class="header-anchor" href="#authorization-code-expires-in"><span>AUTHORIZATION_CODE_EXPIRES_IN</span></a></h3><ul><li><strong>Default:</strong> 300 (5 minutes)</li><li><strong>Description:</strong> Duration (in seconds) for which authorization codes remain valid.</li></ul><h3 id="spa-access-token-expires-in" tabindex="-1"><a class="header-anchor" href="#spa-access-token-expires-in"><span>SPA_ACCESS_TOKEN_EXPIRES_IN</span></a></h3><ul><li><strong>Default:</strong> 1800 (30 minutes)</li><li><strong>Description:</strong> Lifespan of access tokens issued to single-page applications (SPAs).</li></ul><h3 id="spa-refresh-token-expires-in" tabindex="-1"><a class="header-anchor" href="#spa-refresh-token-expires-in"><span>SPA_REFRESH_TOKEN_EXPIRES_IN</span></a></h3><ul><li><strong>Default:</strong> 604800 (7 days)</li><li><strong>Description:</strong> Lifespan of refresh tokens issued to SPAs</li></ul><h3 id="s2s-access-token-expires-in" tabindex="-1"><a class="header-anchor" href="#s2s-access-token-expires-in"><span>S2S_ACCESS_TOKEN_EXPIRES_IN</span></a></h3><ul><li><strong>Default:</strong> 3600 (1 hour)</li><li><strong>Description:</strong> Lifespan of access tokens issued to server-to-server (S2S) applications.</li></ul><h3 id="id-token-expires-in" tabindex="-1"><a class="header-anchor" href="#id-token-expires-in"><span>ID_TOKEN_EXPIRES_IN</span></a></h3><ul><li><strong>Default:</strong> 1800 (30 minutes)</li><li><strong>Description:</strong> Lifespan of ID tokens.</li></ul><h3 id="server-session-expires-in" tabindex="-1"><a class="header-anchor" href="#server-session-expires-in"><span>SERVER_SESSION_EXPIRES_IN</span></a></h3><ul><li><strong>Default:</strong> 1800 (30 minutes)</li><li><strong>Description:</strong> Server session expiration time. If 0, server sessions are disabled.</li></ul><h2 id="mfa-configs" tabindex="-1"><a class="header-anchor" href="#mfa-configs"><span>MFA Configs</span></a></h2><h3 id="otp-mfa-is-required" tabindex="-1"><a class="header-anchor" href="#otp-mfa-is-required"><span>OTP_MFA_IS_REQUIRED</span></a></h3><ul><li><strong>Default:</strong> false</li><li><strong>Description:</strong> Forces users to set up TOTP-based MFA (e.g., Google Authenticator) during sign-in if <code>true</code>.</li></ul><h3 id="sms-mfa-is-required" tabindex="-1"><a class="header-anchor" href="#sms-mfa-is-required"><span>SMS_MFA_IS_REQUIRED</span></a></h3><ul><li><strong>Default:</strong> false</li><li><strong>Description:</strong> Enables SMS-based MFA. If <code>true</code>, users must confirm logins via an SMS code.</li><li>Requires <a href="https://auth.valuemelody.com/sms-provider-setup.html" target="_blank" rel="noopener noreferrer">SMS Provider Setup</a></li></ul><h3 id="sms-mfa-country-code" tabindex="-1"><a class="header-anchor" href="#sms-mfa-country-code"><span>SMS_MFA_COUNTRY_CODE</span></a></h3><ul><li><strong>Default:</strong> &quot;+1&quot;</li><li><strong>Description:</strong> Prefix of the phone number to be used for SMS MFA. For example, if you are based in the United States, you should set this to &quot;+1&quot;.</li></ul><h3 id="email-mfa-is-required" tabindex="-1"><a class="header-anchor" href="#email-mfa-is-required"><span>EMAIL_MFA_IS_REQUIRED</span></a></h3><ul><li><strong>Default:</strong> false</li><li><strong>Description:</strong> Enables email-based MFA. If <code>true</code>, users must confirm logins via an email code.</li><li>Requires <a href="https://auth.valuemelody.com/email-provider-setup.html" target="_blank" rel="noopener noreferrer">Email Provider Setup</a></li></ul><h3 id="enforce-one-mfa-enrollment" tabindex="-1"><a class="header-anchor" href="#enforce-one-mfa-enrollment"><span>ENFORCE_ONE_MFA_ENROLLMENT</span></a></h3><ul><li><strong>Default:</strong> [&#39;otp&#39;, &#39;email&#39;]</li><li><strong>Description:</strong> Forces enrollment in at least one MFA type from the list: [&#39;otp&#39;, &#39;sms&#39;, &#39;email&#39;]. Only applies if all *_MFA_IS_REQUIRED settings are false. If empty, no MFA is enforced.</li><li>Requires <a href="https://auth.valuemelody.com/email-provider-setup.html" target="_blank" rel="noopener noreferrer">Email Provider Setup</a> if &#39;email&#39; is in the list</li><li>Requires <a href="https://auth.valuemelody.com/sms-provider-setup.html" target="_blank" rel="noopener noreferrer">SMS Provider Setup</a> if &#39;sms&#39; is in the list</li></ul><h3 id="allow-email-mfa-as-backup" tabindex="-1"><a class="header-anchor" href="#allow-email-mfa-as-backup"><span>ALLOW_EMAIL_MFA_AS_BACKUP</span></a></h3><ul><li><strong>Default:</strong> true</li><li><strong>Description:</strong> Allows email-based MFA as a fallback if a user is enrolled in OTP or SMS but not in email MFA.</li><li>Requires <a href="https://auth.valuemelody.com/email-provider-setup.html" target="_blank" rel="noopener noreferrer">Email Provider Setup</a></li></ul><h3 id="allow-passkey-enrollment" tabindex="-1"><a class="header-anchor" href="#allow-passkey-enrollment"><span>ALLOW_PASSKEY_ENROLLMENT</span></a></h3><ul><li><strong>Default:</strong> false</li><li><strong>Description:</strong> Enables passkey enrollment. If <code>true</code>, users can enroll in passkeys during sign-up. By enroll a passkey, a user can bypass password and multi-factor authentication during sign-in.</li></ul><h2 id="brute-force-configs" tabindex="-1"><a class="header-anchor" href="#brute-force-configs"><span>Brute-force Configs</span></a></h2><h3 id="account-lockout-expires-in" tabindex="-1"><a class="header-anchor" href="#account-lockout-expires-in"><span>ACCOUNT_LOCKOUT_EXPIRES_IN</span></a></h3><ul><li><strong>Default:</strong> 86400 (1 day)</li><li><strong>Description:</strong> Duration (in seconds) of an account lockout after too many failed login attempts. If 0, the account remains locked until manual reset.</li></ul><h3 id="unlock-account-via-password-reset" tabindex="-1"><a class="header-anchor" href="#unlock-account-via-password-reset"><span>UNLOCK_ACCOUNT_VIA_PASSWORD_RESET</span></a></h3><ul><li><strong>Default:</strong> true</li><li><strong>Description:</strong> Allows users to unlock their account by resetting their password.</li></ul><h3 id="password-reset-email-threshold" tabindex="-1"><a class="header-anchor" href="#password-reset-email-threshold"><span>PASSWORD_RESET_EMAIL_THRESHOLD</span></a></h3><ul><li><strong>Default:</strong> 5</li><li><strong>Description:</strong> Maximum password reset email requests per email/IP per day. 0 means no limit.</li></ul><h3 id="email-mfa-email-threshold" tabindex="-1"><a class="header-anchor" href="#email-mfa-email-threshold"><span>EMAIL_MFA_EMAIL_THRESHOLD</span></a></h3><ul><li><strong>Default:</strong> 10</li><li><strong>Description:</strong> Maximum email MFA requests per account/IP in a 30-minute window. 0 means no limit.</li></ul><h3 id="change-email-email-threshold" tabindex="-1"><a class="header-anchor" href="#change-email-email-threshold"><span>CHANGE_EMAIL_EMAIL_THRESHOLD</span></a></h3><ul><li><strong>Default:</strong> 5</li><li><strong>Description:</strong> Maximum change-email requests per account in a 30-minute window. 0 means no limit.</li></ul><h3 id="sms-mfa-message-threshold" tabindex="-1"><a class="header-anchor" href="#sms-mfa-message-threshold"><span>SMS_MFA_MESSAGE_THRESHOLD</span></a></h3><ul><li><strong>Default:</strong> 5</li><li><strong>Description:</strong> Maximum SMS MFA requests per account/IP in a 30-minute window. 0 means no limit.</li></ul><h3 id="account-lockout-threshold" tabindex="-1"><a class="header-anchor" href="#account-lockout-threshold"><span>ACCOUNT_LOCKOUT_THRESHOLD</span></a></h3><ul><li><strong>Default:</strong> 5</li><li><strong>Description:</strong> Number of failed login attempts before lockout. 0 means no lockout.</li></ul><h2 id="social-sign-in-configs" tabindex="-1"><a class="header-anchor" href="#social-sign-in-configs"><span>Social Sign-in Configs</span></a></h2><h3 id="google-auth-client-id" tabindex="-1"><a class="header-anchor" href="#google-auth-client-id"><span>GOOGLE_AUTH_CLIENT_ID</span></a></h3><ul><li><strong>Default:</strong> &quot;&quot;</li><li><strong>Description:</strong> Google Client ID (from Google Developer Console). If empty, Google Sign-In is hidden.</li></ul><h3 id="facebook-auth-client-id" tabindex="-1"><a class="header-anchor" href="#facebook-auth-client-id"><span>FACEBOOK_AUTH_CLIENT_ID</span></a></h3><ul><li><strong>Default:</strong> &quot;&quot;</li><li><strong>Description:</strong> Facebook Client ID (from Facebook Developer Console). If empty, Facebook Sign-In is hidden.</li><li>Note: Also need to set <code>FACEBOOK_AUTH_CLIENT_SECRET</code> in your .dev.vars or in Cloudflare Worker environment variables.</li></ul><h3 id="github-auth-client-id-github-auth-app-name" tabindex="-1"><a class="header-anchor" href="#github-auth-client-id-github-auth-app-name"><span>GITHUB_AUTH_CLIENT_ID &amp; GITHUB_AUTH_APP_NAME</span></a></h3><ul><li><strong>Default:</strong> &quot;&quot;</li><li><strong>Description:</strong> GitHub Client ID and App Name (from GitHub Developer Console). If empty, GitHub Sign-In is hidden. <b>In your GitHub App settings, set the callback URL to [your auth server doamin]/identity/v1/authorize-github, e.g., http://localhost:8787/identity/v1/authorize-github</b></li><li>Note: Also need to set <code>GITHUB_AUTH_CLIENT_SECRET</code> in your .dev.vars or in Cloudflare Worker environment variables.</li></ul><h3 id="log-configs" tabindex="-1"><a class="header-anchor" href="#log-configs"><span>Log Configs</span></a></h3><h3 id="enable-email-log" tabindex="-1"><a class="header-anchor" href="#enable-email-log"><span>ENABLE_EMAIL_LOG</span></a></h3><ul><li><strong>Default:</strong> false</li><li><strong>Description:</strong> Logs outgoing emails if <code>true</code>. Ensure you have a cleanup or retention policy before enabling this.</li></ul><h3 id="enable-sms-log" tabindex="-1"><a class="header-anchor" href="#enable-sms-log"><span>ENABLE_SMS_LOG</span></a></h3><ul><li><strong>Default:</strong> false</li><li><strong>Description:</strong> Logs SMS messages if true. Ensure you have a cleanup or retention policy before enabling this.</li></ul><h3 id="enable-sign-in-log" tabindex="-1"><a class="header-anchor" href="#enable-sign-in-log"><span>ENABLE_SIGN_IN_LOG</span></a></h3><ul><li><strong>Default:</strong> false</li><li><strong>Description:</strong> Logs user sign-in IP (production only) and geolocation data (Cloudflare only). If enabled, you must: <ul><li>Implement a cleanup scheduler.</li><li>Disclose data collection in your Privacy Policy.</li><li>Comply with applicable privacy and data regulations.</li></ul></li></ul>',96)]))}const c=i(n,[["render",o],["__file","auth-server-configuration.html.vue"]]),h=JSON.parse('{"path":"/auth-server-configuration.html","title":"Auth Server Configuration","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Applying Configuration Changes:","slug":"applying-configuration-changes","link":"#applying-configuration-changes","children":[]},{"level":2,"title":"Information Configs","slug":"information-configs","link":"#information-configs","children":[{"level":3,"title":"COMPANY_LOGO_URL","slug":"company-logo-url","link":"#company-logo-url","children":[]},{"level":3,"title":"EMAIL_SENDER_NAME","slug":"email-sender-name","link":"#email-sender-name","children":[]},{"level":3,"title":"TERMS_LINK","slug":"terms-link","link":"#terms-link","children":[]},{"level":3,"title":"PRIVACY_POLICY_LINK","slug":"privacy-policy-link","link":"#privacy-policy-link","children":[]}]},{"level":2,"title":"Locale Configs","slug":"locale-configs","link":"#locale-configs","children":[{"level":3,"title":"SUPPORTED_LOCALES","slug":"supported-locales","link":"#supported-locales","children":[]},{"level":3,"title":"ENABLE_LOCALE_SELECTOR","slug":"enable-locale-selector","link":"#enable-locale-selector","children":[]}]},{"level":2,"title":"Suppression Configs","slug":"suppression-configs","link":"#suppression-configs","children":[{"level":3,"title":"ENABLE_SIGN_UP","slug":"enable-sign-up","link":"#enable-sign-up","children":[]},{"level":3,"title":"ENABLE_PASSWORD_SIGN_IN","slug":"enable-password-sign-in","link":"#enable-password-sign-in","children":[]},{"level":3,"title":"ENABLE_PASSWORDLESS_SIGN_IN","slug":"enable-passwordless-sign-in","link":"#enable-passwordless-sign-in","children":[]},{"level":3,"title":"ENABLE_PASSWORD_RESET","slug":"enable-password-reset","link":"#enable-password-reset","children":[]},{"level":3,"title":"ENABLE_NAMES","slug":"enable-names","link":"#enable-names","children":[]},{"level":3,"title":"NAMES_IS_REQUIRED","slug":"names-is-required","link":"#names-is-required","children":[]},{"level":3,"title":"ENABLE_USER_APP_CONSENT","slug":"enable-user-app-consent","link":"#enable-user-app-consent","children":[]},{"level":3,"title":"ENABLE_EMAIL_VERIFICATION","slug":"enable-email-verification","link":"#enable-email-verification","children":[]},{"level":3,"title":"ENABLE_ORG","slug":"enable-org","link":"#enable-org","children":[]},{"level":3,"title":"BLOCKED_POLICIES","slug":"blocked-policies","link":"#blocked-policies","children":[]}]},{"level":2,"title":"Auth Configs","slug":"auth-configs","link":"#auth-configs","children":[{"level":3,"title":"AUTHORIZATION_CODE_EXPIRES_IN","slug":"authorization-code-expires-in","link":"#authorization-code-expires-in","children":[]},{"level":3,"title":"SPA_ACCESS_TOKEN_EXPIRES_IN","slug":"spa-access-token-expires-in","link":"#spa-access-token-expires-in","children":[]},{"level":3,"title":"SPA_REFRESH_TOKEN_EXPIRES_IN","slug":"spa-refresh-token-expires-in","link":"#spa-refresh-token-expires-in","children":[]},{"level":3,"title":"S2S_ACCESS_TOKEN_EXPIRES_IN","slug":"s2s-access-token-expires-in","link":"#s2s-access-token-expires-in","children":[]},{"level":3,"title":"ID_TOKEN_EXPIRES_IN","slug":"id-token-expires-in","link":"#id-token-expires-in","children":[]},{"level":3,"title":"SERVER_SESSION_EXPIRES_IN","slug":"server-session-expires-in","link":"#server-session-expires-in","children":[]}]},{"level":2,"title":"MFA Configs","slug":"mfa-configs","link":"#mfa-configs","children":[{"level":3,"title":"OTP_MFA_IS_REQUIRED","slug":"otp-mfa-is-required","link":"#otp-mfa-is-required","children":[]},{"level":3,"title":"SMS_MFA_IS_REQUIRED","slug":"sms-mfa-is-required","link":"#sms-mfa-is-required","children":[]},{"level":3,"title":"SMS_MFA_COUNTRY_CODE","slug":"sms-mfa-country-code","link":"#sms-mfa-country-code","children":[]},{"level":3,"title":"EMAIL_MFA_IS_REQUIRED","slug":"email-mfa-is-required","link":"#email-mfa-is-required","children":[]},{"level":3,"title":"ENFORCE_ONE_MFA_ENROLLMENT","slug":"enforce-one-mfa-enrollment","link":"#enforce-one-mfa-enrollment","children":[]},{"level":3,"title":"ALLOW_EMAIL_MFA_AS_BACKUP","slug":"allow-email-mfa-as-backup","link":"#allow-email-mfa-as-backup","children":[]},{"level":3,"title":"ALLOW_PASSKEY_ENROLLMENT","slug":"allow-passkey-enrollment","link":"#allow-passkey-enrollment","children":[]}]},{"level":2,"title":"Brute-force Configs","slug":"brute-force-configs","link":"#brute-force-configs","children":[{"level":3,"title":"ACCOUNT_LOCKOUT_EXPIRES_IN","slug":"account-lockout-expires-in","link":"#account-lockout-expires-in","children":[]},{"level":3,"title":"UNLOCK_ACCOUNT_VIA_PASSWORD_RESET","slug":"unlock-account-via-password-reset","link":"#unlock-account-via-password-reset","children":[]},{"level":3,"title":"PASSWORD_RESET_EMAIL_THRESHOLD","slug":"password-reset-email-threshold","link":"#password-reset-email-threshold","children":[]},{"level":3,"title":"EMAIL_MFA_EMAIL_THRESHOLD","slug":"email-mfa-email-threshold","link":"#email-mfa-email-threshold","children":[]},{"level":3,"title":"CHANGE_EMAIL_EMAIL_THRESHOLD","slug":"change-email-email-threshold","link":"#change-email-email-threshold","children":[]},{"level":3,"title":"SMS_MFA_MESSAGE_THRESHOLD","slug":"sms-mfa-message-threshold","link":"#sms-mfa-message-threshold","children":[]},{"level":3,"title":"ACCOUNT_LOCKOUT_THRESHOLD","slug":"account-lockout-threshold","link":"#account-lockout-threshold","children":[]}]},{"level":2,"title":"Social Sign-in Configs","slug":"social-sign-in-configs","link":"#social-sign-in-configs","children":[{"level":3,"title":"GOOGLE_AUTH_CLIENT_ID","slug":"google-auth-client-id","link":"#google-auth-client-id","children":[]},{"level":3,"title":"FACEBOOK_AUTH_CLIENT_ID","slug":"facebook-auth-client-id","link":"#facebook-auth-client-id","children":[]},{"level":3,"title":"GITHUB_AUTH_CLIENT_ID & GITHUB_AUTH_APP_NAME","slug":"github-auth-client-id-github-auth-app-name","link":"#github-auth-client-id-github-auth-app-name","children":[]},{"level":3,"title":"Log Configs","slug":"log-configs","link":"#log-configs","children":[]},{"level":3,"title":"ENABLE_EMAIL_LOG","slug":"enable-email-log","link":"#enable-email-log","children":[]},{"level":3,"title":"ENABLE_SMS_LOG","slug":"enable-sms-log","link":"#enable-sms-log","children":[]},{"level":3,"title":"ENABLE_SIGN_IN_LOG","slug":"enable-sign-in-log","link":"#enable-sign-in-log","children":[]}]}],"git":{"updatedTime":1741987618000,"contributors":[{"name":"Baozier","username":"Baozier","email":"byn9826@gmail.com","commits":5,"url":"https://github.com/Baozier"}],"changelog":[{"hash":"9ae2e288595b134b41dc068780299207b02cd571","date":1741987618000,"email":"byn9826@gmail.com","author":"Baozier","message":"Support passwordless sign-in (#264)"},{"hash":"6964194be37bcda1dcda6673c9b0a1520ccba610","date":1741149223000,"email":"byn9826@gmail.com","author":"Baozier","message":"Major refactor of identity service &amp; tests, make jsx/dom as identity view renderer (#254)","tag":"v1.2.0"},{"hash":"5e69f703b8bd08786361d2c65dd37e181bbb224f","date":1740188665000,"email":"byn9826@gmail.com","author":"Baozier","message":"Improve SMS MFA usability by SMS_MFA_COUNTRY_CODE config (#242)"},{"hash":"4e3e5fcfda7b5db6d88beb2d16a5cd72359856ac","date":1739495631000,"email":"byn9826@gmail.com","author":"Baozier","message":"Allow block policy access in config (#226)"},{"hash":"dab232c28ad153e90129d65b72ad543d428b9685","date":1739055609000,"email":"byn9826@gmail.com","author":"Baozier","message":"Update docs structure (#223)","tag":"v1.1.6"}]},"filePathRelative":"auth-server-configuration.md"}');export{c as comp,h as data};
