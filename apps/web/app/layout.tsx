
import "../styles/global.css";
import type { Metadata } from "next";
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { client } from "../src/lib/graphql/client";

export const metadata: Metadata = {
  title: "Create Turborepo",
  description: "Generated by create turbo",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {

  
  return (
    <html lang="en">
      <body className="h-min-screen flex justify-center items-center">{children}</body>
    </html>
  );
}
