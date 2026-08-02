export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="font-display text-4xl text-joy-plum mb-6">
        Connect with Us for Your Dance Journey
      </h1>
      <p className="max-w-2xl mb-12">
        Reach out for inquiries, class registrations, or any questions about
        our dance programs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div>
          <h2 className="font-semibold mb-2">Phone</h2>
          <p className="text-sm">(732) 223-5336</p>
        </div>
        <div>
          <h2 className="font-semibold mb-2">Email</h2>
          <p className="text-sm">danceforjoynj@gmail.com</p>
        </div>
        <div>
          <h2 className="font-semibold mb-2">Address</h2>
          <p className="text-sm">1025 NJ-70 #2, Brielle, NJ 08730</p>
        </div>
      </div>

      {/* TODO: embed real Google Map */}
      <div className="w-full h-80 bg-joy-blush rounded-xl flex items-center justify-center text-sm text-joy-charcoal/60">
        TODO: embed map
      </div>
    </div>
  );
}
