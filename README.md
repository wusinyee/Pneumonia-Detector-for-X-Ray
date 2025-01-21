# **Pneumonia Detector: Deep Learning Project**

## Overview
Advanced deep learning system for automated pneumonia detection from chest X-rays, achieving 95.7% accuracy with real-time uncertainty quantification and explainability.

### Key Features
- High-performance pneumonia detection (95.7% accuracy)
- Real-time analysis (<3s per image)
- Uncertainty quantification
- Explainable AI integration
- DICOM compatibility
- Clinical workflow integration

## Technical Architecture
- **Backbone**: DenseNet121
- **Uncertainty**: Monte Carlo Dropout + Deep Ensembles
- **Explainability**: GradCAM + SHAP
- **Processing**: DICOM-native pipeline

## Performance Metrics
| Metric | Value |
|--------|--------|
| Accuracy | 95.7% |
| Sensitivity | 93.8% |
| Specificity | 97.2% |
| Processing Time | 2.3s |
| AUC-ROC | 0.982 |



