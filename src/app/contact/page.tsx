import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Contact Us | Dance For Joy, Brielle NJ",
  description:
    "Reach Dance For Joy in Brielle, NJ by phone, email, or in person — questions about classes, enrollment, or our competitive company team welcome.",
};

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Connect with Us for Your Dance Journey"
        subtitle="Reach out for inquiries, class registrations, or any questions about our dance programs."
        image={{
          src: "/images/picture14.jpg",
          alt: "Sunlit yellow studio with barre and framed dance photography",
        }}
      />
      <div className="mx-auto max-w-6xl px-6 py-16">

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

      <div className="w-full h-80 rounded-xl border border-joy-blush overflow-hidden">
        <iframe
          src="https://www.google.com/maps?q=1025+NJ-70+%232,+Brielle,+NJ+08730&output=embed"
          title="Dance For Joy studio location map"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      </div>
    </div>
  );
}
