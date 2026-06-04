import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import LegalLayout from '../components/LegalLayout'
import { CONTACT_EMAIL } from '../data/site'

const TOC = [
  { id: 't1', label: 'Acceptance of terms' },
  { id: 't2', label: 'Eligibility' },
  { id: 't3', label: 'Subscriptions & billing' },
  { id: 't4', label: 'Your data & backups' },
  { id: 't5', label: 'Acceptable use' },
  { id: 't6', label: 'Your content' },
  { id: 't7', label: 'Intellectual property' },
  { id: 't8', label: 'Not medical advice' },
  { id: 't9', label: 'Disclaimers' },
  { id: 't10', label: 'Limitation of liability' },
  { id: 't11', label: 'Governing law' },
  { id: 't12', label: 'Changes & contact' },
]

function Sec({ n, id, title, children }: { n: string; id: string; title: string; children: ReactNode }) {
  return (
    <section className="legal-sec" id={id}>
      <h2><span className="n">{n}</span> {title}</h2>
      {children}
    </section>
  )
}

/** Terms & Conditions — rewritten to match Virtus's local-first, no-account model. */
export default function Terms() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      intro={`These Terms & Conditions ("Terms") govern your access to and use of the Virtus mobile application (the "Service"). By downloading or using Virtus, you agree to these Terms.`}
      toc={TOC}
      crossLink={{ to: '/privacy', label: 'Privacy Policy' }}
    >
      <Sec n="01" id="t1" title="Acceptance of terms">
        <p>
          By accessing or using Virtus, you confirm that you have read, understood, and agree to be
          bound by these Terms and our <Link to="/privacy">Privacy Policy</Link>. If you do not
          agree, do not use the Service. Virtus grants you a personal, non-transferable license to
          use the app on your devices.
        </p>
      </Sec>

      <Sec n="02" id="t2" title="Eligibility">
        <p>
          You must be at least 13 years old (or the minimum age of digital consent in your
          jurisdiction) to use Virtus. By using the Service, you represent that you meet this
          requirement and have the legal capacity to enter into these Terms.
        </p>
      </Sec>

      <Sec n="03" id="t3" title="Subscriptions & billing">
        <p>
          Virtus is free to download and use with core features. <strong>Virtus Premium</strong> is
          an optional auto-renewing subscription that unlocks additional features.
        </p>
        <ul>
          <li>Subscriptions are billed through your Apple App Store or Google Play account at the price shown at purchase.</li>
          <li>Subscriptions automatically renew unless canceled at least 24 hours before the end of the current period.</li>
          <li>You can manage or cancel your subscription anytime in your App Store or Google Play account settings.</li>
          <li>We never receive or store your payment details — billing and refunds are handled by Apple or Google under their policies.</li>
          <li>Restore Purchases is supported, and Premium status is applied to your device once verified.</li>
        </ul>
      </Sec>

      <Sec n="04" id="t4" title="Your data & backups">
        <p>
          Virtus stores all of your data locally on your device and does not maintain a cloud
          backup or account-based copy. This means <strong>you are responsible for your own data</strong>:
          uninstalling the app, resetting, or losing your device will permanently delete your habit
          history. We are not liable for any loss of data. You can export your data to CSV from
          within the app to keep your own copy.
        </p>
      </Sec>

      <Sec n="05" id="t5" title="Acceptable use">
        <p>You agree not to:</p>
        <ul>
          <li>Reverse engineer, decompile, or attempt to extract the source code of the Service, except as permitted by law.</li>
          <li>Use the Service to violate any law or infringe the rights of others.</li>
          <li>Interfere with or disrupt the integrity or performance of the Service.</li>
        </ul>
      </Sec>

      <Sec n="06" id="t6" title="Your content">
        <p>
          You own the habits, identity statements, notes, and journal reflections you create in
          Virtus ("Your Content"). Because Your Content is stored only on your device, we do not
          access, store, or display it on any server. You are responsible for Your Content and for
          ensuring you have the rights to use it.
        </p>
      </Sec>

      <Sec n="07" id="t7" title="Intellectual property">
        <p>
          The Service — including its design, software, the original story and narrative chapters,
          achievements, illustrations, logos, and the Virtus name — is owned by the developer or its
          licensors and is protected by intellectual property laws. These Terms do not grant you any
          right to use our trademarks or branding without prior written permission.
        </p>
      </Sec>

      <Sec n="08" id="t8" title="Not medical advice">
        <p>
          Virtus is a self-improvement and motivation tool. It is not medical, psychological, or
          professional health advice. Content within the app — including Expeditions touching on
          sleep, stress, focus, and digital habits — is for general informational and motivational
          purposes only. Consult a qualified professional before making decisions about your health.
        </p>
      </Sec>

      <Sec n="09" id="t9" title="Disclaimers">
        <p>
          Virtus is provided "as is" and "as available," without warranties of any kind, whether
          express or implied, including fitness for a particular purpose and non-infringement. We do
          not warrant that the Service will be uninterrupted, error-free, or secure.
        </p>
      </Sec>

      <Sec n="10" id="t10" title="Limitation of liability">
        <p>
          To the maximum extent permitted by law, Virtus and its developer will not be liable for
          any indirect, incidental, special, consequential, or punitive damages, or any loss of
          data, profits, or goodwill, arising from your use of or inability to use the Service. Our
          total liability for any claim will not exceed the amount you paid us in the 12 months
          preceding the claim.
        </p>
      </Sec>

      <Sec n="11" id="t11" title="Governing law">
        <p>
          These Terms are governed by the laws of the jurisdiction in which the developer operates,
          without regard to conflict-of-law principles. Any disputes will be resolved in the courts
          located there, unless applicable law requires otherwise.
        </p>
      </Sec>

      <Sec n="12" id="t12" title="Changes & contact">
        <p>
          We may update these Terms from time to time. Material changes will be reflected by an
          updated "Last updated" date and, where appropriate, in-app notice. Continued use after
          changes take effect constitutes acceptance.
        </p>
        <p>
          Questions about these Terms? Contact us at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </Sec>
    </LegalLayout>
  )
}
