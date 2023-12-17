pipeline {
    // 指定 Jenkins 的执行者
    agent any

    // 定义环境变量
    environment {
        // Docker Hub 凭据的 ID 
        DOCKER_HUB_CREDENTIALS_ID = 'docker-hub-credentials' 
        // Docker 镜像的名称，应包含用户名和应用名
        DOCKER_IMAGE_NAME = 'xuyin888/myvueapp' 
        DOCKER_IMAGE_TAG = "build-${env.BUILD_NUMBER}"
    }
    
    tools {
        nodejs 'NodeJsV20' // 替换为您配置的 Node.js 名称
    }

    stages {
        stage('Checkout') {
            // 检出代码阶段
            steps {
                git url: 'git@github.com:xuyin666/raokouling_frontend.git', branch: 'main'
            }
        }

        stage('Build and Push Docker Image') {
            steps {
                script {
                    // 进入拉取的仓库目录
                    dir('raokouling_frontend') {
                        sh 'node --version'
                        // 安装 npm 依赖
                        sh 'npm install'
                        // 运行 npm 构建脚本
                        sh 'npm run build'
                        // 构建 Docker 镜像
                        docker.build("${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}")
                        // 使用凭据登录到 Docker Hub，并推送镜像
                        docker.withRegistry('https://registry.hub.docker.com', DOCKER_HUB_CREDENTIALS_ID) {
                            // 推送镜像
                            docker.image("${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}").push()
                        }
                    }
                }
            }
        }


    }

    post {
        always {
            // 构建完成后的操作，无论成功或失败
            echo 'Cleaning up'
            // 可以在此处添加清理脚本
        }
    }
}