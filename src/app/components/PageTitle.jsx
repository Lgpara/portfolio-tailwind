export default function PageTitle({ title }) {
  return (
    <div className="font-sans justify-between items-center flex gap-3 w-full">
      <div className="w-1/5 bg-zinc-900 h-6"></div>
      <div className="text-5xl">{title}</div>
      <div className="h-6 w-1/2 bg-zinc-900"></div>
    </div>
  );
}
