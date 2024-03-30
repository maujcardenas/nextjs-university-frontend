import DefaultLayout from "@/layouts/defaultLayout";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="homepage grid grid-cols-4 gap-5 grid-auto-rows-minmax">
        <p>This is the man</p>
      </div>
    </DefaultLayout>
  );
}
