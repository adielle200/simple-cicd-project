pipeline {
  agent any

  environment {
    DOCKER_IMAGE = "TON_DOCKERHUB/simple-app"
  }

  stages {

    stage('Clone Repo') {
      steps {
        git branch: 'main', url: 'https://github.com/<TON_USERNAME>/simple-cicd-project.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t $DOCKER_IMAGE:latest app'
      }
    }

    stage('Push Docker Image') {
      steps {
        sh '''
        docker login -u TON_USER -p TON_PASSWORD
        docker push $DOCKER_IMAGE:latest
        '''
      }
    }

    stage('Deploy with Terraform') {
      steps {
        sh '''
        cd terraform
        terraform init
        terraform apply -auto-approve
        '''
      }
    }
  }
}

