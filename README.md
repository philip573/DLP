# Deep Learning Image Classifier

*COMPANY NAME*: CODTECH IT SOLUTIONS
*NAME*: STALLAN N PHILOS
*INTER ID*:CT08DL10
*DOMAIN*: DATA SCIENCE
*DURATION*: 8 WEEKS
*MENTOR*: NEELA SANTHOSH


# Deep Learning Image Classifier :

This project demonstrates a real-time image classification system built using TensorFlow\.js that runs entirely in the browser—no backend required. Users can upload any image, and the model instantly predicts the object category using a pre-trained deep learning model (MobileNet). The predictions are displayed with dynamic confidence bars, and successful classification is celebrated with a confetti animation for an engaging user experience.

# Features

* Top 3 predictions using MobileNet
* Confidence bars for each prediction
* Confetti animation on successful prediction
* Instant image preview
* Fully client-side only, no backend
* Runs smoothly in any modern browser

## Technologies Used

| Type             | Tool/Library          |
| ---------------- | --------------------- |
| Deep Learning    | TensorFlow\.js        |
| Pretrained Model | MobileNet             |
| Frontend         | HTML, CSS, JavaScript |
| Animation        | Canvas Confetti       |

## How It Works

1. User uploads an image (PNG/JPG).
2. TensorFlow\.js loads a MobileNet model in the browser.
3. The image is classified in real-time, and predictions are generated.
4. Top 3 predictions are displayed with progress bars showing the confidence.
5. A confetti animation is triggered after prediction.

## Project Structure

```
image_classifier_project/
├── index.html        → Main HTML file
├── style.css         → CSS styling with bar visuals
├── script.js         → JS logic with TensorFlow and animations
```

## How to Run

1. Clone or download the repository
2. Open the folder in Visual Studio Code
3. Install the Live Server Extension
4. Right-click on index.html and choose "Open with Live Server"
5. Upload any image and get instant predictions

## Real-World Applications

* Educational AI demos for classrooms and tech fairs
* Embedded browsers in kiosks or smart mirrors
* Client-side image filtering or preview
* Lightweight ML demo for interviews or GitHub portfolio

