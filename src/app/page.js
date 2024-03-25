import DefaultLayout from "@/layouts/defaultLayout";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="homepage grid grid-cols-4 gap-5 grid-auto-rows-minmax">
        <div className="block1 p-5 bg-softbgc col-span-2 text-sm flex flex-col justify-between">
          <h2 className="uppercase">Current courses</h2>
          <div className="flex justify-between p-1">
            <div className="flex gap-2 items-center">
              <div className="dot p-1 bg-red-500 rounded w-2 h-2"></div>
              <span>Calculus</span>
            </div>
            <div>Progress Bar</div>
          </div>
          <div className="flex justify-between p-1">
            <div className="flex gap-2 items-center">
              <div className="dot p-1 bg-red-500 rounded w-2 h-2"></div>
              <span>Diferential Equations</span>
            </div>
            <div>Progress Bar</div>
          </div>
          <div>learn more</div>
        </div>
      </div>
    </DefaultLayout>
  );
}
