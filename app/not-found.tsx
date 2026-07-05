import Container from "@/components/Container";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clay-dark">
        404
      </p>
      <h1 className="mt-3 font-serif text-4xl font-semibold text-ink sm:text-5xl">
        This page took a different path.
      </h1>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-soft">
        The page you're looking for isn't here. Let's get you back to something
        useful.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/">Back to home</Button>
        <Button href="/services" variant="secondary">
          View services
        </Button>
      </div>
    </Container>
  );
}
