import SearchBar from "@/components/ui/searchbar";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className=" min-h-screen bg-[url('/bg.svg')] bg-[#F9F5FF] bg-contain bg-center bg-no-repeat ">
      <header className="container flex flex-col items-center gap-6 md:gap-8 py-16 md:py-24 text-primary text-center">
        <div className="bg-primary-light rounded-2xl px-4 py-1 text-sm">
          Our Blog
        </div>
        <h1 className="text-primary-dark text-4xl md:text-5xl font-bold leading-[44px] md:leading-[60px]">
          Resources and insights
        </h1>
        <p className="text-lg md:text-xl">
          The latest industry news, interviews, technologies, and resources.
        </p>
        <SearchBar />
      </header>
      {children}
    </main>
  );
}
