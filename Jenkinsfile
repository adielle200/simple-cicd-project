pipeline {
  agent any

  environment {
    DOCKER_IMAGE = "adielle200/simple-app"
  }

  stages {

    stage('Clone Repo') {
      steps {
        git branch: 'main', url: 'https://github.com/adielle200/simple-cicd-project.git'
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
        docker login -u adielle200 -p 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
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

