# Project Requirements

 **Individual and cost-optimized**

## 1. Updated Software Stack

### Core Technologies

| Software     | Version | Purpose            | License Type |
|--------------|---------|--------------------|--------------|
| Python       | 3.9+    | Core Development   | Open Source  |
| CUDA         | 11.6+   | GPU Support        | Free         |
| cuDNN        | 8.4.0   | Deep Learning      | Free Developer|
| Docker       | 20.10+  | Containerization   | Free CE      |
| Git          | 2.35+   | Version Control    | Open Source  |

### Development Environment

| Tool            | Version | Purpose              | Cost      |
|-----------------|---------|----------------------|-----------|
| Google Colab    | Latest  | Primary Development  | Free/Pro  |
| Jupyter Lab     | 3.6+    | Local Development    | Free      |
| Wandb           | Free Tier| Experiment Tracking  | Free      |
| GitHub          | Latest  | Version Control      | Free      |

### ML Frameworks (Pre-installed in Colab)

| Framework      | Version | Purpose            |
|----------------|---------|--------------------|
| TensorFlow     | 2.12.0  | Model Training     |
| PyTorch        | 2.0.0   | Model Training     |
| scikit-learn   | 1.2.2   | ML Processing      |
| OpenCV         | 4.8.0   | Image Processing   |
| albumentations | 1.3.1   | Data Augmentation  |
| MONAI          | 1.2.0   | Medical Imaging    |

## 2. Revised Hardware Requirements

### Development (Using Colab)

| Component | Specification | Cost      |
|-----------|---------------|-----------|
| CPU       | Colab Provided| Included  |
| RAM       | 25GB          | Included  |
| GPU       | T4/P100       | Included  |
| Storage   | 100GB (Drive) | Included  |
| **Total** |               | **$0-10/month**|

### Production (Azure ML)

| Component     | Specification        | Monthly Cost |
|---------------|----------------------|--------------|
| Instance      | Standard_NC6s_v3    | $400-600     |
| Storage       | 1TB Blob Storage     | $100         |
| **Total**     |                      | **$500-700** |

## 3. Revised Cloud Resources

### Development Environment

| Resource      | Specification | Monthly Cost |
|---------------|---------------|--------------|
| Colab         | Free/Pro      | $0-10        |
| Google Drive  | 100GB         | Included     |
| GitHub        | Free Tier     | $0           |
| **Total Dev** |               | **$0-10**    |

### Production Environment

| Resource          | Specification       | Monthly Cost |
|-------------------|---------------------|--------------|
| Azure ML Compute | Standard_NC6s_v3    | $400-600     |
| Azure Blob Storage| 500GB               | $12          |
| Bandwidth         | 100GB               | $9           |
| **Total Prod**    |                     | **$421-621** |

## 4. Storage Strategy

| Data Type        | Storage Solution  | Monthly Cost |
|------------------|-------------------|--------------|
| Development Data | Google Drive      | Included in Colab |
| Training Data    | Azure Blob Storage| $12          |
| Model Artifacts  | Azure Blob Storage| Included above |
| Logs & Metrics   | Local/Azure Blob  | Included above |
| **Total**        |                   | **$12**      |

## 5. Cost Optimization

### Development

-   Use Colab's GPU when needed
-   Local Jupyter for non-GPU tasks
-   Wandb free tier for experiment tracking
-   Google Drive for storage
-   GitHub for version control

### Production

-   Use Azure ML Managed Compute
-   Azure Blob Storage for data and model artifacts
-   Leverage Azure ML auto-scaling and auto-shutdown
-   Basic monitoring using Azure ML tools (e.g., metrics, logs)

## 6. Monthly Cost Summary

### Minimum Viable Setup

| Component              | Monthly Cost |
|------------------------|--------------|
| Development (Colab)    | $0-10        |
| Production (Azure ML)  | $421-621     |
| Storage (Azure Blob)   | $12          |
| **Total Monthly**      | **$433-643** |

## 7. Free Alternatives

-   Use Colab Free instead of Pro ($0)
-   Kaggle Notebooks for additional GPU hours ($0)
-   Paperspace Gradient Free tier ($0)
-   GitHub Student Pack benefits if eligible


This revised document now includes Git for version control and basic monitoring capabilities while maintaining the other constraints of using Google Colab for development, Azure ML for production, and keeping a cost-optimized approach.
