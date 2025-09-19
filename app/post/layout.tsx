import Container from "@/components/layouts/Container";
import ".././globals.css";
import Header from "@/components/layouts/Header";
import Scales from "@/components/layouts/Scales";

export const metadata = {
  title: "AHs Post",
  description: "AHs Blog Posts",
};

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Container className="relative">
          <Scales />
          <Header />
          {children}
        </Container>
      </body>
    </html>
  );
}
