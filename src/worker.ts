export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    
    // Get the pathname
    const pathname = url.pathname;
    
    // List of file extensions that should be served as-is
    const staticFileExtensions = ['.js', '.css', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.woff', '.woff2', '.eot', '.ttf', '.otf', '.json'];
    
    // Check if the request is for a static file
    const isStaticFile = staticFileExtensions.some(ext => pathname.endsWith(ext));
    
    // Try to fetch the requested resource
    const response = await fetch(request.clone());
    
    // If the file exists and it's a static file, return it
    if (response.status !== 404 && isStaticFile) {
      return response;
    }
    
    // If it's not a static file and returns 404, serve index.html for client-side routing
    if (response.status === 404 && !isStaticFile) {
      const indexRequest = new Request(new URL('/index.html', request.url), request);
      const indexResponse = await fetch(indexRequest);
      
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
    }
    
    return response;
  },
};
