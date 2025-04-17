
# BestBuy Staff Service Microservice

## Overview

This project is a microservice developed for Best Buy's internal system to manage staff information. It provides RESTful API endpoints to perform full CRUD (Create, Read, Update, Delete) operations on staff data, which is stored in memory. The service is built using Node.js with Express and deployed on Azure Kubernetes Service (AKS).

## Technologies Used

- Node.js
- Express.js
- Azure Kubernetes Service (AKS)
- Kubernetes CLI (kubectl)
- Azure CLI
- GitHub (Private Repository)
- GitHub Actions (CI/CD) [in progress]
- Docker (skipped due to issues)

## API Endpoints

| Method | Endpoint           | Description                 |
|--------|--------------------|-----------------------------|
| GET    | /api/staff         | Get all staff members       |
| GET    | /api/staff/:id     | Get a staff member by ID    |
| POST   | /api/staff         | Create a new staff member   |
| PUT    | /api/staff/:id     | Update a staff member       |
| DELETE | /api/staff/:id     | Delete a staff member       |

## How to Run Locally

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/bestbuy-staff-service.git
   cd bestbuy-staff-service
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the application:
   ```
   node index.js
   ```

4. Open your browser or API testing tool and navigate to:
   ```
   http://localhost:3000/api/staff
   ```

## Deployment on Azure Kubernetes Service (AKS)

1. Created an AKS cluster using the Azure CLI.
2. Created `deployment.yaml` that defines both the Deployment and Service for the application.
3. Used the following command to deploy:
   ```
   kubectl apply -f deployment.yaml
   ```

4. Attempted to expose the application using a LoadBalancer service. However, the service is still showing `<pending>` under `EXTERNAL-IP`.

## Issues Faced and Solutions

### 1. Docker not working on WSL 1

**Problem:** Docker commands failed with the message `'docker' could not be found in this WSL 1 distro`.

**Action Taken:** Attempted to switch to WSL 2 but faced compatibility issues. Eventually switched to MacBook, but later skipped Docker steps to avoid delays.

**Status:** Docker section skipped. Will revisit if time allows.

---

### 2. Docker Desktop limitations on Windows

**Problem:** Docker Desktop required WSL 2 integration which was not enabled or functional in my setup.

**Action Taken:** Skipped Docker entirely and moved forward with Kubernetes deployment directly using local code files.

**Status:** Skipped Docker image build and push. Planning to complete this later.

---

### 3. Deployment file error: File not found

**Problem:** Received an error that `deployment.yaml` could not be found.

**Action Taken:** Realized the file was mistakenly named `.deployment` instead of `deployment.yaml`. Renamed it properly.

**Status:** Resolved.

---

### 4. No External IP on LoadBalancer

**Problem:** After deploying to AKS, the LoadBalancer service showed `<pending>` under the `EXTERNAL-IP` field.

**Action Taken:** Waited for several minutes; no IP was assigned. Verified AKS node and found no external IP available on the node either.

**Status:** Unresolved. External access to service is currently not possible. Considering checking Azure portal for manual IP assignment or revisiting service configurations.

---

### 5. NodePort temporary workaround unsuccessful

**Problem:** Attempted to switch from LoadBalancer to NodePort to access the service using the node’s public IP, but node also had `<none>` as external IP.

**Action Taken:** Verified node IP using:
   ```
   kubectl get nodes -o wide
   ```

Found that the node had no external IP either. Could not access NodePort externally.

**Status:** Unresolved. Reverted back to LoadBalancer.

---

### 6. Could not test application publicly

**Problem:** Due to no external IP from the LoadBalancer and no public IP on the node, the service could not be accessed from a browser or Postman.

**Action Taken:** Verified all configurations, ports, YAML files, and Kubernetes commands. Re-applied deployment. No errors in logs, service is running correctly in cluster.

**Status:** Service is running internally in AKS but not publicly accessible.

---

## CI/CD Pipeline (In Progress)

A GitHub Actions workflow (`ci_cd.yaml`) will be added to:
- Build the application
- Deploy to AKS
- (Docker step will be added once Docker setup is complete)

This will be committed in the `.github/workflows/` directory.

## Repository Info

- GitHub Repository Name: `bestbuy-staff-service`
- Shared with Instructor: `ramymohamed10` (private access granted)



Project for Best Buy – Internal Staff Service
