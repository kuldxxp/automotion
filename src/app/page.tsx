
import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";

const Page = async () => {
  const users = await prisma.user.findMany();

  return (
    <div className="text-black-500 font-bold font-mono">
      Wakeup Kuldeep
      <div className="min-h-screen min-w-screen flex items-center justify-center">
        <Button variant={"outline"}>
          Click Me
        </Button>

        { JSON.stringify(users) }
      </div>
    </div>
  );
};

export default Page;