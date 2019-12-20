terraform {
  backend "azurerm" {
    key = "dg-websvc-state.tfstate"
  }
}

data "azurerm_resource_group" "rg" {
  name = "UKW-elduddz"
}

data "azurerm_app_service_plan" "sp" {
  name                = "asp-elduddz"
  resource_group_name = "UKW-elduddz"

}

resource "azurerm_app_service" "appvc" {
  name                = var.webservice_name
  location            = data.azurerm_resource_group.rg.location
  resource_group_name = data.azurerm_resource_group.rg.name
  app_service_plan_id = data.azurerm_app_service_plan.sp.id

  site_config {
    dotnet_framework_version = "v4.0"
    scm_type                 = "LocalGit"
  }

  app_settings = {
    "dependencygraphurl" = var.dependency_graph_url
    "code"               = var.dependency_graph_code
  }
}

resource "azurerm_application_insights" "appInsight" {
  name                = "${var.webservice_name}-appInsight"
  resource_group_name = data.azurerm_resource_group.rg.name
  location            = data.azurerm_resource_group.rg.location
  application_type    = "Other"
}
