Get-Content .\deployments\site.yaml | %{$_ -replace "__DEPLOYMENT_TAG__","v0.1.0"} | kubectl apply -f -
