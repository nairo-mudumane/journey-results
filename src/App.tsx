import {
  Logo,
  PageContainer,
  RoundsCarousel,
  SocialMedia,
  Typier,
} from "./components";

export function App() {
  return (
    <main className="w-screen min-h-screen flex flex-wap gap-6 items-center justify-evenly">
      <section className="md:w-[54%]">
        <PageContainer className="w-full max-w-full">
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

      <section className="min-w-[46%] flex-1 h-screen overflow-y-auto">
        <PageContainer className="w-full max-w-full">
          <div className="w-full py-6 flex items-center ">
            <RoundsCarousel />
          </div>
        </PageContainer>
      </section>
    </main>
  );
}
