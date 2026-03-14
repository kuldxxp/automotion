
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div className="text-black-500 font-bold font-mono">
      Wakeup Kuldeep
      <div className="min-h-screen min-w-screen flex items-center justify-center">
        <Button variant={"outline"}>
          Click Me
        </Button>
      </div>
    </div>
  );
};

export default Page;