export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: [
                '/admin',
                '/admin/',
                '/login',
                '/register',
            ],
        },
        sitemap: 'https://geniuscareerhub.com/sitemap.xml',
    }
}

export async function GET() {
    return new Response(JSON.stringify(robots()), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}