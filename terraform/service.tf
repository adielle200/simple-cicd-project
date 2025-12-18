resource "kubernetes_service" "app_service" {
  metadata {
    name = "simple-app-service"
  }

  spec {
    selector = {
      app = "simple-app"
    }

    port {
      port        = 80
      target_port = 3000
    }

    type = "NodePort"
  }
}

