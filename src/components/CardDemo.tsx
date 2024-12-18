//trigger, socializer, researcher & investors
import { BellRing, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export function CardDemo({ className, ...props }: CardProps) {
  return (
    <>
      <div className="flex justify-evenly py-12">

        <Card className={cn("w-[320px]", className)} {...props}>
          <CardHeader>
            <CardTitle>Socializer</CardTitle>
            <CardDescription>Socializers are individuals who enjoy connecting with others and building relationships online.
            If you are a socializer means you like to socialize more on the social media platforms using internet. You can use this platform to connect with your friends and family and socialize via Photos, Videos, Text and other forms of communication.</CardDescription>
          </CardHeader>
          
          <CardFooter>
            <Button className="w-full bg-[#f85a33] text-md font-medium rounded-md">
               Read More<span>&#8594;</span>
            </Button>
          </CardFooter>
        </Card>

        <Card className={cn("w-[420px]", className)} {...props}>
          <CardHeader>
            <CardTitle>Researcher</CardTitle>
            <CardDescription>A Researcher collects, analyzes, and interprets data to advance knowledge or solve real-world problems. This profile segment is designed for the research community, enabling you to easily write, create, share, and explore projects. With our premium services, you can connect with potential investors to amplify your impact.

Researchers across fields like science, engineering, medicine, social sciences, and humanities play a crucial role in expanding knowledge, developing innovations, and solving global challenges. Success in research requires curiosity, critical thinking, and the ability to work independently and collaboratively. Clear communication of findings to peers, stakeholders, and the public is equally essential.

By driving discovery and innovation, researchers shape a better future for all. </CardDescription>
          </CardHeader>
          
          <CardFooter>
            <Button className="w-full bg-[#f85a33] text-md font-medium rounded-md">
               Read More<span>&#8594;</span>
            </Button>
          </CardFooter>
        </Card>

        <Card className={cn("w-[320px]", className)} {...props}>
          <CardHeader>
            <CardTitle>Invester</CardTitle>
            <CardDescription>For investors, this platform is the ideal solution for identifying and connecting with promising researchers and innovators.
            If you are an investor, this is the best platform to get in touch with future prospects, can easily identify researchers and innovators and go through their research to contribute and promote them with the help of money and other resources and get benefitted from it.</CardDescription>
          </CardHeader>
          
          <CardFooter>
            <Button className="w-full bg-[#f85a33] text-md font-medium rounded-md">
               Read More<span>&#8594;</span>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}