### **3. Dataset Curation**
#### **3.1 Primary Sources**
1. **NIH ChestX-ray14 Dataset**:
   - **Description**: 112,120 frontal-view chest X-ray images from 30,805 unique patients, labeled for 14 thoracic pathologies, including pneumonia.
   - **Action**: Download the dataset from the NIH repository and extract the images and metadata.

2. **CheXpert Dataset**:
   - **Description**: 224,316 chest radiographs from 65,240 patients, labeled for 14 observed pathologies, including pneumonia, with uncertainty labels.
   - **Action**: Download the dataset from the Stanford repository and extract the images and labels.

3. **RSNA Pneumonia Detection Challenge**:
   - **Description**: 26,684 chest X-ray images with annotations for pneumonia and bounding boxes for lung opacities.
   - **Action**: Download the dataset from the RSNA repository and extract the images and annotations.

4. **Kaggle Pneumonia Dataset**:
   - **Description**: 5,863 chest X-ray images (JPEG format) categorized into two classes: "Normal" and "Pneumonia."
   - **Action**: Download the dataset from Kaggle and extract the images.

5. **Dataset Integration**:
   - **Combined Dataset**: Merge all datasets into a single repository, ensuring consistent file naming and directory structure.
   - **Total Images**: ~300,000 chest X-rays.
   - **Class Distribution**: 70% Pneumonia, 30% Normal.

---

#### **3.2 Storage and Computational Needs**
1. **Storage Requirements**:
   - **Raw Images**: ~300 GB (300,000 images at ~1 MB each).
   - **Preprocessed Data**: ~500 GB (including augmented and segmented images).
   - **Model Checkpoints**: ~50 GB (for multiple training iterations).
   - **Total Storage**: ~850 GB (minimum).

2. **Computational Requirements**:
   - **GPUs**: NVIDIA A100 or equivalent (4 GPUs recommended for parallel training).
   - **RAM**: 256 GB for large batch processing.
   - **Storage**: High-speed SSDs for efficient data loading.

---

#### **3.3 Data Preprocessing Pipeline**
1. **Resizing**:
   - **Objective**: Standardize image resolution for consistent input to the model.
   - **Action**:
     - Use OpenCV or PIL to resize all images to 1024x1024 pixels.
     - Example code:
       ```python
       from PIL import Image
       import os

       def resize_images(input_dir, output_dir, size=(1024, 1024)):
           for filename in os.listdir(input_dir):
               img = Image.open(os.path.join(input_dir, filename))
               img = img.resize(size, Image.ANTIALIAS)
               img.save(os.path.join(output_dir, filename))
       ```

2. **Normalization**:
   - **Objective**: Standardize pixel values to improve model convergence.
   - **Action**:
     - Apply Z-score normalization to each image.
     - Example code:
       ```python
       import numpy as np

       def normalize_image(image):
           mean = np.mean(image)
           std = np.std(image)
           normalized_image = (image - mean) / std
           return normalized_image
       ```

3. **Augmentation**:
   - **Objective**: Increase dataset diversity and improve model robustness.
   - **Action**:
     - Apply transformations like rotation (±10°), flipping (horizontal), and zooming (up to 10%).
     - Example code:
       ```python
       from tensorflow.keras.preprocessing.image import ImageDataGenerator

       datagen = ImageDataGenerator(
           rotation_range=10,
           horizontal_flip=True,
           zoom_range=0.1
       )
       ```

4. **Lung Segmentation**:
   - **Objective**: Focus on lung regions to reduce noise and improve model accuracy.
   - **Action**:
     - Use a pre-trained U-Net model to segment lung regions from the chest X-rays.
     - Example code:
       ```python
       from keras.models import load_model

       unet_model = load_model('unet_lung_segmentation.h5')
       segmented_image = unet_model.predict(image)
       ```

5. **Quality Assurance**:
   - **Objective**: Remove corrupted or low-quality images from the dataset.
   - **Action**:
     - Use automated scripts to detect and remove corrupted images.
     - Example code:
       ```python
       from PIL import Image
       import os

       def check_image_quality(image_path):
           try:
               img = Image.open(image_path)
               img.verify()
               return True
           except:
               return False

       for filename in os.listdir(input_dir):
           if not check_image_quality(os.path.join(input_dir, filename)):
               os.remove(os.path.join(input_dir, filename))
       ```

6. **Train/Validation/Test Split**:
   - **Objective**: Create training, validation, and test sets for model evaluation.
   - **Action**:
     - Use a stratified split to maintain class distribution across sets.
     - Example code:
       ```python
       from sklearn.model_selection import train_test_split

       X_train, X_test, y_train, y_test = train_test_split(
           images, labels, test_size=0.15, stratify=labels
       )
       X_train, X_val, y_train, y_val = train_test_split(
           X_train, y_train, test_size=0.176, stratify=y_train
       )
       ```

---

### **Summary of Dataset Curation Workflow**
1. **Data Download**:
   - Download datasets from NIH, CheXpert, RSNA, and Kaggle.
2. **Data Integration**:
   - Merge datasets into a single repository.
3. **Storage and Computational Setup**:
   - Allocate ~850 GB storage and ensure access to high-performance GPUs.
4. **Preprocessing**:
   - Resize images, apply normalization, perform augmentation, segment lungs, and ensure quality.
5. **Data Splitting**:
   - Create training (70%), validation (15%), and test (15%) sets.

