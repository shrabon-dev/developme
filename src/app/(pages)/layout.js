import '@/app/globals.css';

 

export const metadata = {
  title: "Develop me - Next.js App",
  description: "Develop me - Next.js App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
         
      >
        {children}
      </body>
    </html>
  );
}
