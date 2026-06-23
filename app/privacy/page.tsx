import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Applied Metallurgical Corp.",
  description: "Privacy Policy for Applied Metallurgical Corp.: website information collection, cookies, analytics, service providers, California privacy rights, and contact details.",
};

const effectiveDate = "June 22, 2026";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-24 text-slate-900 md:px-10 lg:px-16">
      <article className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Privacy Policy</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Applied Metallurgical Corp. Privacy Policy</h1>
        <p className="mt-4 text-sm text-slate-500">Effective date: {effectiveDate}</p>

        <div className="mt-10 space-y-8 text-base leading-7 text-slate-700">
          <section>
            <h2 className="text-2xl font-semibold text-slate-950">Overview</h2>
            <p className="mt-3">
              Applied Metallurgical Corp. (“we,” “us,” or “our”) respects your privacy. This policy explains how we collect,
              use, disclose, and protect information when you visit https://amc-site-beta.vercel.app, contact us, submit an inquiry,
              request services, or otherwise communicate with us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">Information we collect</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Information you provide directly: RFQ/contact links may collect name, email, phone number, company, part/print/project details, and message content.</li>
              <li>Technical and usage information: IP address, approximate location from IP address, browser/device type, referring pages, pages viewed, timestamps, diagnostics, and security logs.</li>
              <li>Business records created when we respond to inquiries, prepare quotes, provide services, support customers, or maintain legal, accounting, or operational records.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">How we use information</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Respond to inquiries, quote requests, bookings, service requests, support needs, or other communications.</li>
              <li>Operate, secure, debug, personalize, and improve the website and our services.</li>
              <li>Measure website performance and marketing effectiveness where analytics are enabled.</li>
              <li>Comply with legal obligations, enforce agreements, prevent fraud or abuse, and protect rights, safety, and security.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">Cookies, analytics, and similar technologies</h2>
            <p className="mt-3">
              This site may use cookies, pixels, local storage, scripts, and similar technologies for essential site operation,
              security, diagnostics, analytics, and marketing measurement. Current technical posture: Google Analytics / website analytics may be enabled; Vercel hosting/CDN logs are collected.
            </p>
            <p className="mt-3">
              You can control cookies through your browser settings. Some browsers and extensions send Do Not Track or Global
              Privacy Control signals. Where legally required and technically feasible, we honor applicable opt-out preference
              signals for sale/share or targeted advertising activities. We do not use this website to intentionally collect
              sensitive personal information through hidden tracking tools.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">How we disclose information</h2>
            <p className="mt-3">
              We may disclose information to service providers and vendors that help us operate the website and business,
              including hosting, security, analytics, email, scheduling, CRM, payment, accounting, project-management,
              and professional advisory providers. We may also disclose information if required by law or to protect rights,
              safety, security, or the integrity of our services.
            </p>
            <p className="mt-3">
              We do not sell personal information for money. If a future advertising or analytics configuration is considered
              a “sale” or “sharing” under California law, we will update our disclosures and provide the required opt-out mechanism.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">California privacy rights</h2>
            <p className="mt-3">
              Depending on your relationship with us and applicable law, California residents may have rights to request access,
              correction, deletion, portability, information about certain disclosures, and opt-out of sale/share or targeted
              advertising activities. We do not discriminate against you for exercising privacy rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">Retention and security</h2>
            <p className="mt-3">
              We retain information for as long as reasonably necessary for the purposes described above, including business records,
              legal compliance, dispute resolution, and security. We use reasonable safeguards, but no website or storage system is
              guaranteed to be completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">Contact</h2>
            <p className="mt-3">
              For privacy questions or requests, contact us at <a className="font-semibold underline" href="mailto:sales@appliedmetallurgical.com">sales@appliedmetallurgical.com</a>.
            </p>
          </section>

          <p className="border-t border-slate-200 pt-6 text-sm text-slate-500">
            This policy describes current website and business practices and should be reviewed periodically as tools,
            vendors, and legal obligations change.
          </p>
        </div>
      </article>
    </main>
  );
}
