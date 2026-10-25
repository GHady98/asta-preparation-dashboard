import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Asta’s Preparation Dashboard', description: 'Follow a focused three-task training plan. Track preparation, one task at a time.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
