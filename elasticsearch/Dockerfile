# 使用官方 Elasticsearch 镜像作为基础镜像
FROM docker.elastic.co/elasticsearch/elasticsearch:7.17.3

# 设置工作目录为 Elasticsearch 的 bin 目录
WORKDIR /usr/share/elasticsearch/bin

# 设置插件安装目录
ENV ES_PLUGINS_DIR=/usr/share/elasticsearch/plugins

# 在构建时安装插件
RUN elasticsearch-plugin install --batch https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.17.3/elasticsearch-analysis-ik-7.17.3.zip


# 暴露 Elasticsearch 服务端口
EXPOSE 9200
EXPOSE 9300
