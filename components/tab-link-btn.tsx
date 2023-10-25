"use client";
import { tabsType } from "@/data/route-tabs";
import { Button } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";

function LinkButton({ url, name, IconOutline, IconSolid }: tabsType) {
  const pathname = usePathname();
  const router = useRouter();
  const routerPush = (url: any) => {
    router.push(url);
  }

  return (
      <Button
        onClick={() => routerPush(url)}
        className={`w-full flex justify-start items-center ${
          pathname === url ? "text-primary bg-primary-50" : ""
        } hover:text-primary hover:bg-primary-50 text-md rounded-xl p-6 sm:p-4`}
        color="default"
        data-hover="false"
        variant="light"
        startContent={pathname === url ? <IconSolid /> : <IconOutline />}
      >
        {name}
      </Button>
  );
}

export default LinkButton;
