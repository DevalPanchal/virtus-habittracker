import type { ReactNode } from 'react'
import LegalLayout from '../components/LegalLayout'
import { CONTACT_EMAIL } from '../data/site'

const TOC = [
  { id: 'p1', label: 'The short version' },
  { id: 'p2', label: 'What we collect' },
  { id: 'p3', label: 'Where your data lives' },
  { id: 'p4', label: 'No account, no tracking' },
  { id: 'p5', label: 'Third-party services' },
  { id: 'p6', label: 'Device permissions' },
  { id: 'p7', label: 'Export & deletion' },
  { id: 'p8', label: "Children's privacy" },
  { id: 'p9', label: 'Changes to this policy' },
  { id: 'p10', label: 'Contact us' },
]

function Sec({ n, id, title, children }: { n: string; id: string; title: string; children: ReactNode }) {
  return (
    <section className="legal-sec" id={id}>
      <h2><span className="n">{n}</span> {title}</h2>
      {children}
    </section>
  )
}

/** Privacy policy — rewritten to Virtus's true local-first model. */
export default function Privacy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      intro={`Virtus ("we," "us," or "our") built this app to help you build better habits — not to harvest your data. Virtus is local-first: your habits, notes, and progress live on your device, not on our servers.`}
      note="In plain terms: there is no account, no login, no cloud server, and no tracking. Your habit data never leaves your phone unless you choose to export it yourself."
      toc={TOC}
      crossLink={{ to: '/terms', label: 'Terms & Conditions' }}
    >
      <Sec n="01" id="p1" title="The short version">
        <p>
          Virtus has no backend. We do not run a server that stores your habit data, we do not
          require an account, and we do not collect analytics or tracking data about how you use
          the app. The only information that ever leaves your device is the anonymous purchase
          information needed to verify a Virtus Premium subscription (see Third-party services).
        </p>
      </Sec>

      <Sec n="02" id="p2" title="What we collect">
        <p>
          Everything you create in Virtus is entered by you and stored only on your device:
        </p>
        <ul>
          <li><strong>Your display name</strong> — entered during onboarding, kept on your device.</li>
          <li><strong>Habit data</strong> — the habits you create, their icons, colors, attributes, schedules, completions, streaks, quests, expeditions, and identity statements.</li>
          <li><strong>Notes &amp; journal reflections</strong> — anything you write inside the app.</li>
          <li><strong>Progress</strong> — your XP, levels, stats, and achievements.</li>
        </ul>
        <p>
          We do not collect your email, contacts, location, or advertising identifiers, and we do
          not build a profile of you.
        </p>
      </Sec>

      <Sec n="03" id="p3" title="Where your data lives">
        <p>
          All of the above is stored locally in an on-device database
          (<code>habit-streaks.db</code>). It is not uploaded to us or to any cloud service. Your
          user identifier is generated locally on your device — it is not tied to a Virtus account
          because there are no accounts.
        </p>
      </Sec>

      <Sec n="04" id="p4" title="No account, no tracking">
        <p>
          Virtus has no sign-up, no login, and no social network. We do not use third-party
          analytics SDKs or advertising trackers, and we do not sell or share your personal
          information — because we never receive it in the first place.
        </p>
      </Sec>

      <Sec n="05" id="p5" title="Third-party services">
        <p>A small number of services are involved only to deliver subscriptions and reminders:</p>
        <ul>
          <li>
            <strong>RevenueCat</strong> — manages Virtus Premium entitlement status. It receives an
            anonymous, app-generated user ID and the purchase transaction details from Apple or
            Google needed to confirm whether your subscription is active. It does not receive your
            habit data. See RevenueCat's privacy policy for details.
          </li>
          <li>
            <strong>Apple App Store &amp; Google Play Billing</strong> — process all payments. We
            never see or store your card or payment details.
          </li>
          <li>
            <strong>Notifications</strong> — habit reminders, streak-at-risk alerts, and quest
            reminders are scheduled locally on your device. We do not send remote push notifications
            and do not operate a notification server.
          </li>
        </ul>
      </Sec>

      <Sec n="06" id="p6" title="Device permissions">
        <ul>
          <li><strong>Notifications</strong> — used for habit, streak, and quest reminders. You control these in settings.</li>
          <li><strong>File sharing</strong> — used only when you choose to export your data to a CSV file.</li>
        </ul>
      </Sec>

      <Sec n="07" id="p7" title="Export & deletion">
        <p>
          You can export your own data to CSV at any time (a Premium feature) and share that file
          wherever you like. Because all data is stored locally, deleting the Virtus app removes
          all of your data from your device. There is no server-side copy for us to delete on your
          behalf.
        </p>
      </Sec>

      <Sec n="08" id="p8" title="Children's privacy">
        <p>
          Virtus is not directed to children under 9 (or the minimum age required in your
          jurisdiction). We do not knowingly collect personal information from children — and
          because data stays on the device, we do not collect it from anyone.
        </p>
      </Sec>

      <Sec n="09" id="p9" title="Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. When we make material changes, we
          will update the "Last updated" date above and, where appropriate, note the change in the
          app.
        </p>
      </Sec>

      <Sec n="10" id="p10" title="Contact us">
        <p>
          Questions about this policy or your data? Email us at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </Sec>
    </LegalLayout>
  )
}
