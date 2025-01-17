import FormPage from "./form/page";

export default function Home() {
  return (
    <div className="grid justify-items-center pt-14 p-10 min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="w-full max-w-[600px]">
        <FormPage />
      </main>
    </div>
  );
}
