#!/bin/bash
# 构建 Cursor MCP Runner 镜像

set -e

REGISTRY="harbor.shopeemobile.com/seller-center"

# 构建 base image（只需要跑一次）
build_base() {
    echo "🔨 Building base image..."
    podman build -f Dockerfile.base -t cursor-mcp-base:latest .
    echo "✅ Base image built: cursor-mcp-base:latest"
}

# 构建 runner image（快速迭代）
build_runner() {
    echo "🔨 Building runner image..."
    podman build -t cursor-mcp-runner:latest .
    echo "✅ Runner image built: cursor-mcp-runner:latest"
}

# 推送到 registry
push() {
    echo "🏷️  Tagging images..."
    podman tag cursor-mcp-base:latest ${REGISTRY}/cursor-mcp-base:latest
    podman tag cursor-mcp-runner:latest ${REGISTRY}/cursor-mcp-runner:latest
    
    echo "📤 Pushing to registry..."
    # podman push ${REGISTRY}/cursor-mcp-base:latest
    # podman push ${REGISTRY}/cursor-mcp-runner:latest
    echo "⚠️  Push commands are commented out. Uncomment to push."
}

# 帮助信息
usage() {
    echo "Usage: $0 [base|runner|all|push]"
    echo ""
    echo "Commands:"
    echo "  base   - Build base image (slow, run once)"
    echo "  runner - Build runner image (fast, for iteration)"
    echo "  all    - Build both images"
    echo "  push   - Tag and push to registry"
    echo ""
    echo "Example:"
    echo "  $0 base    # First time setup"
    echo "  $0 runner  # Fast iteration"
}

case "${1:-all}" in
    base)
        build_base
        ;;
    runner)
        build_runner
        ;;
    all)
        build_base
        build_runner
        ;;
    push)
        push
        ;;
    *)
        usage
        ;;
esac
