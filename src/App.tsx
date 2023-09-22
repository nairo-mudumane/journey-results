import { Logo, RoundsCarousel, SocialMedia, Typier } from "./components";

export function App() {
  return (
    <main className="w-screen h-screen block md:flex gap-6 items-center justify-evenly">
      <section className="px-10 md:w-[48%]">
        <Logo />

        <h1 className="font-semibold">
          <Typier
            speed={20}
            text="Dolor non enim pariatur ipsum velit excepteur aliqua culpa ea eu."
          />
        </h1>

        <SocialMedia />
      </section>

      <section className="px-10 py-8 flex items-center md:flex-1 md:h-screen overflow-hidden overflow-y-auto">
        <RoundsCarousel />
      </section>
    </main>
  );
}
