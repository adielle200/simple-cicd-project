pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                docker build -t localhost:5000/simple-app:latest app
                '''
            }
        }

        stage('Push to Local Registry') {
            steps {
                sh '''
                docker push localhost:5000/simple-app:latest
                '''
            }
        }

        stage('Run Container (optional)') {
            steps {
                sh '''
                docker rm -f simple-app || true
                docker run -d -p 3000:3000 --name simple-app localhost:5000/simple-app:latest
                '''
            }
        }
    }
}

