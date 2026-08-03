import Image from "next/image";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  image?: {
    src: string;
    alt: string;
    /** Adjusts vertical focal point for tall/awkward crops. Defaults to center. */
    position?: string;
  };
};

export default function PageHeader({ title, subtitle, image }: PageHeaderProps) {
  return (
    <section className="relative w-full h-56 md:h-72 overflow-hidden">
      {image ? (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="100vw"
            priority
            className="object-cover"
            style={image.position ? { objectPosition: image.position } : undefined}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-joy-plum/70 via-joy-plum/35 to-joy-plum/10" />
        </>
      ) : (
        <div className="absolute inset-0 bg-joy-plum" />
      )}

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-6">
        <h1 className="font-display text-3xl md:text-5xl text-white mb-3 max-w-2xl leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="max-w-xl text-white/90 text-sm md:text-base">
            {subtitle}
          </p>
        )}
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 flex h-1.5">
        <div className="flex-1 bg-joy-pink" />
        <div className="flex-1 bg-joy-cyan" />
        <div className="flex-1 bg-joy-plum" />
      </div>
    </section>
  );
}
