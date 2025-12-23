pipeline {
    agent any

    environment {
        # On ne met plus localhost:5000 car kind ne peut pas accéder au registry localhost
        IMAGE_NAME = "simple-app:latest"
        KUBECONFIG = "/var/lib/jenkins/.kube/config"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                # Build l'image
                docker build -t $IMAGE_NAME app

                # Charge l'image dans le cluster kind
                kind load docker-image $IMAGE_NAME --name mon-cluster
                '''
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                # Applique le déploiement et le service
                kubectl apply -f k8s/deployment.yaml
                kubectl apply -f k8s/service.yaml
                '''
            }
        }
    }
}

