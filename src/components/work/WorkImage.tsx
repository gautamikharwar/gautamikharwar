import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";

export default function WorkImage({ src, alt }: { src: string; alt: string }) {
  return (
    <section>
      <Container className="py-10 md:py-14">
        <Reveal>
          {src ? (
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface">
              <Image src={src} alt={alt} fill className="object-cover" />
            </div>
          ) : (
            <div className="flex aspect-[16/9] w-full items-center justify-center border border-dashed border-border bg-surface text-sm text-muted">
              Image coming soon
            </div>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
