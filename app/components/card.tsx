export default function Card({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="flex w-full items-center justify-between rounded border border-neutral-200 px-4 py-4 dark:border-neutral-700 ">
            {children}
        </div>
    );
  }