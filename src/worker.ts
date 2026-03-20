export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const pathname = url.pathname;

    if (request.method === 'OPTIONS' && pathname === '/api/trail-edit') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    if (request.method === 'POST' && pathname === '/api/trail-edit') {
      try {
        const allowedCompressedExtensions = ['zip', 'rar', '7z', 'tar', 'gz', 'tgz', 'bz2', 'xz'];
        const formData = await request.formData();
        const fullName = String(formData.get('fullName') ?? '').trim();
        const email = String(formData.get('email') ?? '').trim();
        const description = String(formData.get('description') ?? '').trim();
        const uploadedFile = formData.get('file');

        if (!fullName || !email) {
          return new Response(
            JSON.stringify({ message: 'fullName and email are required' }),
            {
              status: 400,
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
              },
            },
          );
        }

        if (!(uploadedFile instanceof File)) {
          return new Response(
            JSON.stringify({ message: 'file is required' }),
            {
              status: 400,
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
              },
            },
          );
        }

        const fileExtension = uploadedFile.name.split('.').pop()?.toLowerCase() ?? '';
        if (!allowedCompressedExtensions.includes(fileExtension)) {
          return new Response(
            JSON.stringify({ message: 'Only compressed files are allowed (.zip, .rar, .7z, .tar, .gz, .tgz, .bz2, .xz)' }),
            {
              status: 400,
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
              },
            },
          );
        }

        const maxFileSizeBytes = 50 * 1024 * 1024;
        if (uploadedFile.size > maxFileSizeBytes) {
          return new Response(
            JSON.stringify({ message: 'File size exceeds 50MB limit' }),
            {
              status: 413,
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
              },
            },
          );
        }

        const fileBuffer = await uploadedFile.arrayBuffer();

        return new Response(
          JSON.stringify({
            message: 'Trail edit request received',
            data: {
              fullName,
              email,
              description,
              fileSize: uploadedFile.size,
              fileType: uploadedFile.type,
              fileDataBytes: fileBuffer.byteLength,
            },
          }),
          {
            status: 201,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          },
        );
      } catch (error) {
        console.error('Error handling /api/trail-edit:', error);
        return new Response(JSON.stringify({ message: 'Unable to process request' }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      }
    }

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
