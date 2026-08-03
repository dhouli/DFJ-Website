export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-display text-4xl text-joy-plum mb-6">
        Privacy Policy
      </h1>
      <p className="text-sm text-joy-charcoal/60 mb-12">Last updated: 2026</p>

      <div className="space-y-8 text-sm text-joy-charcoal/90">
        <section>
          <h2 className="font-display text-xl text-joy-pink mb-3">
            Information We Collect
          </h2>
          <p>
            When you contact us, register for classes, or use our online
            registration portal, we may collect information such as your
            name, email address, phone number, mailing address, and
            information about your dancer (name, age, class placement).
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-joy-pink mb-3">
            How We Use Your Information
          </h2>
          <p>
            We use this information to manage class enrollment and billing,
            communicate with you about classes, schedules, and studio events,
            and respond to inquiries. We do not sell or rent your personal
            information to third parties.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-joy-pink mb-3">
            Third-Party Registration Portal
          </h2>
          <p>
            Class registration and billing are handled through The Studio
            Director, a third-party platform embedded on our Schedule &amp;
            Enrollment page. Information you submit there is subject to The
            Studio Director&rsquo;s own privacy practices in addition to
            ours.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-joy-pink mb-3">
            Photos &amp; Video
          </h2>
          <p>
            We occasionally photograph or record classes, rehearsals, and
            performances for use on our website, social media, and
            promotional materials. Please let us know if you&rsquo;d prefer
            your dancer not be included.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-joy-pink mb-3">
            Contact Us
          </h2>
          <p>
            Questions about this policy or your information can be directed
            to us at{" "}
            <a
              href="mailto:danceforjoynj@gmail.com"
              className="text-joy-pink underline hover:text-joy-plum transition-colors"
            >
              danceforjoynj@gmail.com
            </a>{" "}
            or (732) 223-5336.
          </p>
        </section>
      </div>
    </div>
  );
}
