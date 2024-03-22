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
          <div>adsfkla</div>
        </div>
        <div className="p-5 bg-black col-span-1 row-span-3">block2</div>
        <div className="p-5">block3</div>
        <div className="p-5 bg-black">block4</div>
        <div className="p-5 bg-black">block5</div>
        <div className="p-5">block6</div>
        <div className="p-5">block7</div>
        <div className="p-5">block8</div>
        <div className="p-5">block9</div>
      </div>
    </DefaultLayout>
  );
}
