import Image from "next/image";
import Container from "@/components/ui/Container";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

export default function WorkGallery({ images, alt }: { images: string[]; alt: string }) {
  return (
    <section>
      <Container className="py-10 md:py-14">
        <StaggerGroup className="grid grid-cols-2 gap-1 md:grid-cols-3">
          {images.map((src, i) =>
            src ? (
              <StaggerItem key={i} className="relative aspect-[4/5] w-full overflow-hidden rounded-base bg-surface">
                <Image src={src} alt={alt} fill className="object-cover" />
              </StaggerItem>
            ) : (
              <StaggerItem
                key={i}
                className="flex aspect-[4/5] w-full items-center justify-center rounded-base bg-surface text-xs text-muted"
              >
                Image {i + 3}
              </StaggerItem>
            ),
          )}
        </StaggerGroup>
      </Container>
    </section>
  );
}
