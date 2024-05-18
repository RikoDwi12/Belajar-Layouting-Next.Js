export default function Home() {
  return (
    <>
      <div className="flex-1 bg-blue-900 text-center">
        <p>Ini Adalah Artikel</p>
      </div>
      <div className="flex">
        <div className="flex-1 bg-green-700 text-center">
          <p>ini merupakan flex shrink</p>
        </div>
        <div className="flex-1 bg-red-700 text-center">
          <h1>ini bukan flex</h1>
        </div>
        <div className="flex-1 bg-blue-800 text-center">
          <h2>INI basis</h2>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 p-4 bg-slate-600">
        <div className="justify-self-start bg-blue-300 p-5">SAYA INGIN</div>
        <div className="justify-self-center bg-green-300 p-8">
          ini besar P-8
        </div>
        <div className="justify-self-end bg-red-300 p-10">ini besar P-10</div>
      </div>

      <div className="grid grid-cols-3 gap-4 p-4 bg-slate-600">
        <div className="justify-self-start bg-blue-300 p-5">ini besar P-5</div>
        <div className="justify-self-center bg-green-300 p-8">
          ini besar P-8
        </div>
        <div className="justify-self-end bg-red-300 p-10">ini besar P-10</div>
      </div>

      <div className="grid grid-cols-3 gap-4 p-4 bg-slate-600">
        <div className="justify-self-start bg-blue-300 p-5">ini besar P-5</div>
        <div className="justify-self-center bg-green-300 p-8">
          ini besar P-8
        </div>
        <div className="justify-self-end bg-red-300 p-10">ini besar P-10</div>
      </div>

      <div className="grid grid-cols-3 gap-4 p-4 bg-slate-600">
        <div className="justify-self-start bg-blue-300 p-5">SAYA INGIN</div>
        <div className="justify-self-center bg-green-300 p-8">
          ini besar P-8
        </div>
        <div className="justify-self-end bg-red-300 p-10">ini besar P-10</div>
      </div>
    </>
  );
}
