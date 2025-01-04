"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./percept-ui/button";
import { Check, Copy, CopyCheck } from "lucide-react";

interface CommandsWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  npmCommand?: string;
  yarnCommand?: string;
  pnpmCommand?: string;
  description?: string;
}

export function CommandsWrapper({
  npmCommand,
  yarnCommand,
  pnpmCommand,
  description,
  ...props
}: CommandsWrapperProps) {
  const [activeCommand, setActiveCommand] = React.useState(npmCommand || "");
  const [copied, setCopied] = React.useState(false);
  const [mouseEntered, setMouseEntered] = React.useState(false);
  const handleCopy = () => {
    if (activeCommand) {
      navigator.clipboard.writeText(activeCommand);
      setCopied(true);
    }
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      className={cn("group relative my-4 flex flex-col space-y-2")}
      {...props}
    >
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
      <Tabs
        defaultValue="npm"
        className="relative mr-auto w-full"
        onValueChange={(value) => {
          if (value === "npm") setActiveCommand(npmCommand || "");
          if (value === "yarn") setActiveCommand(yarnCommand || "");
          if (value === "pnpm") setActiveCommand(pnpmCommand || "");
        }}
      >
        <div className="flex items-center justify-between pb-3">
          <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
            <TabsTrigger
              value="npm"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              npm
            </TabsTrigger>
            <TabsTrigger
              value="yarn"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              yarn
            </TabsTrigger>
            <TabsTrigger
              value="pnpm"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              pnpm
            </TabsTrigger>
          </TabsList>
        </div>
        {npmCommand && (
          <TabsContent
            onMouseEnter={() => setMouseEntered(true)}
            onMouseLeave={() => setMouseEntered(false)}
            value="npm"
            className="relative rounded-md border p-4"
          >
            {mouseEntered && (
              <Button
                variant={"outline"}
                onClick={handleCopy}
                className="absolute inset-y-7 h-8 w-8 right-8 bg-background text-foreground px-2 py-1 rounded-md hover:bg-gray-200 dark:bg-black dark:text-white dark:hover:bg-gray-800"
              >
                {copied ? <Check size={15} /> : <Copy size={15} />}
              </Button>
            )}
            <Command>{npmCommand}</Command>
          </TabsContent>
        )}
        {yarnCommand && (
          <TabsContent
            onMouseEnter={() => setMouseEntered(true)}
            onMouseLeave={() => setMouseEntered(false)}
            value="yarn"
            className="relative rounded-md border p-4"
          >
            {mouseEntered && (
              <Button
                variant={"outline"}
                onClick={handleCopy}
                className="absolute inset-y-7 h-8 w-8 right-8 bg-background text-foreground px-2 py-1 rounded-md hover:bg-gray-200 dark:bg-black dark:text-white dark:hover:bg-gray-800"
              >
                {copied ? <Check size={15} /> : <Copy size={15} />}
              </Button>
            )}
            <Command>{yarnCommand}</Command>
          </TabsContent>
        )}
        {pnpmCommand && (
          <TabsContent
            onMouseEnter={() => setMouseEntered(true)}
            onMouseLeave={() => setMouseEntered(false)}
            value="pnpm"
            className="relative rounded-md border p-4"
          >
            {mouseEntered && (
              <Button
                variant={"outline"}
                onClick={handleCopy}
                className="absolute inset-y-7 h-8 w-8 right-8 bg-background text-foreground px-2 py-1 rounded-md hover:bg-gray-200 dark:bg-black dark:text-white dark:hover:bg-gray-800"
              >
                {copied ? <Check size={15} /> : <Copy size={15} />}
              </Button>
            )}
            <Command>{pnpmCommand}</Command>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
}

interface CommandProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Command({ children }: CommandProps) {
  return (
    <pre className="w-full rounded-md bg-gray-100 p-4 dark:bg-black dark:text-white overflow-auto text-sky-600">
      <code className="dark:text-blue-300 text-blue-700 text-sm">
        {children}
      </code>
    </pre>
  );
}
