# Build command for Render
echo "Starting build process..."

# Create public directory if it doesn't exist
mkdir -p public

# Copy all files from src to public directory
cp -r src/* public/

# Copy assets directory to public
if [ -d "assets" ]; then
    cp -r assets public/
    echo "✅ Assets directory copied to public/"
fi

# Copy root level files that might be needed
if [ -f "arquitetura.jpeg" ]; then
    cp arquitetura.jpeg public/
    echo "✅ Root arquitetura.jpeg copied to public/"
fi

# Ensure index.html is in the root of public
if [ -f "index.html" ]; then
    cp index.html public/
    echo "✅ Root index.html copied to public/"
fi

# Copy app.js to public if it exists in root
if [ -f "app.js" ]; then
    cp app.js public/
    echo "✅ Root app.js copied to public/"
fi

# Ensure index.html is in the root of public
if [ -f "public/index.html" ]; then
    echo "✅ index.html found in public directory"
else
    echo "❌ Error: index.html not found"
    exit 1
fi

echo "✅ Build completed successfully!"
echo "📁 Files ready for deployment in public/ directory"
