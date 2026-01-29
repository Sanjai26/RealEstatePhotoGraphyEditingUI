export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // List of file extensions that should be served as-is
    const staticFileExtensions = [
      '.js', '.css', '.png', '.jpg', '.jpeg', '.gif', '.svg',
      '.woff', '.woff2', '.eot', '.ttf', '.otf', '.json', '.ico', '.webp'
    ];

    // Check if the request is for a static file
    const isStaticFile = staticFileExtensions.some(ext => pathname.endsWith(ext));

    // If it's a static file, try to fetch it directly
    if (isStaticFile || pathname === '/') {
      const response = await fetch(request.clone());
      if (response.status === 200) {
        return response;
      }
    }

    // For non-static files (routes), serve index.html for client-side routing
    try {
      const indexUrl = new URL('/index.html', request.url);
      const indexResponse = await fetch(new Request(indexUrl, { method: 'GET' }));

      if (indexResponse.status === 200) {
        return new Response(indexResponse.body, {
          status: 200,
          statusText: 'OK',
          headers: {
            'Content-Type': 'text/html; charset=utf-8',
            'Cache-Control': 'public, max-age=0, must-revalidate',
          },
        });
      }
    } catch (error) {
      console.error('Error serving index.html:', error);
    }

    // If all else fails, return 404
    return new Response('Not Found', { status: 404 });
  },
};
