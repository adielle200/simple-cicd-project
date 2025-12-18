resource "kubernetes_deployment" "app" {
  metadata {
    name = "simple-app"
  }

  spec {
    replicas = 1

    selector {
      match_labels = {
        app = "simple-app"
      }
    }

    template {
      metadata {
        labels = {
          app = "simple-app"
        }
      }

      spec {
        container {
          name  = "simple-app"
          image = "adielle200/simple-app:latest"

          port {
            container_port = 3000
          }
        }
      }
    }
  }
}

