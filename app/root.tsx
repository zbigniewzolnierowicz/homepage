import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { globalStyles } from "./stitches.config";
import type {LinksFunction} from "@remix-run/react/routeModules";
import VGA8Stylesheet from "~/assets/fonts/vga8/stylesheet.css";
import VCRStylesheet from "~/assets/fonts/vcr/stylesheet.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "zed",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => ([
  { rel: "stylesheet", href: VGA8Stylesheet },
  { rel: "stylesheet", href: VCRStylesheet }
])

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {globalStyles()}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
