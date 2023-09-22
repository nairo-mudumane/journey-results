import {
  Logo,
  PageContainer,
  RoundsCarousel,
  SocialMedia,
  Typier,
} from "./components";

export function App() {
  return (
    <main className="w-screen min-h-screen flex flex-wrap gap-6 items-center justify-evenly">
      <section className="md:min-w-[54%]">
        <PageContainer className="md:w-max md:max-w-full">
          <Logo />

          <h1 className="font-semibold">
            <Typier
              speed={25}
              text="Dolor non enim pariatur ipsum velit excepteur aliqua culpa ea eu."
            />
          </h1>

          <SocialMedia />
        </PageContainer>
      </section>

      <section className="w-full flex-1 h-screen overflow-y-auto mx-auto md:py-10 md:min-w-full xl:min-w-[44%]">
        <PageContainer className="w-max max-w-full">
          <RoundsCarousel />
        </PageContainer>
      </section>
    </main>
  );
}
