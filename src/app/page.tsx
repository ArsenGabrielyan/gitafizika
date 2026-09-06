import Logo from "@/components/logo";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col gap-2 w-full h-dvh">
      <Logo/>
      <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-primary">Շուտով</h1>
    </div>
  );
}
