"use client";

// components
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// types
import { Factory } from "@/types/factory";
import { useState } from "react";
// utils
import { cn } from "@/lib/utils";

type Props = {
  orderId: string;
  factories: Factory[];
};

export const OrderButton = ({ orderId, factories }: Props) => {
  const [alloted, setAlloted] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"secondary"}
          className={cn(
            alloted ? "hidden" : "",
            "bg-base text-foreground hover:text-background"
          )}
        >
          分配訂單
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-background rounded-lg">
        {factories.map((factory) => (
          <DropdownMenuItem
            key={factory.id}
            onClick={async () => {
              setAlloted(true);
            }}
            className="text-foreground"
          >
            {factory.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
