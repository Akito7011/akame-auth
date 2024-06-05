"use Client";

import { Card, CardContent,CardFooter,CardHeader } from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { BackButton } from "@/components/auth/back-button";


interface CardWrapperTool{
    children: React.ReactNode;
    headerLabel: string;
    BackButtonLabel: string;
    BackButtonhref: string;
    showSocial?: boolean;
}

export const CardWrapper = ({
    children,
    headerLabel,
    BackButtonLabel,
    BackButtonhref,
    showSocial,
}: CardWrapperTool) => { 
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header label={headerLabel}/>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showSocial && (
                <CardFooter>
                    <Social/>
                </CardFooter>
            )}
            <CardFooter>
                <BackButton
                    label={BackButtonLabel}
                    href={BackButtonhref} 
                />
            </CardFooter>
        </Card>
    )
}