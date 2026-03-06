# Cursor MCP Runner for CI/CD Pipeline
# 基于 base image，快速迭代

FROM localhost/cursor-mcp-base:latest

# 安装 Cursor CLI
RUN mkdir -p /root/.local/bin && \
    curl https://cursor.com/install -fsS | bash

# 创建 wrapper 脚本解决符号链接路径问题
RUN CURSOR_REAL=$(realpath /root/.local/bin/cursor-agent) && \
    CURSOR_DIR=$(dirname "$CURSOR_REAL") && \
    mv /root/.local/bin/cursor-agent /root/.local/bin/cursor-agent.link && \
    echo '#!/bin/bash' > /root/.local/bin/cursor-agent && \
    echo "exec $CURSOR_REAL \"\$@\"" >> /root/.local/bin/cursor-agent && \
    chmod +x /root/.local/bin/cursor-agent

ENV PATH="/root/.local/bin:${PATH}"

# 配置 MCP（让 cursor-agent 知道如何调用 arc-code-review）
RUN mkdir -p /root/.cursor
COPY mcp.json /root/.cursor/mcp.json

# 预热 arc-code-review（让 uvx 缓存依赖，加快首次运行）
RUN uvx --python 3.11 \
    --extra-index-url https://pypi.shopee.io/simple/ \
    --index-strategy unsafe-best-match \
    --from shopee-skynet-arc-code-review@0.9.5 \
    arc-code-review --help || true

# 设置工作目录
WORKDIR /workspace

# 验证安装
RUN cursor-agent --version

# 默认入口
ENTRYPOINT ["/bin/bash"]
