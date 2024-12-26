// Jenkinsfile
pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'node-cicd-demo'
        DOCKER_TAG = 'latest'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE:$DOCKER_TAG .'
            }
        }
        
        stage('Run Container') {
            steps {
                sh '''
                    docker stop $DOCKER_IMAGE || true
                    docker rm $DOCKER_IMAGE || true
                    docker run -d -p 3000:3000 --name $DOCKER_IMAGE $DOCKER_IMAGE:$DOCKER_TAG
                '''
            }
        }
        
        stage('Notify') {
            steps {
                echo "Déploiement réussi! L'application est accessible via ngrok."
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline exécuté avec succès!'
        }
        failure {
            echo 'Pipeline échoué!'
        }
    }
}