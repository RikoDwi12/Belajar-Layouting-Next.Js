import Button from "@/components/Button";

export default function Riko() {
  return (
    <>
      <div className="p-10 bg-slate-50 text-black">
        <Button
          title="Riko"
          className="bg-red-600 text-black font-bold w-full rounded-full focus:bg-slate-300 active:bg-slate-500"
        />
      </div>
    </>
  );
}
