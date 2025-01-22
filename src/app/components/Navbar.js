"use client";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { ShoppingCart, Menu } from "lucide-react";

import { useCartStore } from "@/app/store/useCart";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { totalItems } = useCartStore();

  const router = useRouter();

  const onClickRedirect = (path) => {
    router.push(path);
    setOpen(false);
  };

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <div className="mr-8">
          <span
            className="text-xl font-bold cursor-pointer"
            onClick={() => router.push("/")}
          >
            RawRage
          </span>
        </div>

        <div className="hidden md:flex flex-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <div className="grid grid-cols-1 gap-2">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/product/smra"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            SMRAs
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Empowering Health with Insightful Risk Assessment.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/product/steroids"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Steroids
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Unlocking Strength, Enhancing Performance.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/product/pct"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            PCTs
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Ultimate PCT Stack: Goodbye to Gynaecomastia
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Regular Nav Items */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-accent-foreground focus:text-accent-foreground"
                  href="/about"
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-accent-foreground focus:text-accent-foreground"
                  href="/contact"
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center space-x-4 ml-auto">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.push("/cart")}
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-blue-500">
                  {totalItems}
                </Badge>
              )}
            </Button>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-4">
                <Button
                  variant="ghost"
                  className="justify-start"
                  onClick={() => onClickRedirect("/product/smra")}
                >
                  SMRAs
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start"
                  onClick={() => onClickRedirect("/product/steroids")}
                >
                  Steroids
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start"
                  onClick={() => onClickRedirect("/product/pct")}
                >
                  PCTs
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start"
                  onClick={() => onClickRedirect("/about")}
                >
                  About
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start"
                  onClick={() => onClickRedirect("/contact")}
                >
                  Contact
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
