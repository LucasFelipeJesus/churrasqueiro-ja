# Build command for Render
echo "Starting build process..."

# Create public directory if it doesn't exist
mkdir -p public

# Copy all files from src to public directory
cp -r src/* public/

# Ensure index.html is in the root of public
if [ -f "public/index.html" ]; then
    echo "✅ index.html found in public directory"
else
    echo "❌ Error: index.html not found"
    exit 1
fi

echo "✅ Build completed successfully!"
echo "📁 Files ready for deployment in public/ directory"
