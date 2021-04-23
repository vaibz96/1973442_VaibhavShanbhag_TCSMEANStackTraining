pipeline{
    agent any
    tools {nodejs "mynode-jenkins"}
    stages{
        stage("Check Node Version"){
            steps{
                sh "node --version"
            }
        }
        stage("Install Dependencies"){
            steps{
                sh "npm --version"
                sh "npm install"
            }
        }
        stage("Test"){
            steps{
                sh "node appJenkins.js"
            }
        }
        stage("Release Version"){
            steps{
                echo "Release the Version"
            }
        }
    }
}