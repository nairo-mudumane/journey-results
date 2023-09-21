import { Logo, PageContainer, SocialMedia, Typier } from "./components";

export function App() {
  return (
    <main className="w-screen min-h-screen flex flex-wrap gap-6 items-center justify-evenly">
      <section>
        <PageContainer>
          <Logo />

          <h1 className="font-semibold">
            <Typier text="In sint cupidatat ut incididunt non pariatur nulla veniam" />
          </h1>
          <SocialMedia />
        </PageContainer>
      </section>

      <section>carousel</section>
    </main>
  );
}
