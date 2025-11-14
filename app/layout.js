import './../styles/globals.css';

export const metadata = {
    title: 'Property listing | darryn.dev',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    );
}
