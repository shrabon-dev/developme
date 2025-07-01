import '@/app/globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
 

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
