import React from "react";
import ScriptLoader from "@/components/demo-13/ScriptLoader";

export const metadata = {
  title: "Resox - Physiotherapy Clinic",
  description: "Welcome to the professional physiotherapy clinic",
};

export default function Demo13Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />

        {/* Stylesheets */}
        <link href="/demo-13/assets/css/font-awesome-all.css" rel="stylesheet" />
        <link href="/demo-13/assets/css/flaticon.css" rel="stylesheet" />
        <link href="/demo-13/assets/css/owl.css" rel="stylesheet" />
        <link href="/demo-13/assets/css/bootstrap.css" rel="stylesheet" />
        <link href="/demo-13/assets/css/jquery.fancybox.min.css" rel="stylesheet" />
        <link href="/demo-13/assets/css/animate.css" rel="stylesheet" />
        <link href="/demo-13/assets/css/color.css" rel="stylesheet" />
        <link href="/demo-13/assets/css/global.css" rel="stylesheet" />
        <link href="/demo-13/assets/css/style.css" rel="stylesheet" />
        <link href="/demo-13/assets/css/responsive.css" rel="stylesheet" />
      </head>
      <body>
        {children}
        <ScriptLoader />
      </body>
    </html>
  );
}
