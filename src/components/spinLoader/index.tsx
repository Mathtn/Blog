type spinLoaderProps = {
  className?: string;
};

export default function SpinLoader({ className = "" }: spinLoaderProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="w-10 h-10 border-5 border-t-transparent border-slate-900 rounded-full animate-spin"></div>
    </div>
  );
}
