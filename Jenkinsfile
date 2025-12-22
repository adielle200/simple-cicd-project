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
                # Supprime le conteneur s'il existe (sécurisé)
                docker rm -f simple-app || true

                # Lance le conteneur sur un port libre (3001) pour éviter le conflit avec Grafana
                docker run -d -p 3001:3000 --name simple-app localhost:5000/simple-app:latest
                '''
            }
        }
    }
}

