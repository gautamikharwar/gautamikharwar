import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";

export default function WorkImage({
  src,
  alt,
  placeholder = "Image coming soon",
}: {
  src: string;
  alt: string;
  placeholder?: string;
}) {
  return (
    <section>
      <Container className="py-10 md:py-14">
        <Reveal>
          {src ? (
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-base bg-surface">
              <Image src={src} alt={alt} fill className="object-cover" />
            </div>
          ) : (
            <div className="flex aspect-[16/9] w-full items-center justify-center rounded-base border border-dashed border-border bg-surface p-6 text-center text-sm text-muted">
              {placeholder}
            </div>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
