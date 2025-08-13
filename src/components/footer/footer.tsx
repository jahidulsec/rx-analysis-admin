import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Footer = ({ className, ...props }: React.ComponentProps<"footer">) => {
  return (
    <footer className={cn("", className)} {...props}>
      <h3 className="text-sm text-center">
        Designed and Developed by{" "}
        <em>
          <Button
            className="px-0 text-secondary font-semibold not-italic"
            variant={"link"}
            asChild
          >
            <Link href={"https://impalaintech.com/"} target="_blank">
              Impala Intech Limited.
            </Link>
          </Button>
        </em>
      </h3>
    </footer>
  );
};

export default Footer;
