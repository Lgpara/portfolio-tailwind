export default function PageTitle({ title }) {
  return (
    <div className=" flex flex-col gap-3 w-[fit-content]">
      <div className="text-4xl text-zinc-900">{title}</div>
      <div className="h-4 w-1/2"></div>
    </div>
  );
}
